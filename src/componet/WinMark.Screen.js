import React, {useEffect, useState} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import TM from '../assets/them/AxTheme';

const WinMarkScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [timeFormat, setTimeFormat] = useState('');
  const {game} = route.params;

  const nextStep = () => {
    const gameType = game.gameType;
    navigation.navigate('Lavel', {gameType});
  };

  const newActivity = () => {
    navigation.navigate('GameMenu', {game});
  };

  const durationToString = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    setTimeFormat(
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
    );
  };

  useEffect(() => {
    durationToString(game.duration);
  }, [game]);

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../assets/img/mgt-bg.jpg')}>
        {/* phase 1 */}
        <View
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.75},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h5]} />

          <View
            style={[
              {width: SCREEN_WIDTH * 0.6, height: SCREEN_HEIGHT * 0.07},
              TM.p4,
              TM.borderRadius20,
              TM.alignItemCenter,
              TM.justifyCenter,
              TM.bgLightGoldenrod,
            ]}>
            <View style={[TM.flexDirRow]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f18]}>ලකුණු පුවරුව</Text>
            </View>
          </View>

          <View style={[TM.h8]} />
          <View style={[TM.flexDirRow, TM.w90]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>
              පහතින් දැක්වෙන්නේ ක්‍රියාකාරකමට අදාලව ලබාගත් ලකුණු සටහන් වේ
            </Text>
          </View>

          <View style={[TM.h5]} />
          <View style={[TM.flexDirRow, TM.justifySpaceBetween, TM.w90]}>
            <Image
              style={[styles.next, TM.justifyCenter, TM.ml5]}
              source={require('../assets/img/clock.png')}
            />
            <View style={styles.mr} />
            <Text style={[TM.fBlack, TM.fBold, TM.f18, TM.mt10]}>මි.ත</Text>
          </View>
          <View style={[TM.h3]} />
          <View style={[TM.flexDirRow, TM.justifySpaceBetween, TM.w90]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>ගතකල කාලය</Text>
            <View style={[TM.txtAlignRight]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f14]}>{timeFormat}</Text>
            </View>
          </View>

          <View style={[TM.h3]} />
          <View style={[TM.flexDirRow, TM.justifySpaceBetween, TM.w90]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>ලබාගත් ලකුණු</Text>
            <View style={[TM.txtAlignRight]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f14]}>
                {game.marks}/{game.totalMark}
              </Text>
            </View>
          </View>

          <View style={[TM.h14]} />
          <TouchableOpacity
            onPress={nextStep}
            style={[
              {width: SCREEN_WIDTH * 0.6, height: SCREEN_HEIGHT * 0.07},
              TM.p4,
              TM.borderRadius20,
              TM.alignItemCenter,
              TM.justifyCenter,
              TM.bgLogin,
            ]}>
            <View style={[TM.flexDirRow]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f18]}>ඊළඟ පියවර</Text>
            </View>
          </TouchableOpacity>
          <View style={[TM.h5]} />
          <TouchableOpacity
            onPress={newActivity}
            style={[
              {width: SCREEN_WIDTH * 0.6, height: SCREEN_HEIGHT * 0.07},
              TM.p4,
              TM.borderRadius20,
              TM.alignItemCenter,
              TM.justifyCenter,
              TM.bgPurl1,
            ]}>
            <View style={[TM.flexDirRow]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f18]}>
                අලුත් ක්‍රියාකාරකමට
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  next: {
    height: 75,
    width: 75,
  },
  win: {
    height: 1,
    width: 60,
  },
  objGame: {
    height: 60,
    width: 60,
  },
  mr: {
    marginRight: 50,
  },
});

export default WinMarkScreen;
