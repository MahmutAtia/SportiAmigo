from rest_framework import serializers
from .models import Sport, Category, SkillLevel

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SkillLevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillLevel
        fields = '__all__'

class SportSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)
    skill_levels = SkillLevelSerializer(many=True)

    class Meta:
        model = Sport
        fields = '__all__'