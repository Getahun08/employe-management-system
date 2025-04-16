from django.db import models
from django_countries.fields import CountryField
from django.core.validators import MinLengthValidator

import random
import string

def unique_id():
    prefix = 'I4U'
    middle = '/'
    suffix = ''.join(random.choices(string.digits, k=10))
    return f'{prefix}{middle}{suffix}'

class EmployementDetails(models.Model):
    #bio
    GENDER_CHOICES = [
    ('M', 'Male'),
    ('F', 'Female'),
    ('O','Others')
     ]
    CITY_CHOICES = [
    ('Aadis', 'Addis'),
    ('Jima', 'Jima'),
    ('Hawsa', 'Hawasa')
]

    employement_type_CHOICES = [
    ('FT', 'Full-Time'),
    ('PT', 'Part-Time'),
    ('CT','contract'),
    ('Fx','Filexble')
]
    first_name=models.CharField(max_length=70)
    middle_name=models.CharField(max_length=70)
    last_name=models.CharField(max_length=70)
    gender=models.CharField(max_length=10,choices=GENDER_CHOICES)
    date_of_birth=models.DateField()
    # contact
    email=models.EmailField(unique=True)
    mobile_number=models.CharField(max_length=30)
    home_address=models.CharField(max_length=100)
    city=models.CharField(max_length=160,choices=CITY_CHOICES)
    nationality=CountryField(blank_label='(select country)' ,max_length=150)
    postal_code=models.CharField(max_length=20)
    # empo loye info
    employe_id = models.CharField(unique=True,max_length=30,default=unique_id)
    job_title=models.CharField(max_length=40)
    departements=models.ManyToManyField('Departement',blank=True)
    employement_type=models.CharField(max_length=23,choices=employement_type_CHOICES)
    superviser=models.CharField(null=True,blank=True,max_length=20)
    start_date=models.DateTimeField()
    end_date=models.DateTimeField()
#addd
    #next_of_kin=models.CharField(max_length=200)
    #next_of_kin_phone=models.CharField(max_length=30)
   # next_of_kin_address=models.CharField
    #next_of_kin_relash

    created_at=models.DateTimeField(auto_now_add=True)
    modified_at=models.DateTimeField(auto_now=True)

    class meta:
        verbose_name='Employement Detial'
        verbose_name_pulural='Employement Detials'


    

    def generate_employe_id(self): 
        the_employe_id = unique_id()
        while EmployementDetails.objects.filter(employe_id=the_employe_id).exists():
            the_employe_id = unique_id()
        return the_employe_id
        

    def save(self, *args, **kwargs):
        if not self.employe_id: 
            self.employe_id = self.generate_employe_id()
        super(EmployementDetails, self).save(*args, **kwargs)      
    def __str__(self):
        return f' {self.first_name}'
 


       

class Departement(models.Model):
    name_of_departement=models.CharField(max_length=120,unique=True)
    departement_code=models.CharField(max_length=30,unique=True)
    departement_head=models.OneToOneField('EmployementDetails',null=True,blank=True,on_delete=models.SET_NULL, related_name='head_of_departement')
    description=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

           #string reprsentation
    def __str__(self):
        return self.name_of_departement
    
class Skills(models.Model):
    skill_get=[
        ('remote','Remote'),
        ('onsite','Onsite'),
        ( 'hybrid','Hybrid')
    ]

    name_of_skill=models.CharField(max_length=36)
    descriptions=models.TextField()
    dept=models.ManyToManyField('Departement',max_length=30)
    location_of_skill_get=models.CharField(max_length=45,choices=skill_get)
    def __str__(self):
        return self.name_of_skill
class EmployeSkill(models.Model):
    knowladge_level=[

        ('Advanced','advanced'),
        ('middle_level','middle_level'),
        ('Beginer','Beginer')
    ]
    employe=models.ForeignKey(EmployementDetails,on_delete=models.CASCADE)
    skill_optaian=models.ForeignKey(Skills,on_delete=models.CASCADE)
    proficions=models.CharField(max_length=200,choices=knowladge_level)
    def __str__(self):
        return f'{self.employe}{self.skill_optaian}'
class Register(models.Model):
    email=models.EmailField( unique=True)
    user_name=models.CharField(max_length=50,unique=True)
    password=models.CharField(max_length=128,unique=True,validators=[MinLengthValidator(8)])
    def __str__(self):
        return self.user_name

class Login(models.Model):
    user_name = models.ForeignKey(Register, on_delete=models.CASCADE, related_name='usernames')
    password = models.CharField(max_length=128)

    def is_valid_user(self):
        try:
        
            registered_user = Register.objects.get(user_name=self.user_name.user_name)  

        
            return registered_user.password == self.password
        except Register.DoesNotExist:
            return False  

    def __str__(self):
        return str(self.user_name.user_name)  



