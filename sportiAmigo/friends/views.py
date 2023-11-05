from rest_framework import generics, permissions, status
from rest_framework.response import Response
from userauth.models import CustomUser
from .models import Friendship
from .serializers import FriendshipSerializer

class FriendshipListView(generics.ListCreateAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(from_user=self.request.user)

class FriendshipDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer
    permission_classes = [permissions.IsAuthenticated]