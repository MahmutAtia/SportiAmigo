from django.contrib import admin
from .models import Facility, FacilityReservation, FacilityCheckIn

# Register your models here.
admin.site.register([Facility, FacilityReservation, FacilityCheckIn])