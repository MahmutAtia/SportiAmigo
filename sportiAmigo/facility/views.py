# facility/views.py

from rest_framework import generics
from .models import Facility, FacilitySportSchedule
from .serializers import FacilitySerializer, FacilitySportScheduleSerializer
from .utils import get_day_of_week
class FacilityListView(generics.ListCreateAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer   

    def get_queryset(self):
        sport_id = self.request.query_params.get('sport_id')
        if sport_id:
            facilities = Facility.objects.filter(sports__id=sport_id)
        else:
            facilities = Facility.objects.all()
        return facilities

class FacilityDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer



class FacilitySportScheduleListView(generics.ListCreateAPIView):

    queryset = FacilitySportSchedule.objects.all()
    serializer_class = FacilitySportScheduleSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['booking_date'] = self.kwargs['date']
        return context

    def get_queryset(self):
        date = self.kwargs['date']
        facility_id = self.kwargs['facility_id']
        sport_id = self.kwargs['sport_id']
        day_of_week = get_day_of_week(date)

    



        

        return FacilitySportSchedule.objects.filter(facility_id=facility_id, sport_id=sport_id, day_of_week=day_of_week)


