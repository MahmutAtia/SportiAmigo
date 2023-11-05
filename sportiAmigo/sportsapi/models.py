from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True, verbose_name="Category Name")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"




class SkillLevel(models.Model):
    name = models.CharField(max_length=50, unique=True, verbose_name="Skill Level Name")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Skill Level"
        verbose_name_plural = "Skill Levels"


class Sport(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name="Sport Name")
    description = models.TextField(verbose_name="Sport Description")

    # Sport's popularity rating, indicating how widely it's played (1 to 10)
    popularity_rating = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        default=5.0,
        help_text="Popularity rating on a scale of 1 to 10",
        verbose_name="Popularity Rating"
    )

    # Sport's categories (ManyToManyField to Category model)
    categories = models.ManyToManyField(Category, verbose_name="Sport Categories")

    # Sport's skill levels (ManyToManyField to SkillLevel model)
    skill_levels = models.ManyToManyField(SkillLevel, verbose_name="Skill Levels")

    # Average duration of a typical game or match in minutes
    average_duration = models.PositiveIntegerField(
        default=60,
        help_text="Average duration of a game or match in minutes",
        verbose_name="Average Duration (Minutes)"
    )

    # Icon or image representing the sport (you can use Django's ImageField)
    # sport_icon = models.ImageField(
    #     upload_to="sport_icons/",
    #     null=True,
    #     blank=True,
    #     verbose_name="Sport Icon"
    # )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Sport"
        verbose_name_plural = "Sports"
