from django.contrib import admin
from .models import Facility,FacilitySportSchedule

# Register your models here.
admin.site.register([Facility, FacilitySportSchedule])