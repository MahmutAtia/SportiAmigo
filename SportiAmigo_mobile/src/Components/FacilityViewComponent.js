import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Icon, Text, useTheme, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const FacilityViewComponent = ({ title , description, image_uri}) => {
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('FaciltyDetailsScreen')}>

        <Layout 
        style={{
            shadowColor: theme['color-basic-800'],
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            borderRadius: 10,
            width: 300,
            height: '80%',
            marginHorizontal: 10,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: 20,
            alignSelf: 'end',
        }}
        >
           <Image source={{uri: image_uri}} style={{
            height: '75%',
            width: '100%',
            borderRadius: 10,
            marginTop: 10,
            resizeMode: 'cover',
            
           }}/>

           <Layout style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
                width: '100%',
              }}>

           {/* Title */}

              <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: theme['color-primary-500'],
            
              }}>
                {title}
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
            <Text
            style={{
                fontSize: 14,
             
                textAlign: 'left',
                width: '100%',
            }}
             >
               {description.substring(0, 25) + '...'}
            </Text>
        </Layout>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default FacilityViewComponent;
