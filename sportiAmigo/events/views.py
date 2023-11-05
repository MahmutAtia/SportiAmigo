
# views.py
from rest_framework import viewsets
from .models import SportEvent
from .serializers import SportEventSerializer

class SportEventViewSet(viewsets.ModelViewSet):
    queryset = SportEvent.objects.all()
    serializer_class = SportEventSerializer