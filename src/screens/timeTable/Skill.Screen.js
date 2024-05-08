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
import LineChartComponet from '../../componet/LineChart';
import {GetActivityData} from '../../service/TimeTableService';

const SkillScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [activity, setActivity] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchActivityData = async () => {
    try {
      const res = await GetActivityData();
      console.log(res.data);
      setActivity(res.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActivityData();
  }, []); // eslint-disable-line

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
        style={[Theme.w100, Theme.h100, Theme.justAlign]}
        source={require('../../assets/img/home-bg.png')}>
        <ScrollView>
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
          {isLoading ? (
            <View
              style={[
                Theme.mt20,
                Theme.bgTransparent1,
                {width: SCREEN_WIDTH * 0.98},
                Theme.p4,
                Theme.borderRadius20,
                Theme.alignItemCenter,
              ]}>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f18]}>
                Loading... . .
              </Text>
            </View>
          ) : (
            <View
              style={[
                Theme.mt20,
                Theme.bgTransparent1,
                {width: SCREEN_WIDTH * 0.98},
                Theme.p4,
                Theme.borderRadius20,
                Theme.alignItemCenter,
              ]}>
              <Text style={[Theme.fBlack, Theme.fBold, Theme.f18]}>
                නිපුණතා මට්ටම
              </Text>
              <View>
                <View style={[Theme.mt5]}>
                  <Text style={[Theme.fBlack, Theme.f15]}>
                    {DAY_TYPE[0]} ආහාර
                  </Text>
                </View>
                <LineChartComponet dataArr={activity.breakfast_time} />
              </View>

              <View style={[Theme.mt5]}>
                <Text style={[Theme.fBlack, Theme.f15]}>
                  {DAY_TYPE[0]} සෙල්ලම් කාලය
                </Text>
                <LineChartComponet dataArr={activity.m_play_time} />
              </View>

              <View style={[Theme.mt5]}>
                <Text style={[Theme.fBlack, Theme.f15]}>
                  {DAY_TYPE[1]} ආහාර
                </Text>

                <LineChartComponet dataArr={activity.lunch_time} />
              </View>

              <View style={[Theme.mt5]}>
                <Text style={[Theme.fBlack, Theme.f15]}> {CLEAN_TYPE[0]}</Text>

                <LineChartComponet dataArr={activity.clean_time} />
              </View>

              <View style={[Theme.mt5]}>
                <Text style={[Theme.fBlack, Theme.f15]}>
                  {DAY_TYPE[1]} සෙල්ලම් කාලය
                </Text>

                <LineChartComponet dataArr={activity.e_play_time} />
              </View>

              <View style={[Theme.mt5]}>
                <Text style={[Theme.fBlack, Theme.f15]}> {CLEAN_TYPE[1]}</Text>

                <LineChartComponet dataArr={activity.bath_time} />
              </View>

              <View style={[Theme.mt5]}>
                <Text style={[Theme.fBlack, Theme.f15]}>
                  {DAY_TYPE[3]} ආහාරය
                </Text>

                <LineChartComponet dataArr={activity.dinner_time} />
              </View>
            </View>
          )}
        </ScrollView>
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

export default SkillScreen;
