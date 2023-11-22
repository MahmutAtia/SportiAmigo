import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, ScrollView} from 'react-native';
import axiosInstance from '../../../axiosConfig';
import { Layout , Text} from '@ui-kitten/components';
import FacilityCardBig from '../../../Components/FacilityCardBig';

const AllFacilitiesScreen = ({navigation, route}) => {
    navigation.setOptions({ 
      headerShown: false,
     });


    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(false);

    // default date is tommorow

    console.log(route.params);
    const sport_id = route.params?.sport_id  ?'?sport_id='+ route.params.sport_id : '';
    // console.log('Sport id',sport_id);


    const handleFetchError = () => {
        Alert.alert(
          "Error",
          "Something went wrong. Please try again later.",
          [
            { text: "OK", onPress: () => navigation.replace('AllFacilities',  {sport_id: sport_id}
            ) }
          ]
        );
      };


    useEffect(() => {
        axiosInstance.get('api/facility/facilities/'+ sport_id).then((res) => {
            console.log(res.data);
            setFacilities(res.data);
            setLoading(false);

        }).catch((error) => {
            console.log(error);
            setLoading(false);
            // Alert with button to refresh the screen  
            handleFetchError();
            
          
            
        })
    }
    , [])
    return (
        <Layout style={{flex:1, padding:10}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        
        
        >
         {facilities.map((facility) => {  
              return <FacilityCardBig facility={facility} key={facility.id}/>}
          )}
          </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({})

export default AllFacilitiesScreen;
