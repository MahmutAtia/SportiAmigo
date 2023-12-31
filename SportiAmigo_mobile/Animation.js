import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieAnimation = ({ animationSource }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView source={animationSource} autoPlay loop style={{height:400, width:400}} />
    </View>
  );
};

export default LottieAnimation;
