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
import CatImg from '../../../assets/img/game/cat.png';
import DishImg from '../../../assets/img/game/dish.png';
import CornImg from '../../../assets/img/game/corn.png';
import PengImg from '../../../assets/img/game/peng.png';
import WatchImg from '../../../assets/img/game/watch.png';

const MatchLevel3Screen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [countR, setCountR] = useState(0);
  const [startT, setStartT] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [PengImg, WatchImg, PengImg, CornImg];
  const images1 = [DishImg, CatImg, WatchImg, DishImg];

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
      marks: 2 === currentImageIndex ? 2 : 0,
      totalMark: 2,
      gameType: 3,
      lavel: 3,
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index
      setCountR(countR + 1);
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 2100); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentImageIndex]); // eslint-disable-line

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
            source={require('../../../assets/img/game/match-photo.png')}
          />
        </View>

        {/* phase 1 */}
        <View
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.64},
            TM.p4,
            TM.borderRadius20,
          ]}>
          <View style={[TM.h2]} />
          <StopwatchGame elapsedTime={elapsedTime} formatTime={formatTime} />

          <View style={[TM.h3]} />
          <View style={[TM.flexDirRow, TM.alignItemCenter]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>
              පළමුවෙන් ලබා දී ඇති පින්තූරය දෙස බලන්න එම රූපයම පහත තැඹිලි පාට
              කොටුව තුළ දිස්වන විට පමණක් පහතින් ඇති නිල් පාට බොත්තම ඔබන්න.
            </Text>
          </View>

          <View style={[TM.h5]} />
          {/* row 1 */}
          <View style={[TM.flexDirRow, TM.justifySpaceAround]}>
            <View>
              <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
                <Image style={[styles.objGame]} source={PengImg} />
              </TouchableOpacity>
              <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
                <Image style={[styles.objGame3]} source={WatchImg} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[TM.p2, TM.m1, TM.borderRadius10, TM.bgMain0]}>
              <Image
                style={[styles.objGame]}
                source={images[currentImageIndex]}
              />
              <Image
                style={[styles.objGame3]}
                source={images1[currentImageIndex]}
              />
            </TouchableOpacity>
          </View>
          <View style={[TM.h1]} />

          <View style={[TM.justAlign, TM.flexDirRow]}>
            <TouchableOpacity
              style={[
                TM.p2,
                TM.mt10,
                TM.borderRadius10,
                TM.bgBlue,
                TM.borderRadius100,
                styles.objGame1,
              ]}
              onPress={next}
            />
            <TouchableOpacity
              style={[
                TM.mt10,
                TM.ml5,
                TM.borderRadius10,
                TM.bgMain5,
                TM.borderRadius100,
                styles.objGame1,
                TM.justAlign,
              ]}>
              <Text style={[TM.f30]}> {parseInt(countR / 4)}</Text>
            </TouchableOpacity>
          </View>
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
  obj: {
    height: 110,
    width: 240,
    marginBottom: 10,
  },
  objGame: {
    height: 120,
    width: 100,
  },
  objGame3: {
    height: 80,
    width: 100,
  },
  objGame1: {
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

export default MatchLevel3Screen;
