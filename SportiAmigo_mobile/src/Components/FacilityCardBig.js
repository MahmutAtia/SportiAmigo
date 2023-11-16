import React from 'react';
import { Image,View, } from 'react-native';
import {  Layout,Text, useTheme, Icon } from '@ui-kitten/components';

const FacilityCardBig= ({ facility }) => {
    console.log(facility)

    const theme = useTheme();
  return (
    <Layout style={styles.cardContainer}>
      <Image style={styles.image} source={{ uri: facility.profile_image_url }} />

     



      <Layout style={styles.row}>

           {/* Title */}

              <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: theme['color-primary-500'],
            
              }}>
                {facility.name}
              </Text>




                <Layout style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    }}>
                {/* Icon */}
                <Icon
                  name="heart-outline"
                  fill={theme['color-primary-500']}
                  style={{
                    width: 20,
                    height: 20,
                  }} />

                  <Text>
                    4.5
                  </Text>

                  </Layout>
                  </Layout>





    <View style={{
        flexDirection: 'row',
    }}>
    {facility.sports.map((sport) => (
        <Text key={sport.id} category="h6">{sport.name}</Text>

    ))}
        </View>
        <Text style= {styles.detailsContainer}>{facility.description}</Text>
        {/* Add other details here */}

    </Layout>
  );
};

const styles = {
  cardContainer: {
    // shadowColor: theme['color-basic-800'],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 10,
    width: '100%',
    height: 300,
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
    alignSelf: 'end',
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 8,
    marginRight: 12,
    
  },
row : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    width:'100%',
    padding :5

    
    },
  detailsContainer: {
    width:'100%'  , textAlign: 'left',
}
  
};

export default FacilityCardBig;
