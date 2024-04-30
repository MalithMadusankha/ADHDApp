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

const AnimalNumber3BScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [startT, setStartT] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [chosseObj1, setChosseObj1] = useState(0);
  const [chosseObj2, setChosseObj2] = useState(0);
  const [chosseObj3, setChosseObj3] = useState(0);
  const [chosseObj4, setChosseObj4] = useState(0);
  const [isClickWrong1, setIsClickWrong1] = useState(0);
  const [isClickWrong2, setIsClickWrong2] = useState(0);
  const [isClickWrong3, setIsClickWrong3] = useState(0);
  const [isClickWrong4, setIsClickWrong4] = useState(0);

  const beareClick = (correct, val) => {
    setIsClickWrong1(correct);
    setChosseObj1(val);
  };

  const elephantClick = (correct, val) => {
    setIsClickWrong2(correct);
    setChosseObj2(val);
  };

  const rabbitClick = (correct, val) => {
    setIsClickWrong3(correct);
    setChosseObj3(val);
  };

  const pengClick = (correct, val) => {
    setIsClickWrong4(correct);
    setChosseObj4(val);
  };

  const start = () => {
    setIsRunning(true);
    setStartT(new Date().getTime());
  };

  const stop = () => {
    setIsRunning(false);
  };

  const clear = () => {
    setStartT('');
    setIsRunning(false);
    setElapsedTime(0);
  };

  const next = () => {
    stop();
    const duration = Math.floor((new Date().getTime() - startT) / 1000);
    const game = {
      duration,
      marks: chosseObj1 + chosseObj2 + chosseObj3,
      totalMark: 3,
      gameType: 1,
      lavel: 3,
    };
    // clear();
    game.marks === 3
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

          <View style={[TM.h4]} />
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/beare.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => beareClick(1, 0)}
              style={[
                isClickWrong1 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => beareClick(0, 1)}
              style={[
                chosseObj1 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => beareClick(2, 0)}
              style={[
                isClickWrong1 === 2 ? TM.bgLogin : TM.bgMain4,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/elephient.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => elephantClick(0, 1)}
              style={[
                chosseObj2 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => elephantClick(1, 0)}
              style={[
                isClickWrong2 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => elephantClick(2, 0)}
              style={[
                isClickWrong2 === 2 ? TM.bgLogin : TM.bgMain4,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/rabit.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => rabbitClick(1, 0)}
              style={[
                isClickWrong3 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => rabbitClick(2, 0)}
              style={[
                isClickWrong3 === 2 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => rabbitClick(0, 1)}
              style={[
                chosseObj3 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/peng.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pengClick(2, 0)}
              style={[
                isClickWrong4 === 2 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pengClick(1, 0)}
              style={[
                isClickWrong4 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mr2,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => pengClick(0, 1)}
              style={[
                chosseObj4 === 1 ? TM.bgLogin : TM.bgMain4,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
                TM.mt3,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>3</Text>
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
    height: 80,
    width: 60,
  },

  num: {
    height: 60,
    width: 60,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default AnimalNumber3BScreen;
