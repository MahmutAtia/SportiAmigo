# userauth/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registration_view, name='user-registration'),
    path('login/', views.login, name='user-login'),
    path('myprofile/', views.UserProfileView.as_view(), name='user-profile'),
    path('facility-admin/', views.FacilityAdministratorView.as_view(), name='facility-admin'),
    path('profile/<int:pk>/', views.OtherUserDetailView.as_view(), name='user-detail'),
    
]