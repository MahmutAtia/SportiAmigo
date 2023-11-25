import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { Layout, Text, Button, Spinner } from "@ui-kitten/components";
import axiosInstance from "../../../axiosConfig";

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
  }, []);

  // user details example
  //  {
  //     "id": 1,
  //     "first_name": "mamo",
  //     "last_name": "atia",
  //     "is_active": true,
  //     "is_staff": true,
  //     "phone_number": null,
  //     "date_of_birth": null,
  //     "gender": null,
  //     "favorite_sports": [],
  //     "location_latitude": null,
  //     "location_longitude": null,
  //     "location_address": null,
  //     "coutry": null,
  //     "state": null,
  //     "city": null,
  //     "is_facility_admin": false,
  //     "is_self": false,
  //     "is_friend": false,
  //     "user_status": -1,
  //     "friends": [
  //         {
  //             "id": 2,
  //             "first_name": "m",
  //             "last_name": "m",
  //             "email": "m@gmail.com",
  //             "state": null,
  //             "city": null,
  //             "is_self": false,
  //             "is_friend": false
  //         },
  //         {
  //             "id": 6,
  //             "first_name": "This field is required.",
  //             "last_name": "This field is required.",
  //             "email": "mamas@gmail.com",
  //             "state": null,
  //             "city": null,
  //             "is_self": false,
  //             "is_friend": false
  //         },
  //         {
  //             "id": 23,
  //             "first_name": "Mahmoud",
  //             "last_name": "Atia Ead",
  //             "email": "ssssssss@gmail.com",
  //             "state": null,
  //             "city": null,
  //             "is_self": false,
  //             "is_friend": false
  //         },
  //         {
  //             "id": 46,
  //             "first_name": "Mahmoud",
  //             "last_name": "Atia Ead",
  //             "email": "mamoo@gmail.com",
  //             "state": null,
  //             "city": null,
  //             "is_self": false,
  //             "is_friend": false
  //         }
  //     ],
  //     "booked_sport_schedules": []
  // }

  const renderButton = (item) => {
    // console.log('item is', item.user_status);
    if (item.is_self) {
      return (
        <Button disabled size="tiny">
          It is you
        </Button>
      );
    } else if (item.is_friend === true) {
      return (
        <Button onPress={() => handele_unfriend(item)} size="tiny">
          unfriend
        </Button>
      );

      // user_status
      // -1 = NO_REQUEST_SENT
      // 1 = YOU_RECEIVED_REQUEST
      // 0 = YOUR_REQUEST_SENT
    } else if (item.user_status === -1) {
      return (
        <Button onPress={() => handle_send_request(item)} size="tiny">
          add friend
        </Button>
      );
    } else if (item.user_status === 1) {
      return (
        <Button onPress={() => handle_accept_request(item)} size="tiny">
          accept request
        </Button>
      );
    } else if (item.user_status === 0) {
      return (
        <Button onPress={() => handle_cancel_request(item)} size="tiny">
          cancel request
        </Button>
      );
    }
  };

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
            {user.first_name} {user.last_name}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text category="h4" style={styles.title}>
            {user.email} 
          </Text>


          {/* add friend button */}
            {renderButton(user)}

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
