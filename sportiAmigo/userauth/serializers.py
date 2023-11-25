
from rest_framework import serializers
from .models import CustomUser, FacilityAdministrator
from facility.serializers import FacilitySerializer
from friends.models import FriendList
from friends.utils import get_friend_request_or_false, FriendRequestStatus
from booking.serializers import BookingSerializer
from search.serializers import SearchUserSerializer
import datetime


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
            






class FriendSerializer(serializers.ModelSerializer):
    is_self = serializers.SerializerMethodField()
    is_friend = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'last_name', 'email', 
                #  'profile_picture',
                    'state', 'city', 'is_self' ,'is_friend'

                  ]
        
    def get_is_friend(self, obj):
        user = self.context['request'].user
        try:
            friend_list = FriendList.objects.get(user=user)
            friends = friend_list.friends.filter(id=obj.id)
            return friends.exists()
        except FriendList.DoesNotExist:
            return False
    
    def get_is_self(self, obj):
        user = self.context['request'].user
        return user.id == obj.id
    
        
class UserSerializer(serializers.ModelSerializer):

    is_self = serializers.SerializerMethodField()
    is_friend = serializers.SerializerMethodField()
    user_status = serializers.SerializerMethodField()
    friends = serializers.SerializerMethodField()
    booked_sport_schedules = serializers.SerializerMethodField()

      
    
    

    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name', 'email',
                  'is_active', 'is_staff', 'phone_number', 'date_of_birth', 'gender',
        # 'profile_picture', 
         'favorite_sports', 'location_latitude', 'location_longitude', 'location_address',
            'coutry', 'state', 'city','is_facility_admin',
             'state', 'city', 
             'is_self' ,'is_friend', 'user_status', 'friends',
                'booked_sport_schedules'
         )
        

        

   

    def get_is_friend(self, obj):
        user = self.context['request'].user
        try:
            friend_list = FriendList.objects.get(user=user)
            return friend_list.is_mutual_friend(obj)
        
        except FriendList.DoesNotExist:
            print("--------------------------------------------------------------")
            print("FriendList.DoesNotExist")
            print("--------------------------------------------------------------")
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



    def get_friends(self, obj):
        # access friends set through user , user is the related name in friends model
        try:
            friend_list = FriendList.objects.get(user=obj)
            friends = friend_list.get_friends()

            # serialize the friends set
            friends = FriendSerializer(friends, many=True,
                                        context={'request': self.context['request']}
                                       
                                       ).data
            return friends
        except FriendList.DoesNotExist:
            print("--------------------------------------------------------------")
            print("FriendList.DoesNotExist")
            print("--------------------------------------------------------------")

            FriendList.objects.create(user=obj)   # create a friend list for the user if it does not exist
            return []
         
     
    def get_booked_sport_schedules(self, obj):
        # access booking set through user , user is the related name in booking model
        booked_sport_schedules = obj.booking_set.filter(booking_date__gte=datetime.date.today()).order_by('booking_date')
        
        # serialize the booking set
        booked_sport_schedules = BookingSerializer(booked_sport_schedules, many=True).data
        return booked_sport_schedules

    

        


class FacilityAdministratorSerializer(serializers.ModelSerializer):

    facility = FacilitySerializer()
    
    class Meta:
        model = FacilityAdministrator
        fields = [ 'role', 'facility', 'responsibilities', 'working_hours']
        
        
  
    
    def create(self, validated_data):
        user = self.context['request'].user  # Get the authenticated user
        facility_administrator = FacilityAdministrator.objects.create(user=user, **validated_data)
        return facility_administrator