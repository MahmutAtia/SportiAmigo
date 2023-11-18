import React from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';

const FacilityDetailsScreen = ({route}) => {
  const { facility } = route.params;

  return (
    <Layout style={styles.container}>
      <ScrollView>
        <Image source={{ uri: facility.profile_image_url }} style={styles.image} />

        <View style={styles.detailsContainer}>
          <Text category="h4" style={styles.title}>
            {facility.name}
          </Text>
          <Text style={styles.description}>{facility.description}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Capacity: {facility.capacity}</Text>
            <Text style={styles.infoText}>Price: {facility.price}</Text>
            <Text style={styles.infoText}>Operating Hours: {facility.operating_hours}</Text>
            {/* Add other facility details */}
          </View>

          <Button style={styles.button}>Book Now</Button>
        </View>
      </ScrollView>
    </Layout>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 16,
    color: 'gray',
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoText: {
    marginBottom: 8,
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
  },
});

export default FacilityDetailsScreen