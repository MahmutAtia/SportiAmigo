from rest_framework import serializers
from .models import Booking
from facility.models import FacilitySportSchedule





class SportScheduleSerializer(serializers.ModelSerializer):


    class Meta:
        model = FacilitySportSchedule
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):

    # There is a problem here, i am not able to get the facility_sport_schedule object
    
    facility_sport_schedule = SportScheduleSerializer() # i had a problem here, i was using as read only field
    class Meta:
        model = Booking
        fields = [ 'facility_sport_schedule', 'booking_date']
        write_only_fields = ['facility_sport_schedule', 'booking_date']

    def create(self, validated_data):
        user = self.context['request'].user

        facility_sport_schedule_id = validated_data.pop('facility_sport_schedule')

        booking = Booking.objects.create(user=user,            
        facility_sport_schedule_id=facility_sport_schedule_id,
        **validated_data)
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
    