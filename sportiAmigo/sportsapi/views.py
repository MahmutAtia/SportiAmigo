from django.shortcuts import render

# Create your views here.
# sportapi/views.py

from rest_framework import generics
from .models import Sport, Category, SkillLevel
from .serializers import SportSerializer, CategorySerializer, SkillLevelSerializer

class SportListView(generics.ListCreateAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class SportDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SkillLevelListView(generics.ListCreateAPIView):
    queryset = SkillLevel.objects.all()
    serializer_class = SkillLevelSerializer

class SkillLevelDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SkillLevel.objects.all()
    serializer_class = SkillLevelSerializer
