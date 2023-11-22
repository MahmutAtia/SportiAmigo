import React from 'react';
import {View, StyleSheet} from 'react-native';
import SportScheduleSection from '../../../Components/SportScheduleSection';
import { Text } from '@ui-kitten/components';
const SectionWraper = ({route}) => {
    const {facility_id, sport_id} = route.params;
    return (
        <View style={{backgroundColor:'black'}}>
        <Text>  Section Wraper
        </Text>
        <Text>Sport id: {sport_id}</Text>
    <Text>Facility id: {facility_id}</Text>
            {/* <SportScheduleSection    facility_id={facility_id} sport_id={sport_id} /> */}
        </View>
    );
}

const styles = StyleSheet.create({})

export default SectionWraper;
