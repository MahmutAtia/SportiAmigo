import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import axiosInstance from '../../../../axiosConfig';
import { Layout } from '@ui-kitten/components';
import FacilityCardBig from '../../../../Components/FacilityCardBig';

const FacilityTab = ({query}) => {


    const [facilities, setFacilities] = useState([]);
    const [ loading, setLoading ] = useState(false);

    

  const handleFacilitySearch = () => {
    setLoading(true);
    const endpoint = `/api/search/facility/?query=${query}`;
    axiosInstance
      .get(endpoint)
      .then((res) => {
        setFacilities(res.data);
        console.log(res.data.length);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleFacilitySearch();
    }
    , [  ]);
    return (
        <ScrollView>

        
            {loading ?  <Text>Loading...</Text> : facilities.map((facility) => (
                <FacilityCardBig
                    key={facility.id}
                    facility={facility}
                />
                ))}
        </ScrollView>
    ); }

const styles = StyleSheet.create({})

export default FacilityTab;
