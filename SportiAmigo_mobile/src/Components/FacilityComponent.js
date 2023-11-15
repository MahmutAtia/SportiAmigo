import React from 'react';
import { TouchableOpacity , Image} from 'react-native';
import {  StyleService, Text, useTheme,Icon,Layout, Card } from '@ui-kitten/components';
// import { useNavigation } from '@react-navigation/core';

const FeatureElement = ({facility}) => {
//   const navigation = useNavigation();
  const theme = useTheme();
    const styles = StyleService.create(styledTheme);

  return (
   <Card 
     style={styles.container}
    // onPress={() => navigation.navigate('FacilityDetailsScreen')}
    >
      <Image
        style={styles.image}
        source={{
          uri: facility.facility_images,
        }}
      />
      <Text style={styles.title}>{facility.name}</Text>
      <Layout style={styles.ratingContainer}>
        <Icon
          name="star"
          style={styles.ratingIcon}
          fill={theme['color-primary-500']}
        />
        <Text style={styles.ratingText}>{facility.rating}</Text>
      </Layout>
      <Layout style={styles.offersContainer}>
        <Text style={styles.grayText}>{facility.offers}</Text>
      </Layout>
      <Layout style={styles.addressContainer}>
        <Icon
          name="pin"
          style={styles.mapPinIcon}
          fill={theme['color-primary-500']}
        />
        <Text style={styles.addressText}>{facility.address}</Text>
      </Layout>

        </Card>
    

  );
};

export default FeatureElement;




const styledTheme = {
    container: {
      backgroundColor: 'color-basic-100',
      marginLeft: 8,
      shadowColor: 'color-basic-800',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
        height: 250,
        width: 200,
    },
    image: {
      height: '70%',
      width: '100%',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    ratingText: {
      fontSize: 12,
      color: 'color-primary-500',
      marginLeft: 2,
    },
    offersContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },
    addressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },
    mapPinIcon: {
      color: 'color-basic-800',
      size: 20,
      marginRight: 2,
    },
    addressText: {
      fontSize: 12,
      color: 'color-primary-500',
      marginRight: 2,
    },
    grayText: {
      fontSize: 12,
      color: 'color-basic-800',
    },
  };
