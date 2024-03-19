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

const TimeTable1Screen = ({navigation}) => {
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
        source={require('../../assets/img/time1-bg.png')}>
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
          {/* Time table 1 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('WeekDays')}
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
                source={require('../../assets/img/time-table.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                කාල සටහන
              </Text>
            </View>
          </TouchableOpacity>

          {/* Time table 1 */}
          <TouchableOpacity
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
                source={require('../../assets/img/skill-level.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                නිපුණතා මට්ටම
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[Theme.flexDirRow, Theme.mt5]}>
          {/* Time table 1 */}
          <TouchableOpacity
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
                source={require('../../assets/img/coaching.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                පුහුණුකරු
              </Text>
            </View>
          </TouchableOpacity>

          {/* Time table 1 */}
          <TouchableOpacity
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
                source={require('../../assets/img/book.png')}
              />
              <Text
                style={[
                  Theme.fBlack,
                  Theme.fBold,
                  Theme.f14,
                  Theme.py3,
                  Theme.txtAlignCenter,
                ]}>
                දැනුම
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* next button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[
            Theme.bgTransparent1,
            {width: SCREEN_WIDTH * 0.3, height: SCREEN_HEIGHT * 0.047},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
            styles.nextBtn,
          ]}>
          <View style={[Theme.flexDirRow]}>
            <Text style={[Theme.fBlack, Theme.fBold, Theme.f18]}>ඊළඟ</Text>
            <Image
              style={[styles.next]}
              source={require('../../assets/icons/next-ic.png')}
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
  time: {
    height: 90,
    width: 90,
    marginLeft: 10,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default TimeTable1Screen;
