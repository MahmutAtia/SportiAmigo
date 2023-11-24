import React, { useEffect } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Layout, Text, Button, Tab, TabView } from '@ui-kitten/components';
import axiosInstance from '../../../axiosConfig';


const UserDetailsScreen = ({ route }) => {
  const { user_id } = route.params;
    const [user, setUser] = useState({});



  useEffect(() => {
    axiosInstance.get(`/api/authuser/${user_id}/`).then((res) => {
        console.log(res.data);
        setUser(res.data);
    })

        }
    




  const 

  return (
    <Layout style={styles.container}>
      <ScrollView>
      



      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    marginVertical: 10,
  },
  // Other styles as needed for your UI
});

export default UserDetailsScreen;
