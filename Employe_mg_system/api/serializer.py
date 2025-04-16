
from rest_framework import serializers
from .models import Skills 
from .models import EmployementDetails,Departement,Skills,EmployeSkill,Login,Register
class EmployementDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=EmployementDetails
        exclude=['created_at','modified_at']
        
class Departementserializer(serializers.ModelSerializer):
    class Meta:
        model=Departement
        exclude=['created_at','updated_at']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills  
        fields = '__all__'

class Empskillserializer(serializers.ModelSerializer):
    class Meta:
        model=EmployeSkill
        fields='__all__'  
               
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login  
        fields = '__all__'

class Registerserializer(serializers.ModelSerializer):
    class Meta:
        model=Register
        fields='__all__'                 