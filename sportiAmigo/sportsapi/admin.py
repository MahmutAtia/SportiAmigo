from django.contrib import admin
from .models import Category, Sport, SkillLevel
# Register your models here.

admin.site.register([Category, Sport, SkillLevel])