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

const FindObjLevel2Screen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [startT, setStartT] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [chosseObj1, setChosseObj1] = useState(0);
  const [chosseObj2, setChosseObj2] = useState(0);
  const [chosseObj3, setChosseObj3] = useState(0);
  const [chosseObj4, setChosseObj4] = useState(0);
  const [isNoCorrect, setIsNoCorrect] = useState(0);

  const [countObj, setCountObj] = useState(0);

  const [wObj1, setWObj1] = useState(0);
  const [wObj2, setWObj2] = useState(0);
  const [wObj3, setWObj3] = useState(0);
  const [wObj4, setWObj4] = useState(0);
  const [wObj5, setWObj5] = useState(0);
  const [wObj6, setWObj6] = useState(0);
  const [wObj7, setWObj7] = useState(0);
  const [wObj8, setWObj8] = useState(0);

  const clickBtn = setVal => {
    if (countObj < 4) {
      setVal(1);
    }
    setCountObj(countObj + 1);
  };

  const start = () => {
    setIsRunning(true);
    setStartT(new Date().getTime());
  };

  const stop = () => {
    setIsRunning(false);
    setIsDisplay(true);
  };

  const clear = () => {
    setStartT(null);
    setIsDisplay(false);
    setIsRunning(false);
    setElapsedTime(0);
  };

  const next = () => {
    stop();
    const duration = Math.floor((new Date().getTime() - startT) / 1000);
    const gameObj = {
      duration,
      marks: chosseObj1 + chosseObj2 + chosseObj3 + chosseObj4 + isNoCorrect,
      totalMark: 6,
      gameType: 0,
      lavel: 2,
    };
    // clear();
    gameObj.marks < 4
      ? navigation.navigate('Lost', {gameObj})
      : navigation.navigate('Win', {gameObj});
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

        {/* phase 1 */}
        <View
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.75},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h2]} />
          <StopwatchGame elapsedTime={elapsedTime} formatTime={formatTime} />
          <View style={[TM.h2]} />
          <View style={[TM.flexDirRow]}>
            <Image
              style={[styles.obj]}
              source={require('../../../assets/img/game/gift.png')}
            />
          </View>
          <View style={[TM.h3]} />
          <View style={[TM.flexDirRow]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>
              ඉහතින් දක්වා ඇති වස්තුවේ පෙනුමට සමාන, වස්තුන් කියක් තිබෙනවද යන්න
              පහතින් ලකුණු කර පිළිතුර තොර ඊළග බොත්තම ඔබන්න 2
            </Text>
          </View>

          <View style={[TM.h5]} />
          {/* row 1 */}
          <View style={[TM.flexDirRow]}>
            {chosseObj1 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/right-gift.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setChosseObj1)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/gift.png')}
                />
              </TouchableOpacity>
            )}

            {wObj1 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-car.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj1)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/car.png')}
                />
              </TouchableOpacity>
            )}
            {wObj4 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-drum.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj4)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/drum.png')}
                />
              </TouchableOpacity>
            )}
            {chosseObj4 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/right-gift.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setChosseObj4)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/gift.png')}
                />
              </TouchableOpacity>
            )}
          </View>
          {/* row 2 */}
          <View style={[TM.flexDirRow]}>
            {wObj2 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-car.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj2)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/car.png')}
                />
              </TouchableOpacity>
            )}
            {chosseObj2 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/right-gift.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setChosseObj2)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/gift.png')}
                />
              </TouchableOpacity>
            )}
            {wObj6 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-house.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj6)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/house.png')}
                />
              </TouchableOpacity>
            )}

            {wObj3 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-car.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj3)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/car.png')}
                />
              </TouchableOpacity>
            )}
          </View>
          {/* row 3 */}
          <View style={[TM.flexDirRow]}>
            {wObj5 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-drum.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj5)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/drum.png')}
                />
              </TouchableOpacity>
            )}
            {wObj7 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-house.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj7)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/house.png')}
                />
              </TouchableOpacity>
            )}
            {wObj8 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/wrong/w-house.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setWObj8)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/house.png')}
                />
              </TouchableOpacity>
            )}
            {chosseObj3 === 1 ? (
              <TouchableOpacity
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/right-gift.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => clickBtn(setChosseObj3)}
                style={[TM.p2, TM.bgMain3, TM.m1, TM.borderRadius10]}>
                <Image
                  style={[styles.objGame]}
                  source={require('../../../assets/img/game/gift.png')}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[TM.h4]} />
          {/* row 1 */}
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity
              onPress={() => setIsNoCorrect(0)}
              style={[TM.px6, TM.py3, TM.bgMain4, TM.mx5, TM.borderRadius100]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsNoCorrect(0)}
              style={[TM.px6, TM.py3, TM.bgMain4, TM.mx5, TM.borderRadius100]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsNoCorrect(2)}
              style={[
                TM.px6,
                TM.py3,
                isNoCorrect === 2 ? TM.bgGreen : TM.bgMain4,
                TM.mx5,
                TM.borderRadius100,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsNoCorrect(0)}
              style={[TM.px6, TM.py3, TM.bgMain4, TM.mx5, TM.borderRadius100]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>5</Text>
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
    height: 60,
    width: 60,
  },
  objGame: {
    height: 60,
    width: 60,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default FindObjLevel2Screen;
