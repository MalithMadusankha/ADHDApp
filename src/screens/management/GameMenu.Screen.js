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
import Theme from '../../assets/them/AxTheme';
import {GAME_TYPE} from '../../utility/ConstVaribales';

const GameMenuScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

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

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
        style={[Theme.w100, Theme.h100, Theme.justAlign]}
        source={require('../../assets/img/mgt-bg2.png')}>
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            Theme.bgTransparent1,
            {width: SCREEN_WIDTH * 0.3, height: SCREEN_HEIGHT * 0.047},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
            styles.backBtn,
          ]}>
          <View style={[Theme.flexDirRow]}>
            <Text style={[Theme.fBlack, Theme.fBold, Theme.f18]}>ආපසු</Text>
            <Image
              style={[styles.next]}
              source={require('../../assets/icons/back-ic.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={Theme.h30} />

        <View style={[Theme.flexDirRow]}>
          {/* game 1 */}
          <TouchableOpacity
            onPress={() => {
              const gameType = 0;
              navigation.navigate('Lavel', {gameType});
            }}
            style={[
              Theme.mt10,
              Theme.bgTransparent1,
              {width: SCREEN_WIDTH * 0.4, height: SCREEN_HEIGHT * 0.17},
              Theme.p4,
              Theme.borderRadius20,
              Theme.alignItemCenter,
            ]}>
            <View style={[Theme.flexDirCol]}>
              <Image
                style={[styles.time]}
                source={require('../../assets/img/game/g1.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                {GAME_TYPE[0]}
              </Text>
            </View>
          </TouchableOpacity>

          {/* game 2 */}
          <TouchableOpacity
            onPress={() => {
              const gameType = 1;
              navigation.navigate('Lavel', {gameType});
            }}
            style={[
              Theme.mt10,
              Theme.bgTransparent1,
              {width: SCREEN_WIDTH * 0.4, height: SCREEN_HEIGHT * 0.17},
              Theme.p4,
              Theme.borderRadius20,
              Theme.alignItemCenter,
              Theme.ml4,
            ]}>
            <View style={[Theme.flexDirCol]}>
              <Image
                style={[styles.time]}
                source={require('../../assets/img/game/g2.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                {GAME_TYPE[1]}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[Theme.flexDirRow, Theme.mt5]}>
          {/* game 3 */}
          <TouchableOpacity
            onPress={() => {
              const gameType = 2;
              navigation.navigate('Lavel', {gameType});
            }}
            style={[
              Theme.bgTransparent1,
              {width: SCREEN_WIDTH * 0.4, height: SCREEN_HEIGHT * 0.17},
              Theme.p4,
              Theme.borderRadius20,
              Theme.alignItemCenter,
            ]}>
            <View style={[Theme.flexDirCol]}>
              <Image
                style={[styles.time]}
                source={require('../../assets/img/game/g3.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                {GAME_TYPE[2]}
              </Text>
            </View>
          </TouchableOpacity>

          {/* game 4 */}
          <TouchableOpacity
            onPress={() => {
              const gameType = 3;
              navigation.navigate('Lavel', {gameType});
            }}
            style={[
              Theme.bgTransparent1,
              {width: SCREEN_WIDTH * 0.4, height: SCREEN_HEIGHT * 0.17},
              Theme.p4,
              Theme.borderRadius20,
              Theme.alignItemCenter,
              Theme.ml4,
            ]}>
            <View style={[Theme.flexDirCol]}>
              <Image
                style={[styles.time]}
                source={require('../../assets/img/game/g4.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                {GAME_TYPE[3]}
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
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  time: {
    height: 90,
    width: 90,
    marginLeft: 10,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default GameMenuScreen;
