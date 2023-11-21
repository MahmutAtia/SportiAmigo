import { View} from 'react-native';
import LottieView from 'lottie-react-native';

import Animation1 from '../../../assets/Animations/1.json'; 
import Animation2 from '../../../assets/Animations/2.json';
import Animation3 from '../../../assets/Animations/3.json';
import Animation4 from '../../../assets/Animations/4.json';
import Animation5 from '../../../assets/Animations/5.json';
import Animation6 from '../../../assets/Animations/6.json';
import Animation7 from '../../../assets/Animations/7.json';
import Animation8 from '../../../assets/Animations/8.json';

  const LottieAnimation = ({ animationSource }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView source={animationSource} autoPlay loop style={{height:400, width:400}} />
      </View>
    );
  };
  
  export default LottieAnimation;






// Function to generate random number

const randomNumber = (min, max) => {
  randint =  Math.floor(Math.random() * (max - min) + min);
  console.log('randint: ', randint);
  return randint;
};
const randAnim = () => {
  switch (randomNumber(1, 8)) {
    case 1:
      return Animation1;
    case 2:
      return Animation2;
    case 3:
      return Animation3;
    case 4:
      return Animation4;
    case 5:
      return Animation5;
    case 6:
      return Animation6;
    case 7:
      return Animation7;
    case 8:
      return Animation8;
    default:
      return Animation1;
  
  }
};



  export const LoadingAnimation = () => {

    const animationSource = randAnim();

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView source={animationSource} autoPlay loop style={{height:400, width:400}} />
      </View>
    );
  };
  
