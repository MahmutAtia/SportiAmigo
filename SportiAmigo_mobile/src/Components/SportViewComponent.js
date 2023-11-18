import React from 'react';
import {View,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Card, Button, Icon, Text, useTheme, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const SportViewComponent = ({sport}) => {

    const navigation = useNavigation();
    return (

        <TouchableOpacity
         onPress={
            ()=> navigation.navigate('AllFacilitiesStack', {screen: 'AllFacilities', params: {sport_id: sport.id }})
         }
        style={styles.container}
         >
         <Image  source={{uri: sport.image_url}} style={styles.image} />
            <Text style={styles.title}>{sport.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
      },
      title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})

export default SportViewComponent;
