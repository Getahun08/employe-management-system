from django.contrib import admin
from .models import EmployementDetails 
from .models import Departement
from .models import Skills
from .models import EmployeSkill
from .models import Register
from .models import Login


# Register your models here.ploye_adm
class employe_detials_admin(admin.ModelAdmin):
    list_display=('first_name','middle_name','employe_id','gender','job_title')
    list_display_links=('employe_id',)
class employe_depat_admin(admin.ModelAdmin):
    list_display=('name_of_departement','departement_code','departement_head')
    list_display_links=('departement_code',)
class skill_admin (admin.ModelAdmin):
    list_display=('name_of_skill','location_of_skill_get')  
class emp_skill(admin.ModelAdmin):
    list_display=('employe','proficions')   
class Register_admin (admin.ModelAdmin):
    list_display=('user_name',)  
class login_Admin(admin.ModelAdmin):
    list_display=('user_name',)       
admin.site.register(EmployementDetails,employe_detials_admin)
admin.site.register(Departement,employe_depat_admin)
admin.site.register(Skills,skill_admin)
admin.site.register(EmployeSkill,emp_skill)
admin.site.register(Register,Register_admin)
admin.site.register(Login,login_Admin)