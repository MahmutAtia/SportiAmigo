import { View} from 'react-native';
import LottieView from 'lottie-react-native';

  const LottieAnimation = ({ animationSource }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView source={animationSource} autoPlay loop style={{height:400, width:400}} />
      </View>
    );
  };
  
  export default LottieAnimation;






// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


  export const LoadingAnimation = () => {
    const randint = randomNumber(1, 11);
    console.log('randint is ' + randint);
    const animationSource = require('../../../assets/Animations/' + '2' + '.json')
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView source={animationSource} autoPlay loop style={{height:400, width:400}} />
      </View>
    );
  };
  
