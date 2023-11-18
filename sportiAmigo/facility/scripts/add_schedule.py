from facility.models import Facility, FacilitySportSchedule

def run():
    # get a facility
    facility = Facility.objects.get(id=1)

 
    # Create a schedule for the facility all days except sunday every schedule is 2 hour long max_capacity is 30 
    
  
    for i in range(1,7): # 1 to 6
        schedule = FacilitySportSchedule(facility=facility, sport_id=6, day_of_week=i, start_time='10:00', end_time='12:00', max_capacity=30)
        schedule.save()
        schedule = FacilitySportSchedule(facility=facility, sport_id=6, day_of_week=i, start_time='12:00', end_time='14:00', max_capacity=30)
        schedule.save()
        schedule = FacilitySportSchedule(facility=facility, sport_id=6, day_of_week=i, start_time='14:00', end_time='16:00', max_capacity=30)
        schedule.save()
        schedule = FacilitySportSchedule(facility=facility, sport_id=6, day_of_week=i, start_time='16:00', end_time='18:00', max_capacity=10)
        schedule.save()
        schedule = FacilitySportSchedule(facility=facility, sport_id=6, day_of_week=i, start_time='18:00', end_time='20:00', max_capacity=20)
        schedule.save()
        schedule = FacilitySportSchedule(facility=facility, sport_id=6, day_of_week=i, start_time='20:00', end_time='22:00', max_capacity=20)
        schedule.save()



