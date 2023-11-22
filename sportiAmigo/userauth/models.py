# userauth/models.py

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from sportsapi.models import Sport

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)  # Set is_active to True for superusers


        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    # Additional Fields
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    # address = models.CharField(max_length=200, blank=True, null=True)
    # profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    favorite_sports = models.ManyToManyField(Sport, blank=True)
    # Include other fields as needed

    # Location Fields
    coutry = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)  
    location_latitude = models.FloatField(blank=True, null=True)
    location_longitude = models.FloatField(blank=True, null=True)
    location_address = models.CharField(max_length=200, blank=True, null=True)


    # user adminsitrator
    

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email
    
    def is_facility_admin(self):
        return hasattr(self, 'facility_administrator')
    
    
        
        





class FacilityAdministrator(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='facility_administrator')
    facility = models.ForeignKey('facility.Facility', on_delete=models.CASCADE, related_name='administrators', null=True, blank=True)
 
    role = models.CharField(max_length=100)
    responsibilities = models.TextField(blank=True, null=True)
    working_hours = models.CharField(max_length=200, blank=True, null=True)
    # profile_picture = models.ImageField(upload_to='administrator_profiles/', blank=True, null=True)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name} - {self.facility.name} Administrator'
