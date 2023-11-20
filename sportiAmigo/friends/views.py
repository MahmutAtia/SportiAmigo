from rest_framework import generics, permissions, status
from rest_framework.response import Response
from userauth.models import CustomUser
from userauth.serializers import UserSerializer
from .models import Friendship
from .serializers import FriendshipSerializer


class SearchUserView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        query = self.request.query_params.get('query', None)
        if query is not None:
            return CustomUser.objects.filter(email__icontains=query,first_name__icontains=query,last_name__icontains=query
                                             ).exclude(id=user.id)
        return CustomUser.objects.none()


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