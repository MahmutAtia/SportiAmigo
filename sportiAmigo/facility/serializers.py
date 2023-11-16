from rest_framework import serializers
from .models import Facility, FacilityReservation, FacilityCheckIn
from sportsapi.serializers import SportSerializer   


class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        sports = SportSerializer(many=True)
        model = Facility
        fields =   '__all__'




class FacilityReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityReservation
        fields = '__all__'

class FacilityCheckInSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityCheckIn
        fields = '__all__'
