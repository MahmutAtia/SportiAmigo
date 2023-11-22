import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
const SearchHeader = () => {
  const navigation = useNavigation();
  const { width, height, scale } = Dimensions.get('window');
  const handlePress = () => {
    navigation.navigate('Search');
  };

  const animationSource = require('../../assets/Animations/search.json');

  return (
    <TouchableOpacity
    style={{ justifyContent:'center', alignItems:'center', width: scale* 143 }}
     onPress={handlePress}>
            <LottieView source={animationSource} autoPlay loop style={{width:400}} />

    </TouchableOpacity>

  );
};

export default SearchHeader;
