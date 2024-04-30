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

const LavelScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

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

        <View style={Theme.h35} />

        <View
          style={[
            Theme.mt10,
            Theme.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.4},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
          ]}>
          <View style={[Theme.h10]} />
          {/* Lavel 1 */}
          <View style={[Theme.h20, Theme.flexDirRow]}>
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
                Theme.bgMain3,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.flexDirRow,
              ]}>
              <View
                style={[
                  Theme.justifyCenter,
                  Theme.px3,
                  Theme.borderRadiusStart15,
                  Theme.alignItemCenter,
                  Theme.w100,
                ]}>
                <Text
                  style={[
                    Theme.fBlack,
                    Theme.fBold,
                    Theme.f20,
                    Theme.txtAlignCenter,
                  ]}>
                  අදියර 01
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h8]} />
          {/* Lavel 2 */}
          <View style={[Theme.h20, Theme.flexDirRow]}>
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
                Theme.bgMain4,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.flexDirRow,
              ]}>
              <View
                style={[
                  Theme.justifyCenter,
                  Theme.px3,
                  Theme.borderRadiusStart15,
                  Theme.alignItemCenter,
                  Theme.w100,
                ]}>
                <Text
                  style={[
                    Theme.fBlack,
                    Theme.fBold,
                    Theme.f20,
                    Theme.txtAlignCenter,
                  ]}>
                  අදියර 02
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h8]} />
          {/* Lavel 3 */}
          <View style={[Theme.h20, Theme.flexDirRow]}>
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
                Theme.bgMain5,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.flexDirRow,
              ]}>
              <View
                style={[
                  Theme.justifyCenter,
                  Theme.px3,
                  Theme.borderRadiusStart15,
                  Theme.alignItemCenter,
                  Theme.w100,
                ]}>
                <Text
                  style={[
                    Theme.fBlack,
                    Theme.fBold,
                    Theme.f20,
                    Theme.txtAlignCenter,
                  ]}>
                  අදියර 03
                </Text>
              </View>
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
  time: {
    height: 90,
    width: 90,
    marginLeft: 10,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default LavelScreen;
