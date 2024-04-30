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
  ScrollView,
} from 'react-native';
import Theme from '../../assets/them/AxTheme';
import {WEEK_DAYS} from '../../utility/ConstVaribales';

const WeekDaysScreen = ({navigation}) => {
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
        source={require('../../assets/img/home-bg.png')}>
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
        <View
          style={[
            Theme.mt10,
            Theme.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.75},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
          ]}>
          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Day', {day: 0})}
              style={[
                Theme.bgGreen1,
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
                ]}>
                <Image
                  style={[styles.avatar]}
                  source={require('../../assets/img/girl.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                {WEEK_DAYS[0]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Day', {day: 1})}
              style={[
                Theme.bgYellow1,
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
                ]}>
                <Image
                  style={[styles.avatar]}
                  source={require('../../assets/img/boy.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                {WEEK_DAYS[1]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Day', {day: 2})}
              style={[
                Theme.bgPurl1,
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
                ]}>
                <Image
                  style={[styles.avatar]}
                  source={require('../../assets/img/girl.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                {WEEK_DAYS[2]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Day', {day: 3})}
              style={[
                Theme.bgLogin,
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
                ]}>
                <Image
                  style={[styles.avatar]}
                  source={require('../../assets/img/boy.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                {WEEK_DAYS[3]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Day', {day: 4})}
              style={[
                Theme.bgPurl2,
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
                ]}>
                <Image
                  style={[styles.avatar]}
                  source={require('../../assets/img/girl.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                {WEEK_DAYS[4]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Day', {day: 5})}
              style={[
                Theme.bgPink1,
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
                ]}>
                <Image
                  style={[styles.avatar]}
                  source={require('../../assets/img/boy.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                {WEEK_DAYS[5]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h14, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Day', {day: 6})}
              style={[
                Theme.bgRed1,
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
                ]}>
                <Image
                  style={[styles.avatar]}
                  source={require('../../assets/img/girl.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f20]}>
                {WEEK_DAYS[6]}
              </Text>
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
  avatar: {width: 40, height: 75},
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
  profile: {width: 75, height: 75, position: 'absolute', top: 5, right: 5},
});

export default WeekDaysScreen;
