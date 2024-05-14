import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
  Alert,
} from 'react-native';
import TM from '../assets/them/AxTheme';
import {AddGame} from '../service/GameService';
import SaveIswin from '../screens/management/helper/ManageGameLevels';

const LostScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const {gameObj} = route.params;
  const showToast = () => {
    ToastAndroid.show('Backward is disabled !', ToastAndroid.SHORT);
  };

  const submitHandler = async () => {
    try {
      const {duration, marks, totalMark, gameType, lavel} = gameObj;

      const isWin = false;

      const dataObj = {
        duration,
        mark: marks,
        totalMark,
        gameType,
        lavel,
        isWin,
      };
      const res = await AddGame(dataObj);
      await SaveIswin(gameType, lavel, isWin);
      if (res && res.data.status === 'success') {
        Alert.alert('දත්ත සුරකින ලදී');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const next = async () => {
    await submitHandler();
    const game = gameObj;
    navigation.navigate('LostMark', {game});
  };

  useEffect(() => {
    const handleBackButton = () => {
      // Disable the back action
      showToast();
      return true;
    };

    // Add event listener when the component mounts
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    // Remove event listener when the component unmounts
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../assets/img/mgt-bg1.jpg')}>
        {/* phase 1 */}
        <View
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.5},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h5]} />
          <View>
            <View style={[TM.flexDirRow]}>
              <Image
                style={[{width: 250, height: 250}]}
                source={require('../assets/img/game/lost.png')}
              />
            </View>
          </View>
          <View style={[TM.h6]} />
          {/* next button */}
          <TouchableOpacity
            onPress={next}
            style={[
              TM.bgLost,
              {width: SCREEN_WIDTH * 0.6, height: SCREEN_HEIGHT * 0.07},
              TM.p4,
              TM.borderRadius20,
              TM.alignItemCenter,
              TM.justifyCenter,
            ]}>
            <View style={[TM.flexDirRow]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f18]}>ලකුණු පුවරුව</Text>
              <Image
                style={[styles.next, TM.justifyCenter, TM.alignItemCenter]}
                source={require('../assets/icons/next-ic.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  next: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  win: {
    height: 1,
    width: 60,
  },
  objGame: {
    height: 60,
    width: 60,
  },
});

export default LostScreen;
