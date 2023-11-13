
from rest_framework import serializers
from .models import CustomUser, FacilityAdministrator
from facility.serializers import FacilitySerializer



class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email','first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'password']
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'phone_number', 'date_of_birth', 'gender',
        # 'profile_picture', 
         'favorite_sports', 'location_latitude', 'location_longitude', 'location_address',
            'coutry', 'state', 'city','is_facility_admin'
         )
        


class FacilityAdministratorSerializer(serializers.ModelSerializer):

    facility = FacilitySerializer()
    
    class Meta:
        model = FacilityAdministrator
        fields = [ 'role', 'facility', 'responsibilities', 'working_hours']
        
        
  
    
    def create(self, validated_data):
        user = self.context['request'].user  # Get the authenticated user
        facility_administrator = FacilityAdministrator.objects.create(user=user, **validated_data)
        return facility_administrator