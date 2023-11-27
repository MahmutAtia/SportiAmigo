import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Icon, Card, Layout, Text, Modal, Spinner } from "@ui-kitten/components";
import axiosInstance from "../axiosConfig";

const SportScheduleSection = ({
    facility_id,
    sport_id,
    date,
  
}) => {
  const [sportSchedules, setSportSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading state

  console.log(sportSchedules);
        
  useEffect(() => {
    fetchData();
  }, []); // Update useEffect dependencies

  const fetchData = () => {
    setLoading(true);
    axiosInstance
      .get(
        `/api/facility/facilities/schedule/${facility_id}/${sport_id}/${date}`
      )
      .then((res) => {
        setSportSchedules(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleScheduleSelection = (schedule) => {
    setSelectedSchedule(schedule);
    console.log(schedule);
  };

  const handleBooking = () => {
    console.log(selectedSchedule);
    if (selectedSchedule) {

      console.log("selected schedule id",selectedSchedule.id);
      axiosInstance
        .post("api/booking/", {

          facility_sport_schedule: selectedSchedule.id,
          booking_date: date,
        })
        .then(() => {
          Alert.alert("Booking Confirmation", "Schedule booked successfully!", [
            {
              text: "Go to Home",
              onPress: () => {
                // Navigate to home screen after booking
                // Replace this with your navigation logic
                console.log("Navigate to home screen");
              },
            },
          ]);
          fetchData(); // Refetch data after successful booking
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ScrollView>
    <Layout>
     
      {  loading && 
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Spinner size="giant" />
       </View>
       }
       
      {selectedSchedule && (
        <View style={{ marginVertical: 10 }}>
          <Text category="h6">Selected Schedule</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>
              {selectedSchedule.start_time} - {selectedSchedule.end_time}
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 150,
                height: 40,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#3366FF",
              }}
              onPress={handleBooking}
            >
              <Text style={{ fontSize: 16, color: "#3366FF" }}>Book Now</Text>
              <Icon name="calendar" width={32} height={32} fill="#3366FF" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {sportSchedules.map((item) => (
        <Card
          key={item.id}
          style={{ marginVertical: 5 }}
          onPress={() => handleScheduleSelection(item)}
          status={
            selectedSchedule && selectedSchedule.id === item.id
              ? "danger" // Change this to your preferred color
              : item.already_booked
              ? "success" // if already booked
              : "basic"
          }
          disabled={item.already_booked}
        >
          <View
            style={
              item.already_booked
                ? {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    opacity: 0.5,
                  }
                : {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }
            }
          >
            <Text>
              {item.start_time} - {item.end_time}
            </Text>
            <Text>
              {item.available_slots} available of {item.max_capacity}
            </Text>
          </View>
        </Card>
      ))}
    </Layout>
    </ScrollView>
  );
};

export default SportScheduleSection;
