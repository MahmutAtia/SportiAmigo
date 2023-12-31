from rest_framework import serializers
from .models import Facility, FacilitySportSchedule
from sportsapi.serializers import SportSerializer   
from sportsapi.models import Sport


class FacilitySerializer(serializers.ModelSerializer):
    sports = SportSerializer(many=True)

    class Meta:
       
        model = Facility
        fields = '__all__'
    


class FacilitySportScheduleSerializer(serializers.ModelSerializer):
    available_slots = serializers.SerializerMethodField()
    already_booked = serializers.SerializerMethodField()

    class Meta:
        model = FacilitySportSchedule
        fields = '__all__'
        read_only_fields = ['available_slots', 'already_booked']


    def get_available_slots(self, obj):
        booking_date = self.context['booking_date']
        return obj.available_slots(booking_date)
    
    def get_already_booked(self, obj):
        booking_date = self.context['booking_date']
        user = self.context['request'].user
        return obj.already_booked(booking_date, user)
        
   
        

      


