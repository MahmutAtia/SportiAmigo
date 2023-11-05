from rest_framework import routers
from .views import SportEventViewSet

router = routers.DefaultRouter()
router.register(r'sportevents', SportEventViewSet)