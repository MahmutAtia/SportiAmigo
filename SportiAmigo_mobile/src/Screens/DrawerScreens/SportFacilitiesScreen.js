
import React from 'react';
import {View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {Text,Layout } from '@ui-kitten/components';
import FacilityViewComponent from '../../Components/FacilityViewComponent';




const facilities = [
  {
    name: 'Gym X',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    facility_images: 
    'https://content.jdmagicbox.com/comp/bokaro/j3/9999p6542.6542.220319002739.b4j3/catalogue/cross-fit-multi-gym-bokaro-thermal-bokaro-gyms-lrxpwfn4d3.jpg'
  },
  {
    name: 'Gym Y',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    facility_images:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Gym X',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    facility_images: 
    'https://content.jdmagicbox.com/comp/bokaro/j3/9999p6542.6542.220319002739.b4j3/catalogue/cross-fit-multi-gym-bokaro-thermal-bokaro-gyms-lrxpwfn4d3.jpg'
  },
  {
    name: 'Gym Y',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    facility_images:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];


const SportFacilitiesScreen = () => {

  return (
    <Layout style={{flex: 1}}>
    <ImageBackground source={{uri:
    'https://media.istockphoto.com/id/1221451230/vector/city-map-with-gps-seamless-pattern-texture-with-street-road-river-land-park-roadmap-of-city.jpg?s=612x612&w=0&k=20&c=acDngsGuNz63sWRLRLQzDXRPb128zBE0o5etgu7abJg='
    }}
    style={{ 
     position:
      'absolute',
      top: 0,
      height: '60%',
      width: '100%',
      opacity: 0.5,
    }}/>

    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{
      flex: 1,
      marginTop: '10%'
      }}
    >

    {facilities.map((item) => (<FacilityViewComponent key={item.name} title={item.name}

    description={item.description} image_uri={item.facility_images}
     />))

      }
    </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({})

export default SportFacilitiesScreen;
