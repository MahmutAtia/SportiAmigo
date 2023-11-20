from django.urls import path
from .views import FriendshipListView, FriendshipDetailView, SearchUserView

urlpatterns = [
    path('friendships/', FriendshipListView.as_view(), name='friendship-list'),
    path('friendships/<int:pk>/', FriendshipDetailView.as_view(), name='friendship-detail'),
    path('search/', SearchUserView.as_view()
         , name='search-user'),
]