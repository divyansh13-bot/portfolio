from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

@api_view(['GET'])
def project_list(request):
    return Response({"message": "Projects working ✅"})


@api_view(['POST'])
def contact_create(request):
    return Response({"message": "Contact working ✅"})