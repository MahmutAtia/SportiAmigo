from rest_framework import serializers
from userauth.models import CustomUser
from friends.models import FriendList
from friends.utils import get_friend_request_or_false, FriendRequestStatus

class SearchUserSerializer(serializers.ModelSerializer):
    is_self = serializers.SerializerMethodField()
    is_friend = serializers.SerializerMethodField()
    user_status = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name',
        # 'profile_picture', 
             'state', 'city', 'is_self' ,'is_friend', 'user_status'
         )
        


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
        return user == obj 
    
   
    
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
