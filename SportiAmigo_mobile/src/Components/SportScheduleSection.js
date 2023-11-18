import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import axiosInstance from '../axiosConfig';

const SportScheduleSection = ({facility_id,sport_id, date }) => {
  const [sportSchedules, setSportSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    // Fetch sport schedules for the selected date
    axiosInstance.get(`/api/facility/facilities/schedule/${facility_id}/${sport_id}/${date}/`).then((res) => {
        console.log(res.data);
        setSportSchedules(res.data);
        }).catch((err) => {
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
      <Text>Sport Schedules for {date}</Text>
      <FlatList
        data={sportSchedules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleScheduleSelection(item)}>
            <Text>{item.start_time} - {item.end_time}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedSchedule && (
        <View>
          <Text>Selected Schedule</Text>
          <Text>{selectedSchedule.start_time} - {selectedSchedule.end_time}</Text>
          <TouchableOpacity onPress={handleBooking}>
            <Text>Book</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SportScheduleSection;
