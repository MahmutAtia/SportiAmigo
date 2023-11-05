from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import get_user_model
from .serializers import  RegistrationSerializer , UserSerializer,LoginSerializer
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from .models import CustomUser  

User = get_user_model()

# Registration view
@api_view(['POST'])
def registration_view(request):
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save() # we create a new user
        user = User.objects.get(email=request.data['email'])
        user.set_password(request.data['password'])
        user.is_active = True
        user.save()
        return Response({'msg': "User Created", 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_200_OK)



# Login view using ObtainAuthToken

@api_view(['POST'])
def login(request):    
    user = get_object_or_404(CustomUser, email=request.data['email'])
    print(user.password)
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})

# Profile view for authenticated users
class UserProfileView(APIView):
    authentication_classes = ([SessionAuthentication, TokenAuthentication])
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user_data = UserSerializer(request.user).data
        return Response(user_data, status=status.HTTP_200_OK)
