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
  ScrollView,
} from 'react-native';
import TM from '../../../assets/them/AxTheme';
import Stopwatch from '../../../componet/Stopwatch';
import {DAY_TYPE, ESTIMATED_PLAY} from '../../../utility/ConstVaribales';

const PlayTimingScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [startT, setStartT] = useState(null);
  const [endT, setEndT] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const {dayObj} = route.params;

  const css = {
    input: {
      width: SCREEN_WIDTH * 0.6,
    },
    btn: {
      width: SCREEN_WIDTH * 0.75,
    },
    logo: {
      width: SCREEN_WIDTH * 0.35,
      height: SCREEN_HEIGHT * 0.22,
    },

    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };

  const start = () => {
    setIsRunning(true);
    setStartT(new Date().getTime());
  };

  const stop = () => {
    setIsRunning(false);
    setIsDisplay(true);
    setEndT(new Date().getTime());
  };

  const clear = () => {
    setStartT('');
    setEndT('');
    setIsDisplay(false);
    setIsRunning(false);
    setElapsedTime(0);
  };

  const next = () => {
    const duration = Math.floor((endT - startT) / 1000);
    const {day, dayType} = dayObj;
    const activity = {
      duration,
      dayType,
      day,
      estimate: ESTIMATED_PLAY[dayType],
    };
    clear();
    navigation.navigate('PlayForm', {activity});
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../../../assets/img/home-bg.png')}>
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.3, height: SCREEN_HEIGHT * 0.047},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
            styles.backBtn,
          ]}>
          <View style={[TM.flexDirRow]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f18]}>ආපසු</Text>
            <Image
              style={[styles.next]}
              source={require('../../../assets/icons/back-ic.png')}
            />
          </View>
        </TouchableOpacity>
        <View
          style={[
            TM.mt10,
            TM.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.75},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h1]} />
          <Text
            style={[TM.fBlack, TM.fBold, TM.f18, TM.h10, TM.txtAlignCenter]}>
            {DAY_TYPE[dayObj.dayType]} සෙල්ලම් ක්‍රියාකාරකම් පටන්ගන්න
          </Text>
          <View style={[TM.h1]} />

          {isRunning ? (
            <View style={[TM.h14, TM.flexDirRow]}>
              <TouchableOpacity
                onPress={stop}
                style={[
                  TM.bgRed1,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.justifyCenter,
                ]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                  නතර කරන්න
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[TM.h14, TM.flexDirRow]}>
              {!isDisplay ? (
                <TouchableOpacity
                  onPress={start}
                  style={[
                    TM.bgGreen1,
                    TM.fBlack,
                    css.btn,
                    TM.borderRadius15,
                    TM.alignItemCenter,
                    TM.justifyCenter,
                  ]}>
                  <Text
                    style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                    ආරම්භ කරන්න
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          )}

          <View style={[TM.h1]} />

          <Stopwatch elapsedTime={elapsedTime} formatTime={formatTime} />
          {/* Next Button */}
          <View style={[TM.h15]} />
          {isDisplay ? (
            <View style={[TM.h14, TM.flexDirRow]}>
              <TouchableOpacity
                onPress={next}
                style={[
                  TM.bgGreen1,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.justifyCenter,
                ]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                  ඊළඟට
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
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
  avatar: {width: 40, height: 75},
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
  profile: {width: 75, height: 75, position: 'absolute', top: 5, right: 5},
});

export default PlayTimingScreen;
