from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from userauth.models import CustomUser

from sportsapi.models import Sport
from datetime import datetime

# Create your models here.
class SportEvent(models.Model):
    name = models.CharField(max_length=100)
    date_and_time = models.DateTimeField()
    location = models.CharField(max_length=200)
    description = models.TextField()
    participants = models.ManyToManyField(CustomUser, related_name='events_participated', blank=True)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)

    
    # Fields for GenericForeignKey
    creator_type = models.ForeignKey(ContentType, on_delete=models.SET_NULL, null=True)
    creator_id = models.PositiveIntegerField(null=True)
    creator_object = GenericForeignKey('creator_type', 'creator_id')


    # Other fields
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    max_participants = models.PositiveIntegerField()
    current_participants = models.PositiveIntegerField(default=0)
    
    

    def __str__(self):
        return self.name


    @property
    def is_past_event(self):
        """
        Checks if the event has already taken place.
        """
        now = datetime.now()
        return self.end_time < now

    @property
    def is_future_event(self):
        """
        Checks if the event is scheduled for the future.
        """
        now = datetime.now()
        return self.start_time > now

    @property
    def is_open_for_participation(self):
        """
        Checks if the event is currently open for participation.
        """
        now = datetime.now()
        return self.current_participants <= self.max_participants