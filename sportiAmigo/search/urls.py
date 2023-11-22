from django.urls import path
from . import views


urlpatterns = [
    path('user/',views.SearchUserView.as_view()
         , name='search-user'),
    path('facility/',views.SearchFacilityView.as_view()
            , name='search-facility'),
]