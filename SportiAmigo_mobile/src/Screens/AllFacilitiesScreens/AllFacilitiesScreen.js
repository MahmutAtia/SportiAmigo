import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, ScrollView} from 'react-native';
import axiosInstance from '../../axiosConfig';
import { Layout , Text} from '@ui-kitten/components';
import FacilityCardBig from '../../Components/FacilityCardBig';

const AllFacilitiesScreen = ({navigation}) => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(false);



    const handleFetchError = () => {
        Alert.alert(
          "Error",
          "Something went wrong. Please try again later.",
          [
            { text: "OK", onPress: () => navigation.replace('AllFacilities') }
          ]
        );
      };


    useEffect(() => {
        axiosInstance.get('api/facility/facilities/').then((res) => {
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
        <Layout style={{flex:1}}>
        <ScrollView >
        <Text></Text>
         {facilities.map((facility) => {  
              return <FacilityCardBig facility={facility} key={facility.id}/>}
          )}
          </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({})

export default AllFacilitiesScreen;
