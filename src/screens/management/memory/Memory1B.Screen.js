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

const Memory1BScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [isBook, setIsBook] = useState(0);
  const [isPencil, setIsPencil] = useState(0);
  const [startT, setStartT] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

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
    const gameObj = {
      duration,
      marks: isBook + isPencil,
      totalMark: 2,
      gameType: 2,
      lavel: 1,
    };
    // clear();
    gameObj.marks === 2
      ? navigation.navigate('Win', {gameObj})
      : navigation.navigate('Lost', {gameObj});
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
            source={require('../../../assets/img/game/memory-headline.png')}
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
          <View style={[TM.flexDirRow, TM.alignItemCenter]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>
              පෙර ඔබ හදුනාගත් රූප පහතින් දැක්වෙන රූප අතර තිබේනම් ඒවා තෝරන්න
            </Text>
          </View>

          <View style={[TM.h5]} />
          {/* row 1 */}
          <View style={[TM.flexDirRow, TM.justifySpaceAround]}>
            {isBook ? (
              <TouchableOpacity
                style={[TM.p2, TM.m1, TM.borderRadius10]}
                onPress={() => setIsBook(true)}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/book-right.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[TM.p2, TM.m1, TM.borderRadius10]}
                onPress={() => setIsBook(true)}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/book.png')}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/car.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[TM.h5]} />
          <View style={[TM.flexDirRow, TM.flexDirRowReverse]} />

          <View style={[TM.justAlign]}>
            {isPencil ? (
              <TouchableOpacity
                style={[TM.p2, TM.m1, TM.borderRadius10]}
                onPress={() => setIsPencil(true)}>
                <Image
                  style={[styles.objGame1]}
                  source={require('../../../assets/img/game/pencil-right.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[TM.p2, TM.m1, TM.borderRadius10]}
                onPress={() => setIsPencil(true)}>
                <Image
                  style={[styles.objGame1]}
                  source={require('../../../assets/img/game/pencil.png')}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/beare.png')}
              />
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
    height: 70,
    width: 70,
  },
  objGame1: {
    height: 90,
    width: 70,
  },
  num: {
    height: 60,
    width: 60,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default Memory1BScreen;
