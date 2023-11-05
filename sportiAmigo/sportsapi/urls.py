from django.urls import path
from . import views

urlpatterns = [
    path('sports/', views.SportListView.as_view(), name='sport-list'),
    path('sports/<int:pk>/', views.SportDetailView.as_view(), name='sport-detail'),
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/', views.CategoryDetailView.as_view(), name='category-detail'),
    path('skill-levels/', views.SkillLevelListView.as_view(), name='skill-level-list'),
    path('skill-levels/<int:pk>/', views.SkillLevelDetailView.as_view(), name='skill-level-detail'),
]