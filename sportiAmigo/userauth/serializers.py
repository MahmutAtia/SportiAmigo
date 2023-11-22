
from rest_framework import serializers
from .models import CustomUser, FacilityAdministrator
from facility.serializers import FacilitySerializer
from friends.models import FriendList
from friends.utils import get_friend_request_or_false, FriendRequestStatus


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email','first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'password']


class UserLoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'phone_number', 'date_of_birth', 'gender',
        # 'profile_picture', 
         'favorite_sports', 'location_latitude', 'location_longitude', 'location_address',
            'coutry', 'state', 'city','is_facility_admin']
            
        
class UserSerializer(serializers.ModelSerializer):

    friends = serializers.SerializerMethodField()
    is_self = serializers.SerializerMethodField()
    is_friend = serializers.SerializerMethodField()
    user_status = serializers.SerializerMethodField()
    
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'phone_number', 'date_of_birth', 'gender',
        # 'profile_picture', 
         'favorite_sports', 'location_latitude', 'location_longitude', 'location_address',
            'coutry', 'state', 'city','is_facility_admin', 'friends','is_self' ,'is_friend', 'user_status'
         )
        

    def get_friends(self, obj):
        try:
            friend_list, created = FriendList.objects.get_or_create(user=obj)
            return friend_list.get_friends()
        except FriendList.DoesNotExist:
            print("FriendList.DoesNotExist")
            return []

    def get_is_friend(self, obj):
        user = self.context['request'].user
        try:
            friend_list = FriendList.objects.get(user=user)
            return friend_list.is_mutual_friend(obj)
        
        except FriendList.DoesNotExist:
            print("FriendList.DoesNotExist")
            return False

    
    def get_is_self(self, obj):
        user = self.context['request'].user
        return user.id == obj.id
    
   
    
    def get_user_status(self, obj):
        user = self.context['request'].user
    
        #case 1 request sent from others to user
        if get_friend_request_or_false(sender=obj, receiver=user) != False:
            return FriendRequestStatus.YOU_RECEIVED_REQUEST.value
        #case 2 request sent from user to others
        elif get_friend_request_or_false(sender=user, receiver=obj) != False:
            return FriendRequestStatus.YOUR_REQUEST_SENT.value
        #case 3 no request sent from both sides
        else:
            return FriendRequestStatus.NO_REQUEST_SENT.value

        


class FacilityAdministratorSerializer(serializers.ModelSerializer):

    facility = FacilitySerializer()
    
    class Meta:
        model = FacilityAdministrator
        fields = [ 'role', 'facility', 'responsibilities', 'working_hours']
        
        
  
    
    def create(self, validated_data):
        user = self.context['request'].user  # Get the authenticated user
        facility_administrator = FacilityAdministrator.objects.create(user=user, **validated_data)
        return facility_administrator