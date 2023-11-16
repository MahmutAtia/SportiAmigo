from rest_framework import serializers
from .models import Facility, FacilityReservation, FacilityCheckIn
from sportsapi.serializers import SportSerializer   
from sportsapi.models import Sport


class FacilitySerializer(serializers.ModelSerializer):
    sports = SportSerializer(many=True)
    class Meta:
       
        model = Facility
        fields = '__all__'
    
        

      





class FacilityReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityReservation
        fields = '__all__'

class FacilityCheckInSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityCheckIn
        fields = '__all__'
