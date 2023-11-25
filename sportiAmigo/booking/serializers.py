from rest_framework import serializers
from .models import Booking
from facility.models import FacilitySportSchedule





class SportScheduleSerializer(serializers.ModelSerializer):


    class Meta:
        model = FacilitySportSchedule
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):


    facility_sport_schedule = SportScheduleSerializer(read_only=True)
    class Meta:
        model = Booking
        fields = ['facility_sport_schedule', 'booking_date']

    def create(self, validated_data):
        user = self.context['request'].user
        booking = Booking.objects.create(user=user, **validated_data)
        return booking
    
    def validate(self, data):
        # Check if the booking is already made for the same date and time
        print( 'data is',data)

        user = self.context['request'].user
        facility_sport_schedule = data['facility_sport_schedule']
        booking_date = data['booking_date']
        print(user, facility_sport_schedule, booking_date)
        if Booking.objects.filter(user=user, facility_sport_schedule=facility_sport_schedule, booking_date=booking_date).exists():
            raise serializers.ValidationError("Booking already exists for this date and time")
        return data
    