
from rest_framework import serializers
from .models import CustomUser



class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email','first_name', 'last_name', 'password']
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'phone_number', 'date_of_birth', 'gender', 'address', 'profile_picture', 'favorite_sports', 'location_latitude', 'location_longitude', 'location_address')