# facility/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('facilities/', views.FacilityListView.as_view(), name='facility-list'),
    path('facilities/<int:pk>/', views.FacilityDetailView.as_view(), name='facility-detail'),
    path('reservations/', views.FacilityReservationListView.as_view(), name='reservation-list'),
    path('reservations/<int:pk>/', views.FacilityReservationDetailView.as_view(), name='reservation-detail'),
    path('checkins/', views.FacilityCheckInListView.as_view(), name='checkin-list'),
    path('checkins/<int:pk>/', views.FacilityCheckInDetailView.as_view(), name='checkin-detail'),
]
