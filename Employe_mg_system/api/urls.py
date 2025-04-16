from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('skill',views.SkillsViewSet,basename='skill')
router.register('empdetails',views.Empviewsets,basename='empdetails')
router.register('departement',views.Depviewsets,basename='departement')
router.register('empskill',views.empskillviewsets,basename='empskill')
router.register('register',views.Registerviewsets,basename='register')
router.register('login',views.Loginviewsets,basename='login')
urlpatterns = [
    path('', views.home, name='home'),
    path('api/', include(router.urls)), 
    path('api/', include(router.urls)),
    path('api/', include(router.urls)),
    path('api/', include(router.urls)),
    path('api/', include(router.urls)),
    path('api/', include(router.urls))
]

  