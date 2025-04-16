from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import viewsets
from .serializer import EmployementDetailsSerializer,Departementserializer,SkillSerializer,Empskillserializer,Registerserializer,LoginSerializer
from .models import EmployementDetails,Departement,Skills,EmployeSkill,Register,Login
# Create your views here.
def home(request):
    return HttpResponse('WELL COME TO HOME PAGE')
class Empviewsets(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    queryset=EmployementDetails.objects.all()
    serializer_class=EmployementDetailsSerializer

    def list(self, request):
        display = self.queryset
        serializer = self.serializer_class(display, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  
        
        I4u = self.queryset.get(pk=pk)
        
        serializer = self.serializer_class(I4u)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        

        serializer = self.serializer_class(I4u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        I4u.delete()
        return Response(status=204)
              
class Depviewsets(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    queryset=Departement.objects.all()
    serializer_class=Departementserializer
    def list(self, request):
        display = self.queryset
        serializer = self.serializer_class(display, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  
        
        I4u = self.queryset.get(pk=pk)
        
        serializer = self.serializer_class(I4u)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        

        serializer = self.serializer_class(I4u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        I4u.delete()
        return Response(status=204)
class SkillsViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer

    def list(self, request):
        display = self.queryset
        serializer = self.serializer_class(display, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  
        
        I4u = self.queryset.get(pk=pk)
        
        serializer = self.serializer_class(I4u)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        

        serializer = self.serializer_class(I4u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        I4u.delete()
        return Response(status=204)
     
class empskillviewsets(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]  
    queryset=EmployeSkill.objects.all()
    serializer_class=Empskillserializer
    def list(self, request):
        display = self.queryset
        serializer = self.serializer_class(display, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  
        
        I4u = self.queryset.get(pk=pk)
        
        serializer = self.serializer_class(I4u)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        

        serializer = self.serializer_class(I4u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        I4u.delete()
        return Response(status=204)
    
class Registerviewsets(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]  
    queryset=Register.objects.all()
    serializer_class=Registerserializer
    def list(self, request):
        display = self.queryset
        serializer = self.serializer_class(display, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  
        
        I4u = self.queryset.get(pk=pk)
        
        serializer = self.serializer_class(I4u)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        

        serializer = self.serializer_class(I4u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        I4u.delete()
        return Response(status=204)  


class Loginviewsets(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]  
    queryset=Login.objects.all()
    serializer_class=LoginSerializer
    def list(self, request):
        display = self.queryset
        serializer = self.serializer_class(display, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  
        
        I4u = self.queryset.get(pk=pk)
        
        serializer = self.serializer_class(I4u)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        

        serializer = self.serializer_class(I4u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        
        I4u = self.queryset.get(pk=pk)
        I4u.delete()
        return Response(status=204)      