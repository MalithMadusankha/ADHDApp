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
import Theme from '../assets/them/AxTheme';

const HomeScreen = ({navigation}) => {
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
        source={require('../assets/img/home-bg.png')}>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/img/profile.png')}
            style={styles.profile}
          />
        </TouchableOpacity>

        <View>
          <Image source={require('../assets/img/logo.png')} style={css.logo} />
        </View>
        <View
          style={[
            Theme.mt10,
            Theme.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.6},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
          ]}>
          <View style={[Theme.h10]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Guideline')}
              style={[
                Theme.bgYellow1,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,
              ]}>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                කාල සටහන
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h10]} />
          {/* Academy Analysis */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              style={[
                Theme.bgPink1,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,
              ]}
              onPress={() => navigation.navigate('Register')}>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                අධ්‍යයන විශ්ලේෂණය
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h10]} />
          {/* Teaching  Manager */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('GameMenu')}
              style={[
                Theme.bgBlue1,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,
              ]}>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                ඉගැන්වීමේ කළමනාකරු
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
  },
  cardStyles: {
    width: '100%',
    height: 165,
    alignItems: 'center',
  },
  cardSpace: {
    height: 30,
  },
  profile: {width: 75, height: 75, position: 'absolute', top: 5, right: 5},
});

export default HomeScreen;
