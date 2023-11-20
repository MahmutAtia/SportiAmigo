import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const SearchHeader = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Search');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10,
        paddingVertical: 8,
      }}
    >
      <Icon name="search-outline" width={24} height={24} fill="grey" style={{ marginRight: 10 }} />
      <Text style={{ fontSize: 16, color: 'grey' }}>Search</Text>
      <Icon name="arrow-ios-forward-outline" width={24} height={24} fill="grey" style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  );
};

export default SearchHeader;
