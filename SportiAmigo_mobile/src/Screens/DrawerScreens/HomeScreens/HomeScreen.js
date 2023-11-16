import React, { useEffect, useState } from "react";
import { View, Button, ScrollView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/userFeature/authSlice";
import axiosInstance from "../../../axiosConfig";
import SportViewComponent from "../../../Components/SportViewComponent";
import { Layout, Text } from "@ui-kitten/components";
import { LoadingAnimation } from "../../LoadingScreens/LoadingScreen1";
import FacilityNearRow from "../../../Components/FacilityNearRow";
import FacilityNormalRow from "../../../Components/FacilityNormalRow";

function HomeScreen({ navigation }) {
  const [sports, setSports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSports = async () => {
      const response = await axiosInstance.get("/api/sports/sports/");
      setSports(response.data);
      setIsLoading(false);
    };
    fetchSports();
  }, []);
  console.log(sports);

  dispatch = useDispatch();
  const showMoreApp = () => {
    navigation.navigate("Search");
  };

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    dispatch(logout());
  };
  console.log(sports);

  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}

      style={{
        flexDirection: 'column',
        flexWrap: 'wrap',
        }}
    
      >
        {sports.map((sport) => (
          <SportViewComponent
            title={sport.name}
            image_url={sport.image_url}
            key={sport.id}
          />
        ))}
      </ScrollView> */}

        {/* 2 Rows Sports Elements */}

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 20,
            margin: 10,
          }}
        >
          Find Your Favorite Sports
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          <FlatList
            data={sports}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            numColumns={Math.ceil(sports.length / 2)}
            keyExtractor={(item) => item?.id.toString()}
            renderItem={({ item }) => (
              <SportViewComponent
                title={item?.name}
                image_url={item?.image_url}
                key={item?.id}
              />
            )}
          />
        </ScrollView>

        {/* Popular Sport Facilities in your State */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 20,
            margin: 10,
          }}
        >Popular Sport Facilities in your State
        </Text>

        <FacilityNormalRow />

        {/* Near You */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 20,
            margin: 10,
          }}
        >
          Sport Facilities Near You
        </Text>

        <FacilityNearRow />

        <Button title="Show me more of the app" onPress={showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={signOutAsync} />
      </ScrollView>
    </Layout>
  );
}

export default HomeScreen;