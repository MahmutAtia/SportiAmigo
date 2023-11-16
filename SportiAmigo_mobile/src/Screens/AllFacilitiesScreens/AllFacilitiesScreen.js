import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert} from 'react-native';
import axiosInstance from '../../axiosConfig';
import { Layout , Text} from '@ui-kitten/components';
import FacilityCard from '../../Components/FacilityCard';

const AllFacilitiesScreen = ({navigation}) => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(false);



    const handleFetchError = () => {
        Alert.alert(
          "Error",
          "Something went wrong. Please try again later.",
          [
            { text: "OK", onPress: () => navigation.replace('AllFacilitiesScreen') }
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
        <Layout>
         {facilities.map((facility) => {  
              return <FacilityCard facility={facility} key={facility.id}/>}
          )}
        </Layout>
    );
}

const styles = StyleSheet.create({})

export default AllFacilitiesScreen;
