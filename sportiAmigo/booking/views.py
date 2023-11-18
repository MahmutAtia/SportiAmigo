from rest_framework import generics
from .models import Booking
from .serializers import BookingSerializer

# Create your views here.

class BookingListView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def get_queryset(self):
        user = self.request.user
        return Booking.objects.filter(user=user)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    


