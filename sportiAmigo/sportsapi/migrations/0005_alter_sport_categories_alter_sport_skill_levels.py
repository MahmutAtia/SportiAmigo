# Generated by Django 4.2.7 on 2023-11-18 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sportsapi', '0004_alter_sport_categories_alter_sport_skill_levels'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sport',
            name='categories',
            field=models.ManyToManyField(to='sportsapi.category', verbose_name='Sport Categories'),
        ),
        migrations.AlterField(
            model_name='sport',
            name='skill_levels',
            field=models.ManyToManyField(to='sportsapi.skilllevel', verbose_name='Skill Levels'),
        ),
    ]
