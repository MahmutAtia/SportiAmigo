# facility/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('facilities/', views.FacilityListView.as_view(), name='facility-list'),
    path('facilities/<int:pk>/', views.FacilityDetailView.as_view(), name='facility-detail'),
    path('facilities/schedule/<int:facility_id>/<int:sport_id>/<slug:date>/'
         , views.FacilitySportScheduleListView.as_view(), name='facility-schedule-list'),
 
]