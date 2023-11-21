from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Friendship
from .serializers import FriendshipSerializer,FriendshipLisetSerializer
from django.db import models
from userauth.models import CustomUser
from .serializers import OtherUserSerializer

class SearchUserView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = OtherUserSerializer
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
            ).exclude(id=user.id)
         
        return CustomUser.objects.none()


class FriendshipCreateView(generics.CreateAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(from_user=self.request.user)




class FriendshipListView(generics.ListAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipLisetSerializer
    permission_classes = [permissions.IsAuthenticated]


    def get_queryset(self):
        user = self.request.user
        return Friendship.objects.filter(from_user=user, accepted=True) | Friendship.objects.filter(to_user=user, accepted=True)

class FriendshipDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer
    permission_classes = [permissions.IsAuthenticated]