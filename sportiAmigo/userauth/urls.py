# userauth/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registration_view, name='user-registration'),
    path('login/', views.login, name='user-login'),
    path('profile/', views.UserProfileView.as_view(), name='user-profile'),
]