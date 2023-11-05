# facility/views.py

from rest_framework import generics
from .models import Facility, FacilityReservation, FacilityCheckIn
from .serializers import FacilitySerializer, FacilityReservationSerializer, FacilityCheckInSerializer

class FacilityListView(generics.ListCreateAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer

class FacilityDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer

class FacilityReservationListView(generics.ListCreateAPIView):
    queryset = FacilityReservation.objects.all()
    serializer_class = FacilityReservationSerializer

class FacilityReservationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacilityReservation.objects.all()
    serializer_class = FacilityReservationSerializer

class FacilityCheckInListView(generics.ListCreateAPIView):
    queryset = FacilityCheckIn.objects.all()
    serializer_class = FacilityCheckInSerializer

class FacilityCheckInDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacilityCheckIn.objects.all()
    serializer_class = FacilityCheckInSerializer
