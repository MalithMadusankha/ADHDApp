import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import TM from '../../../assets/them/AxTheme';
import StopwatchGame from '../../../componet/StopwatchGame';

const AnimalNumber1BScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [startT, setStartT] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [chosseObj1, setChosseObj1] = useState(0);
  const [chosseObj2, setChosseObj2] = useState(0);
  const [isClickWrong1, setIsClickWrong1] = useState(false);
  const [isClickWrong2, setIsClickWrong2] = useState(false);

  const butterflyClick = (correct, val) => {
    setIsClickWrong1(correct);
    setChosseObj1(val);
  };

  const catClick = (correct, val) => {
    setIsClickWrong2(correct);
    setChosseObj2(val);
  };

  const start = () => {
    setIsRunning(true);
    setStartT(new Date().getTime());
  };

  const stop = () => {
    setIsRunning(false);
  };

  const next = () => {
    stop();
    const duration = Math.floor((new Date().getTime() - startT) / 1000);
    const game = {
      duration,
      marks: chosseObj1 + chosseObj2,
      totalMark: 2,
      gameType: 1,
      lavel: 1,
    };
    // clear();
    game.marks === 2
      ? navigation.navigate('Win', {game})
      : navigation.navigate('Lost', {game});
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

  useEffect(() => {
    start();
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../../../assets/img/mgt-bg1.jpg')}>
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

        <View style={[TM.flexDirRow]}>
          <Image
            style={[styles.obj]}
            source={require('../../../assets/img/game/numbering.png')}
          />
        </View>

        {/* phase 1 */}
        <View
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.6},
            TM.p4,
            TM.borderRadius20,
          ]}>
          <View style={[TM.h2]} />
          <StopwatchGame elapsedTime={elapsedTime} formatTime={formatTime} />
          <View style={[TM.h3]} />
          <View style={[TM.flexDirRow, TM.justifyCenter]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>
              මතකයෙන් සතුන්ගේ අංක තෝරන්න
            </Text>
          </View>

          <View style={[TM.h5]} />
          {/* row 1 */}
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/butterfly.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => butterflyClick(true, 0)}
              style={[
                isClickWrong1 ? TM.bgLogin : TM.bgMain4,
                TM.mx5,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => butterflyClick(false, 1)}
              style={[
                chosseObj1 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={[TM.h5]} />
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objCat]}
                source={require('../../../assets/img/game/cat.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => catClick(false, 1)}
              style={[
                chosseObj2 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mx5,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => catClick(true, 0)}
              style={[
                isClickWrong2 ? TM.bgLogin : TM.bgMain4,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>2</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* next button */}
        <TouchableOpacity
          onPress={next}
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.3, height: SCREEN_HEIGHT * 0.047},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
            styles.nextBtn,
          ]}>
          <View style={[TM.flexDirRow]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f18]}>ඊළඟ</Text>
            <Image
              style={[styles.next]}
              source={require('../../../assets/icons/next-ic.png')}
            />
          </View>
        </TouchableOpacity>
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
  obj: {
    height: 110,
    width: 240,
    marginBottom: 10,
  },
  objGame: {
    height: 90,
    width: 70,
  },
  objCat: {
    height: 70,
    width: 70,
  },
  num: {
    height: 60,
    width: 60,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default AnimalNumber1BScreen;
