# userauth/views.py

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication

from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.views import APIView

from .models import CustomUser
from .serializers import RegistrationSerializer,UserSerializer

class RegistrationView(generics.CreateAPIView):
    permission_classes = []
    queryset = CustomUser.objects.all()
    serializer_class = RegistrationSerializer

class LoginView(APIView):
    permission_classes = []
    authentication_classes = (TokenAuthentication,)

    def post(self, request):
        return Response({'token': str(request.auth)})

class UserProfileView(generics.RetrieveUpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]



class LoginView(obtain_auth_token):
    """
    Allows users to log in and provides them with an authentication token.
    """
