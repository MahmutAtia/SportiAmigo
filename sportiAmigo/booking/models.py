from django.db import models
from facility.models import FacilitySportSchedule
from userauth.models import CustomUser

# Create your models here.


class Booking(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    facility_sport_schedule = models.ForeignKey(FacilitySportSchedule, on_delete=models.CASCADE)
    booking_date = models.DateField()
    # Add other fields like start_time, end_time for the booking slots, etc.


    def __str__(self):
        return f"{self.user.email} - {self.facility_sport_schedule.facility.name} - {self.facility_sport_schedule.sport.name} - {self.booking_date}"
