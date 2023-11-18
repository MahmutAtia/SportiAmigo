from rest_framework import serializers
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ['user', 'facility_sport_schedule', 'booking_date', 'booking_time']

    def create(self, validated_data):
        user = self.context['request'].user
        booking = Booking.objects.create(user=user, **validated_data)
        return booking
    
    def validate(self, data):
        # Check if the booking is already made for the same date and time
        user = self.context['request'].user
        facility_sport_schedule = data['facility_sport_schedule']
        booking_date = data['booking_date']
        if Booking.objects.filter(user=user, facility_sport_schedule=facility_sport_schedule, booking_date=booking_date).exists():
            raise serializers.ValidationError("Booking already exists for this date and time")
        return data
    