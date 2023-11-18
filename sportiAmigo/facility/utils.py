# get a day of week say monday from date 
#

import datetime
def get_day_of_week(date):
    date = datetime.datetime.strptime(date, '%Y-%m-%d')
    return date.strftime("%w")
    
    
