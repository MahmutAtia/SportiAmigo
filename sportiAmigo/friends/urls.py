from django.urls import path
from . import views
urlpatterns = [
  path('send-request/<int:pk>/', views.send_friend_request, name='send-request'),
    path('accept-request/<int:pk>/', views.accept_friend_request, name='accept-request'),
    path('decline-request/<int:pk>/', views.decline_friend_request, name='decline-request'),
    path('cancel-request/<int:pk>/', views.cancel_friend_request, name='cancel-request'),
    path('unfriend/<int:pk>/', views.unfriend, name='unfriend'),
]