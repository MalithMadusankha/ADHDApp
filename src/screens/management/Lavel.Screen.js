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
import TM from '../../assets/them/AxTheme';
import {GetGameLevel} from '../../service/GameService';
import LockImg from '../../assets/img/game/lock.png';
import {useFocusEffect} from '@react-navigation/native';
import {GetIswin} from './helper/ManageGameLevels';

const LavelScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const [level1, setLevel1] = useState(0);
  const [level2, setLevel2] = useState(0);
  const [level3, setLevel3] = useState(0);

  const {gameType} = route.params;

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

  useEffect(() => {
    const getLevels = async () => {
      try {
        console.log('run useEffect');
        const l1 = await GetIswin(gameType, 1);
        setLevel1(l1);
        console.log('L 1', l1);
        const l2 = await GetIswin(gameType, 2);
        setLevel2(l2);
        const l3 = await GetIswin(gameType, 3);
        setLevel3(l3);
        console.log('L 2', l2);
        console.log('L 3', l3);
      } catch (error) {
        console.log('Error fetching levels:', error);
      }
    };

    getLevels();
  }, [gameType]);

  // Use useFocusEffect to fetch levels when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      const getLevels = async () => {
        try {
          console.log('run useFocusEffect');
          const l1 = await GetIswin(gameType, 1);
          setLevel1(l1);
          const l2 = await GetIswin(gameType, 2);
          setLevel2(l2);
          const l3 = await GetIswin(gameType, 3);
          setLevel3(l3);
        } catch (error) {
          console.log('Error fetching levels:', error);
        }
      };

      getLevels();
    }, [gameType]),
  );

  const fetchGameLevel = async () => {
    try {
      const res = await GetGameLevel(gameType);
      console.log('l == ', res.data.result);
      // setLevel(res.data.result);
    } catch (error) {}
  };

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../../assets/img/mgt-bg2.png')}>
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
              source={require('../../assets/icons/back-ic.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={TM.h35} />

        <View
          style={[
            TM.mt10,
            TM.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.45},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h7]} />
          {/* Lavel 1 */}
          <View style={[TM.h18, TM.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const game = {
                  lavel: 1,
                  gameType,
                };
                if (gameType === 0) {
                  navigation.navigate(`FindObjLevel${game.lavel}`, {game});
                } else if (gameType === 1) {
                  navigation.navigate(`AnimalNumber${game.lavel}`, {
                    game,
                  });
                } else if (gameType === 2) {
                  navigation.navigate(`Memory${game.lavel}`, {game});
                } else {
                  navigation.navigate(`Match${game.lavel}`, {game});
                }
              }}
              style={[
                TM.bgMain3,
                TM.fBlack,
                css.btn,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.flexDirRow,
              ]}>
              <View
                style={[
                  TM.justifyCenter,
                  TM.px3,
                  TM.borderRadiusStart15,
                  TM.alignItemCenter,
                  TM.w100,
                ]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                  අදියර 01
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[TM.h5]} />
          {/* Lavel 2 */}
          {level1 ? (
            <View style={[TM.h18, TM.flexDirRow]}>
              <TouchableOpacity
                onPress={() => {
                  const game = {
                    lavel: 2,
                    gameType,
                  };
                  if (gameType === 0) {
                    navigation.navigate(`FindObjLevel${game.lavel}`, {game});
                  } else if (gameType === 1) {
                    navigation.navigate(`AnimalNumber${game.lavel}`, {game});
                  } else if (gameType === 2) {
                    navigation.navigate(`Memory${game.lavel}`, {game});
                  } else {
                    navigation.navigate(`Match${game.lavel}`, {game});
                  }
                }}
                style={[
                  TM.bgMain4,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.flexDirRow,
                ]}>
                <View
                  style={[
                    TM.justifyCenter,
                    TM.px3,
                    TM.borderRadiusStart15,
                    TM.w100,
                    TM.flexDirRow,
                    TM.alignItemCenter,
                  ]}>
                  <Text
                    style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                    අදියර 02
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[TM.h18, TM.flexDirRow]}>
              <TouchableOpacity
                style={[
                  TM.bgMain4,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.flexDirRow,
                ]}>
                <View
                  style={[
                    TM.justifyCenter,
                    TM.px3,
                    TM.borderRadiusStart15,
                    TM.w100,
                    TM.flexDirRow,
                    TM.alignItemCenter,
                  ]}>
                  <Text
                    style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                    අදියර 02
                  </Text>
                  <Image source={LockImg} style={styles.lock} />
                </View>
              </TouchableOpacity>
            </View>
          )}

          <View style={[TM.h5]} />
          {/* Lavel 3 */}
          {level2 ? (
            <View style={[TM.h18, TM.flexDirRow]}>
              <TouchableOpacity
                onPress={() => {
                  const game = {
                    lavel: 3,
                    gameType,
                  };
                  if (gameType === 0) {
                    navigation.navigate(`FindObjLevel${game.lavel}`, {game});
                  } else if (gameType === 1) {
                    navigation.navigate(`AnimalNumber${game.lavel}`, {game});
                  } else if (gameType === 2) {
                    navigation.navigate(`Memory${game.lavel}`, {game});
                  } else {
                    navigation.navigate(`Match${game.lavel}`, {game});
                  }
                }}
                style={[
                  TM.bgMain5,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.flexDirRow,
                ]}>
                <View
                  style={[
                    TM.justifyCenter,
                    TM.px3,
                    TM.borderRadiusStart15,
                    TM.alignItemCenter,
                    TM.w100,
                    TM.flexDirRow,
                  ]}>
                  <Text
                    style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                    අදියර 03
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[TM.h18, TM.flexDirRow]}>
              <TouchableOpacity
                style={[
                  TM.bgMain5,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.flexDirRow,
                ]}>
                <View
                  style={[
                    TM.justifyCenter,
                    TM.px3,
                    TM.borderRadiusStart15,
                    TM.alignItemCenter,
                    TM.w100,
                    TM.flexDirRow,
                  ]}>
                  <Text
                    style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                    අදියර 03
                  </Text>
                  <Image source={LockImg} style={styles.lock} />
                </View>
              </TouchableOpacity>
            </View>
          )}

          <View style={[TM.h5]} />
          {/* Analysis 3 */}
          {level3 ? (
            <View style={[TM.h18, TM.flexDirRow]}>
              <TouchableOpacity
                onPress={() => {
                  const game = {
                    lavel: 3,
                    gameType,
                  };
                  navigation.navigate('GameAnalysis', {game});
                }}
                style={[
                  TM.bgMain0,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.flexDirRow,
                ]}>
                <View
                  style={[
                    TM.justifyCenter,
                    TM.px3,
                    TM.borderRadiusStart15,
                    TM.alignItemCenter,
                    TM.w100,
                    TM.flexDirRow,
                  ]}>
                  <Text
                    style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                    විශ්ලේෂණය
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[TM.h18, TM.flexDirRow]}>
              <TouchableOpacity
                style={[
                  TM.bgMain0,
                  TM.fBlack,
                  css.btn,
                  TM.borderRadius15,
                  TM.alignItemCenter,
                  TM.flexDirRow,
                ]}>
                <View
                  style={[
                    TM.justifyCenter,
                    TM.px3,
                    TM.borderRadiusStart15,
                    TM.alignItemCenter,
                    TM.w100,
                    TM.flexDirRow,
                  ]}>
                  <Text
                    style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                    විශ්ලේෂණය
                  </Text>
                  <Image source={LockImg} style={styles.lock} />
                </View>
              </TouchableOpacity>
            </View>
          )}
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
  time: {
    height: 90,
    width: 90,
    marginLeft: 10,
  },
  lock: {width: 30, height: 30, marginLeft: 20},
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default LavelScreen;
