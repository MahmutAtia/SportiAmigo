import React from 'react';
import { Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const FacilityCard = ({ facility }) => {
  return (
    <Layout style={styles.cardContainer}>
      <Image style={styles.image} source={{ uri: facility.profile_image_url }} />
      <Layout style={styles.detailsContainer}>
        <Text category="h6">{facility.name}</Text>
        <Text>{facility.description}</Text>
        {/* Add other details here */}
      </Layout>
    </Layout>
  );
};

const styles = {
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    elevation: 4, // For Android shadow
    shadowColor: '#000000', // For iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
};

export default FacilityCard;
