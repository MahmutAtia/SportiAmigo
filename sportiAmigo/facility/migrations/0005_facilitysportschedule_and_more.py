# Generated by Django 4.2.7 on 2023-11-18 10:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sportsapi', '0004_alter_sport_categories_alter_sport_skill_levels'),
        ('facility', '0004_rename_address_facility_location_address_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacilitySportSchedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_of_week', models.CharField(max_length=10)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('max_capacity', models.PositiveIntegerField()),
                ('facility', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='facility.facility')),
                ('sport', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sportsapi.sport')),
            ],
        ),
        migrations.RemoveField(
            model_name='facilityreservation',
            name='facility',
        ),
        migrations.RemoveField(
            model_name='facilityreservation',
            name='user',
        ),
        migrations.DeleteModel(
            name='FacilityCheckIn',
        ),
        migrations.DeleteModel(
            name='FacilityReservation',
        ),
    ]