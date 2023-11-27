import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { Layout, Text, Button, Spinner } from "@ui-kitten/components";
import axiosInstance from "../../../axiosConfig";
import UserStatusButton from "../../../Components/UserStatusButton";

const UserDetailsScreen = ({ route }) => {
  const { user_id } = route.params;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(user);

  const img_url =
    "https://cdn.dribbble.com/users/304574/screenshots/6222816/male-user-placeholder.png";

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/api/userauth/profile/${user_id}/`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [
    
  ]);

  

   console.log("from user screen ",user);
  return loading ? (
    <Layout style={styles.container}>
      <Text>Loading...</Text>
      <Spinner size="giant" />
    </Layout>
  ) : (
    <Layout style={styles.container}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image source={{ uri: img_url }} style={styles.profileImage} />
          <Text category="h4" style={styles.name}>
            {(user.first_name + ' ' + user.last_name).substring(0, 10) + "..."}
            
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text category="h4" style={styles.title}>
            {user.email} 
          </Text>


          {/* add friend button */}
            {<UserStatusButton item={user} setItem={setUser} />}
          <Text category="h4" style={styles.title}>
            {user.phone_number}
          </Text>
          <Text category="h4" style={styles.title}>
            {user.date_of_birth}
          </Text>
        </View>
        {/* Friends section*/}
        <Text category="h4" style={styles.title}>
          {user.first_name} has {user.friends?.length} friends
        </Text>
        {/* show 2 and then show more button */}
        {user.friends?.slice(0, 2).map((friend) => (
          <View style={styles.detailsContainer}>
            <Text category="h4" style={styles.title}>
              {friend.first_name}
            </Text>
            <Text category="h4" style={styles.title}>
              {friend.last_name}
            </Text>
            <Text category="h4" style={styles.title}>
              {friend.email}
            </Text>
          </View>
        ))}
        {/* show more button */}
        {user.friends?.length > 2 ? (
          <Button onPress={() => console.log("show more friends")} size="tiny">
            show more
          </Button>
        ) : null}
        {/* Booked Sport Schedules List section */}
        {/* { user.booked_sport_schedules.map((schedule) => 
             (
                <View style={styles.detailsContainer}>
                    <Text category="h4" style={styles.title}>
                        {schedule.facility.name}
                    </Text>
                    <Text category="h4" style={styles.title}>
                        {schedule.sport.name}
                    </Text>
                    <Text category="h4" style={styles.title}>
                        {schedule.date}
                    </Text>
                    <Text category="h4" style={styles.title}>
                        {schedule.start_time}
                    </Text>
                    <Text category="h4" style={styles.title}>
                        {schedule.end_time}
                    </Text>
                </View>
            )
       )}

 */}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    padding: 10,
    alignItems: "center",

  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    marginVertical: 10,
  },
  // Other styles as needed for your UI
});

export default UserDetailsScreen;
