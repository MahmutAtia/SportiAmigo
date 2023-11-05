from django.db import models
from userauth.models import CustomUser
class Facility(models.Model):
    name = models.CharField(max_length=100, verbose_name="Facility Name")

    # Address of the facility
    address = models.CharField(max_length=200, verbose_name="Facility Address")

    # Maximum capacity of the facility
    capacity = models.PositiveIntegerField(verbose_name="Capacity")

    # Is the facility currently available for use?
    is_available = models.BooleanField(default=True, verbose_name="Is Available")

    # Description of the facility and its amenities
    description = models.TextField(verbose_name="Description", blank=True, null=True)

    # Contact information for facility management
    contact_name = models.CharField(max_length=100, verbose_name="Contact Name", blank=True, null=True)
    contact_phone = models.CharField(max_length=20, verbose_name="Contact Phone", blank=True, null=True)
    contact_email = models.EmailField(verbose_name="Contact Email", blank=True, null=True)

    # Price or cost associated with using the facility
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Price", blank=True, null=True)

    # Operating hours of the facility
    operating_hours = models.CharField(max_length=200, verbose_name="Operating Hours", blank=True, null=True)

    # Facility images (you can use Django's ImageField)
    # facility_images = models.ImageField(upload_to="facility_images/", blank=True, null=True, verbose_name="Facility Images")

    # Latitude and longitude of the facility location
    location_latitude = models.FloatField(blank=True, null=True, verbose_name="Latitude")
    location_longitude = models.FloatField(blank=True, null=True, verbose_name="Longitude")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Facility"
        verbose_name_plural = "Facilities"




class FacilityReservation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    facility = models.ForeignKey(Facility, on_delete=models.CASCADE)
    reserved_at = models.DateTimeField(auto_now_add=True)
    
class FacilityCheckIn(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    facility = models.ForeignKey(Facility, on_delete=models.CASCADE)
    checkin_at = models.DateTimeField(auto_now_add=True)