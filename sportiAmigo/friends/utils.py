from .models import  FriendRequest
from enum import Enum

def get_friend_request_or_false(sender, receiver):
    try:
        return FriendRequest.objects.get(sender=sender, receiver=receiver, is_active=True)
    except FriendRequest.DoesNotExist:
        return False
    

class FriendRequestStatus(Enum):

    """ 
    user_status
    -1 = NO_REQUEST_SENT
    1 = YOU_RECEIVED_REQUEST
    0 = YOUR_REQUEST_SENT
    """
    NO_REQUEST_SENT = -1
    YOU_RECEIVED_REQUEST = 1
    YOUR_REQUEST_SENT = 0
    
  