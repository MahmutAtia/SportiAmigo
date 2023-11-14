import React from 'react';
import { Layout, List, useTheme } from '@ui-kitten/components';
import FeatureElement from '../../Components/FacilityComponent'; // Make sure to import your FacilityCard component
import { ScrollView } from 'react-native-gesture-handler';

const SportFacilitiesScreen = () => {
  const theme = useTheme();

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

  const renderItem = ({ item }) => <FeatureElement facility={item} />;

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView
         scrollEnabled
        data={facilities}
        horizontal
      
        keyExtractor={(item) => item.name}
        contentContainerStyle={{
          paddingVertical: 16,
          paddingHorizontal: 8,

        }}
        style={{ backgroundColor: theme['color-basic-100'] }}
      >

      {facilities.map((facility) => (
        <FeatureElement facility={facility} />
      ))}

      </ScrollView>
    </Layout>
  );
};

export default SportFacilitiesScreen;
