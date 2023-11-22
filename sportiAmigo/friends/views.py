from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import FriendList, FriendRequest
# from .serializers import FriendshipSerializer,FriendshipLisetSerializer
from django.db import models
from userauth.models import CustomUser
from rest_framework.decorators import api_view


    

# class FriendrequestsListView(generics.ListCreateAPIView):
#     queryset = FriendRequest.objects.all()
#     # serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return FriendRequest.objects.filter(receiver=user, is_active=True)
    

@api_view(['POST'])
def send_friend_request(request, pk):
    user = request.user
    friend = CustomUser.objects.get(pk=pk)
    friend_request, created = FriendRequest.objects.get_or_create(
        sender=user,
        receiver=friend,
        is_active=True
    )

    print(friend_request, created, 'friend_request, created', user.id, friend.id)
    if created:
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_304_NOT_MODIFIED)


@api_view(['POST'])
def accept_friend_request(request, pk):
    user = request.user
    friend_request = FriendRequest.objects.get(pk=pk)
    if friend_request.receiver == user:
        friend_request.accept()
        return Response(status=status.HTTP_202_ACCEPTED)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
def decline_friend_request(request, pk):
    user = request.user
    friend_request = FriendRequest.objects.get(pk=pk)
    if friend_request.receiver == user:
        friend_request.decline()
        return Response(status=status.HTTP_202_ACCEPTED)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    

@api_view(['POST'])
def cancel_friend_request(request, pk):
    user = request.user
    print(user, pk, 'cancel_friend_request  ')
    friend_request = FriendRequest.objects.get(pk=pk)
    if friend_request.sender == user:
        friend_request.cancel()
        return Response(status=status.HTTP_202_ACCEPTED)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
def unfriend(request, pk):
    user = request.user
    friend = CustomUser.objects.get(pk=pk)
    friend_list = FriendList.objects.get(user=user)
    friend_list.unfriend(friend)
    return Response(status=status.HTTP_202_ACCEPTED)


# class FriendshipCreateView(generics.CreateAPIView):
#     queryset = Friendship.objects.all()
#     serializer_class = FriendshipSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def perform_create(self, serializer):
#         serializer.save(from_user=self.request.user)




# class FriendshipListView(generics.ListAPIView):
#     queryset = Friendship.objects.all()
#     serializer_class = FriendshipLisetSerializer
#     permission_classes = [permissions.IsAuthenticated]


#     def get_queryset(self):
#         user = self.request.user
#         return Friendship.objects.filter(from_user=user, accepted=True) | Friendship.objects.filter(to_user=user, accepted=True)

# class FriendshipDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Friendship.objects.all()
#     serializer_class = FriendshipSerializer
#     permission_classes = [permissions.IsAuthenticated]