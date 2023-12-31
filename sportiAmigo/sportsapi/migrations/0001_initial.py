# Generated by Django 4.2.7 on 2023-11-04 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True, verbose_name='Category Name')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='SkillLevel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True, verbose_name='Skill Level Name')),
            ],
            options={
                'verbose_name': 'Skill Level',
                'verbose_name_plural': 'Skill Levels',
            },
        ),
        migrations.CreateModel(
            name='Sport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Sport Name')),
                ('description', models.TextField(verbose_name='Sport Description')),
                ('popularity_rating', models.DecimalField(decimal_places=1, default=5.0, help_text='Popularity rating on a scale of 1 to 10', max_digits=3, verbose_name='Popularity Rating')),
                ('average_duration', models.PositiveIntegerField(default=60, help_text='Average duration of a game or match in minutes', verbose_name='Average Duration (Minutes)')),
                ('categories', models.ManyToManyField(to='sportsapi.category', verbose_name='Sport Categories')),
                ('skill_levels', models.ManyToManyField(to='sportsapi.skilllevel', verbose_name='Skill Levels')),
            ],
            options={
                'verbose_name': 'Sport',
                'verbose_name_plural': 'Sports',
            },
        ),
    ]
