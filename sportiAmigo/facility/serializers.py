from rest_framework import serializers
from .models import Facility, FacilityReservation, FacilityCheckIn

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields =  '__all__'




class FacilityReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityReservation
        fields = '__all__'

class FacilityCheckInSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityCheckIn
        fields = '__all__'
