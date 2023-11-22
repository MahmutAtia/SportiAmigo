from django.shortcuts import render
from rest_framework import generics, permissions, status
from userauth.models import CustomUser
from .serializers import SearchUserSerializer
from django.db import models


# Create your views here.



class SearchUserView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = SearchUserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        query = self.request.query_params.get('query', None)
        if query is not None:
            # Search by first name or last name or email
    
            
            return CustomUser.objects.filter(
                models.Q(first_name__icontains=query) |
                models.Q(last_name__icontains=query) |
                models.Q(email__icontains=query)
            ).exclude()
         
        return CustomUser.objects.none()
