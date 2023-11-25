from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import get_user_model
from .serializers import  RegistrationSerializer , UserSerializer,UserLoginSerializer, FacilityAdministratorSerializer
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from .models import CustomUser , FacilityAdministrator
from rest_framework import generics

from search.serializers import SearchUserSerializer

# User = get_user_model()

# Registration view
@api_view(['POST'])
def registration_view(request):

    data = request.data
    print(data)
    data["email"] = data["email"].lower()
    data.pop('password2')

    serializer = RegistrationSerializer(data=data)
    if serializer.is_valid():
        serializer.save() # we create a new user
        user = CustomUser.objects.get(email=data["email"])
        user.set_password(request.data['password'])
        user.is_active = True #make the user active
        user.save()

        token, created = Token.objects.get_or_create(user=user) # if the user want to contiuue to update his profile not skip it
        return Response({'msg': "User Created", 'user': serializer.data, 'userToken': token.key}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_200_OK)



# Login view using ObtainAuthToken

@api_view(['POST'])
def login(request):    
    user = get_object_or_404(CustomUser, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_401_UNAUTHORIZED)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserLoginSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})




# User Detail view retrive view
class OtherUserDetailView(generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'







        
       





    # def get(self, request, pk):
    #     user = get_object_or_404(CustomUser, pk=pk)
    #     serializer = UserSerializer(user)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

    # def put(self, request, pk):
    #     user = get_object_or_404(CustomUser, pk=pk)
    #     serializer = UserSerializer(user, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)
        
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Profile view for authenticated users
class UserProfileView(APIView):
    authentication_classes = ([SessionAuthentication, TokenAuthentication])
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user_data = UserSerializer(request.user).data
        return Response(user_data, status=status.HTTP_200_OK)

    def put(self, request):
        # request.data.pop("date_of_birth")
        # request.data.pop("favorite_sports")
        serializer = UserSerializer(request.user, data=request.data, partial=True)
       
        print(serializer.initial_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class FacilityAdministratorView(APIView):
    authentication_classes = ([SessionAuthentication, TokenAuthentication])
    permission_classes = (IsAuthenticated,)
    serializer_class = FacilityAdministratorSerializer


    # def get(self, request):
    #     user_data = FacilityAdministratorSerializer(request.user).data
    #     return Response(user_data, status=status.HTTP_200_OK)
        
    def post(self, request):
        data = request.data
        user = request.user
        
        serializer = FacilityAdministratorSerializer(data=data , context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request):
        data = FacilityAdministrator.objects.get(user=request.user)
        serializer = FacilityAdministratorSerializer(data)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # def put(self, request):
    #     # request.data.pop("date_of_birth")
    #     # request.data.pop("favorite_sports")
    #     serializer = UserSerializer(request.user, data=request.data, partial=True)
       
    #     print(serializer.initial_data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST