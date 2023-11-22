from rest_framework import serializers
from userauth.models import CustomUser

# class FriendshipSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Friendship
#         fields = [ 'to_user']

        


#     def create(self, validated_data):
#         validated_data['from_user'] = self.context['request'].user
#         validated_data['accepted'] = False
#         friendship = Friendship.objects.create(**validated_data)
#         return friendship
    


# class FriendshipLisetSerializer(serializers.ModelSerializer):
#     other_user = serializers.SerializerMethodField()
#     class Meta:
#         model = Friendship
#         fields = [ 'id', 'accepted', 'other_user']
    
 


    
     


# class OtherUserSerializer(serializers.ModelSerializer):
#     is_friend = serializers.SerializerMethodField()
#     class Meta:
#         model = CustomUser
#         fields = ['id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'phone_number', 'date_of_birth', 'gender',    'favorite_sports', 'location_latitude', 'location_longitude', 'location_address',
#             'coutry', 'state', 'city','is_facility_admin', 'is_friend']
#         read_only_fields = ['is_friend']
        
#     def get_is_friend(self, obj):
#             user = self.context['request'].user
#             # pending or accepted or not a friend
#             friendship = Friendship.objects.filter(from_user=user, to_user=obj).first() or Friendship.objects.filter(from_user=obj, to_user=user).first()   
#             if friendship:
#                 return friendship.accepted
#             else:
#                 return None
            
    
