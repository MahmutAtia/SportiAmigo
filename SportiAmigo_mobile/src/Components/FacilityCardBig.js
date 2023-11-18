import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Layout, Text, useTheme, Icon } from "@ui-kitten/components";
import Badge from "./Badge";
import { useNavigation } from '@react-navigation/native';


const FacilityCardBig = ({ facility }) => {
  console.log(facility);
    const navigation = useNavigation();

  const theme = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('FacilityDetails', {facility: facility})}>

    <Layout style={styles.cardContainer}>

      {facility.state && (
        <Badge
          color={theme["color-danger-500"]}
          top={50}
          left={10}
          text={facility.state}
        />
      )}

      {facility.city && (
        <Badge
          color={theme["color-danger-500"]}
          top={80}
          left={10}
          text={facility.city}
        />
      )}

      {facility.capacity && (
        <Badge
          color={theme["color-primary-500"]}
          top={140}
          left={290}
          text={facility.capacity}
        />
      )}
      <Image
        style={styles.image}
        source={{ uri: facility.profile_image_url }}
      />

      <Layout style={styles.row}>
        {/* Title */}

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {facility.name}
        </Text>

        <Layout
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Icon */}
          <Icon
            name="star-outline"
            fill={theme["color-primary-500"]}
            style={{
              width: 20,
              height: 20,
            }}
          />

          <Text>4.5</Text>
        </Layout>
      </Layout>

      <Layout
        style={{
          flexDirection: "row",
           width: "100%",
           justifyContent: "flex-start",
        }}
      >
        {facility.sports.map((sport) => (
          <Text 
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: theme["color-primary-500"],
            marginRight: 5,
            } }
          
          key={sport.id} >
             {sport.name}
          </Text>
        ))}
      </Layout>
      <Text style={styles.detailsContainer}>{facility.description}</Text>
      {/* Add other details here */}

    </Layout>
    </TouchableOpacity>

  );
};

const styles = {
  cardContainer: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 10,
    width: "100%",
    height: 300,
    marginHorizontal: 'auto',
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20,
    alignSelf: "end",
    
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 8,
    marginRight: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    width: "100%",
    padding: 5,
  },
  detailsContainer: {
    width: "100%",
    textAlign: "left",
  },
};

export default FacilityCardBig;
