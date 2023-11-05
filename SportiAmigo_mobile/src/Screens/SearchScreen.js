
import React from 'react';
import { Text,View, Button } from 'react-native';

function SearchScreen({ navigation }) {
   
  
    const goBack = () => {
      navigation.goBack();
    };
  
    return (
      <View>
        <Button title="Go Back" onPress={goBack} />
        <Text>Search Screen</Text>
      </View>
    );
  }

    SearchScreen.navigationOptions = {
        title: 'Search',
    };
export default SearchScreen;