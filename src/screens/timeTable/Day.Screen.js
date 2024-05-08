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
import {CLEAN_TYPE, DAY_TYPE, WEEK_DAYS} from '../../utility/ConstVaribales';

const DayScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const {day} = route.params;

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
            Theme.mt15,
            Theme.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.77},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
          ]}>
          <Text style={[Theme.fBlack, Theme.fBold, Theme.f18, Theme.h5]}>
            {WEEK_DAYS[day]}
          </Text>
          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h12, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const dayType = 0;
                const dayObj = {
                  day,
                  dayType,
                  activityType: 'food',
                };
                navigation.navigate('FoodTiming', {dayObj});
              }}
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
                  source={require('../../assets/img/brekfast.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f16]}>
                {DAY_TYPE[0]} ආහාර
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h12, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const dayType = 0;
                const dayObj = {
                  day,
                  dayType,
                };
                navigation.navigate('PlayTiming', {dayObj});
              }}
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
                  source={require('../../assets/img/play.jpg')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f16]}>
                {DAY_TYPE[0]} සෙල්ලම් කාලය
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h12, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const dayType = 1;
                const dayObj = {
                  day,
                  dayType,
                  activityType: 'food',
                };
                navigation.navigate('FoodTiming', {dayObj});
              }}
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
                  source={require('../../assets/img/lunch.jpg')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f16]}>
                {DAY_TYPE[1]} ආහාරය
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h12, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const cleanType = 0;
                const dayObj = {
                  day,
                  dayType: 1,
                  activityType: 'room_clean',
                  cleanType,
                };
                navigation.navigate('CleanTiming', {dayObj});
              }}
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
                  source={require('../../assets/img/room-cleaning.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f16]}>
                {CLEAN_TYPE[0]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h12, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const dayType = 2;
                const dayObj = {
                  day,
                  dayType,
                };
                navigation.navigate('PlayTiming', {dayObj});
              }}
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
                  source={require('../../assets/img/play.jpg')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f16]}>
                {DAY_TYPE[2]} සෙල්ලම් කාලය
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h12, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const cleanType = 1;
                const dayObj = {
                  day,
                  dayType: 2,
                  activityType: 'wash',
                  cleanType,
                };
                navigation.navigate('CleanTiming', {dayObj});
              }}
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
                  source={require('../../assets/img/body-wash.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f16]}>
                {CLEAN_TYPE[1]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h1]} />
          {/* Time Table */}
          <View style={[Theme.h12, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => {
                const dayType = 3;
                const dayObj = {
                  day,
                  dayType,
                  activityType: 'food',
                };
                navigation.navigate('FoodTiming', {dayObj});
              }}
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
                  source={require('../../assets/img/dinner.png')}
                />
              </View>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f16]}>
                {DAY_TYPE[3]} ආහාරය
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
  avatar: {width: 75, height: 60},
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
  profile: {width: 75, height: 75, position: 'absolute', top: 5, right: 5},
});

export default DayScreen;
