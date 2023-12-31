"""
URL configuration for sportiAmigo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include  # Add include to the import statement here
from rest_framework.authtoken.views import obtain_auth_token
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from events.urls import router


schema_view = get_schema_view(
    openapi.Info(
        title="Your API Documentation",
        default_version='v1',
        description="Description of your API",
        terms_of_service="https://www.your-terms-of-service.com/",
        contact=openapi.Contact(email="contact@your-email.com"),
        license=openapi.License(name="Your License"),
    ),
    public=True,
)

patterns = [
    # ... your other URL patterns ...
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/userauth/', include('userauth.urls')),  # Include userauth URLs
    path('api/sports/', include('sportsapi.urls')),  # Include sportsapi URLs
    path('api/facility/', include('facility.urls')),  # Include facility URLs
    path('api/sportevents/', include(router.urls)),
    path('api/booking/', include('booking.urls')),  # Include booking URLs
    path('api/friends/', include('friends.urls')),  # Include friends URLs
    path('api/search/', include('search.urls')),  # Include search URLs
    
]


urlpatterns += patterns