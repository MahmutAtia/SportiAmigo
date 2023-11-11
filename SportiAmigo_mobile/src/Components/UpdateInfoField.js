import React from 'react';
import {  TouchableOpacity,StyleSheet} from 'react-native';
import { Text, Layout } from '@ui-kitten/components';
import { FontAwesome } from '@expo/vector-icons';
import {theme} from '../themes'


const UpdateInfoField = ({ title, info  , onPress}) => {


   


  return (
    <Layout 
    style={styles.container} >
    <TouchableOpacity
    onPress={
onPress      }
     >
      <Text style={styles.title}>{title}</Text>
      <Layout style={styles.infoContainer}>
        <Text style={styles.infoText}>{info ? info : `You did not assign a ${title}`}</Text>
        <FontAwesome name="edit" style={styles.editIcon} />
      </Layout>
    </TouchableOpacity>
    </Layout>
  );
};

export default UpdateInfoField;


const styles = StyleSheet.create({
    container: {
        // backgroundColor: theme.colors.background,
        padding: theme.spacing.medium,
        borderRadius: theme.spacing.small,
        marginBottom: theme.spacing.medium,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    title: {
      fontSize: 16,
      fontWeight: 'normal',
      color: theme.colors.text,
      marginBottom: theme.spacing.small,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoText: {
      // fontSize: 16,
      // color: theme.colors.secondary,
      // fontWeight: 'normal',
    },
    editIcon: {
      fontSize: 24,
      color: theme.colors.primary,
    },
  });
