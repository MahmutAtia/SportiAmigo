import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Icon, Card, Divider } from '@ui-kitten/components';
import axiosInstance from '../axiosConfig';

const SportScheduleSection = ({ facility }) => {
  const [sportSchedules, setSportSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [date, setDate] = useState('2023-11-20');

  useEffect(() => {
    axiosInstance
      .get(`/api/facility/facilities/schedule/${facility.id}/${facility.sports[0].id}/${date}`)
      .then((res) => {
        setSportSchedules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  const handleScheduleSelection = (schedule) => {
    setSelectedSchedule(schedule);
  };

  const handleBooking = () => {
    if (selectedSchedule) {
      // Perform booking logic here
      console.log('Booking schedule:', selectedSchedule);
      // Make API call to book the selected schedule
      Alert.alert('Booking Confirmation', 'Schedule booked successfully!');
    }
  };

  return (
    <View>
      <Text category="h6" style={{ marginVertical: 10 }}>
        Sport Schedules for {date}
      </Text>

      {sportSchedules.map((item) => (
        <Card
          key={item.id}
          style={{ marginVertical: 5 }}
          onPress={() => handleScheduleSelection(item)}
          status={selectedSchedule && selectedSchedule.id === item.id ? 'danger' : 'basic'}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{item.start_time} - {item.end_time}</Text>
            <Text>{item.available_slots} available of {item.max_capacity}</Text>
          </View>
        </Card>
      ))}

      {selectedSchedule && (
        <View style={{ marginVertical: 10 }}>
          <Text category="h6">Selected Schedule</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>{selectedSchedule.start_time} - {selectedSchedule.end_time}</Text>
            <TouchableOpacity onPress={handleBooking}>
              <Icon name="calendar" width={32} height={32} fill="#3366FF" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default SportScheduleSection;
