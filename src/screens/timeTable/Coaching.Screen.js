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
  ScrollView,
} from 'react-native';
import TM from '../../assets/them/AxTheme';
import {
  AnalysisActivity,
  GetActivityData,
} from '../../service/TimeTableService';
import {
  ACTIVITY_RECORMMEND,
  CLEAN_TYPE,
  DAY_TYPE,
} from '../../utility/ConstVaribales';

const CoachingScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [analysisRes, setAnalysisRes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchActivityData = async () => {
    try {
      const res = await GetActivityData();
      console.log(res.data);
      getAnalysis(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnalysis = async activityData => {
    try {
      const res = await AnalysisActivity(activityData);
      console.log(res.data.predict_res);
      setAnalysisRes(ACTIVITY_RECORMMEND[res.data.predict_res]);
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
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../../assets/img/home-bg.png')}>
        <ScrollView>
          {/* back button */}
          <View style={[TM.h6]}>
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
          </View>
          {isLoading ? (
            <View
              style={[
                TM.mt10,
                TM.bgTransparent,
                {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.9},
                TM.borderRadius20,
                TM.fBlack,
                TM.pt11,
              ]}>
              <Text style={[TM.txtAlignCenter, TM.fBlack]}>Loading... . .</Text>
            </View>
          ) : (
            <View
              style={[
                TM.mt10,
                TM.bgTransparent1,
                {width: SCREEN_WIDTH * 0.9, height: '100%'},
                TM.p4,
                TM.borderRadius20,
                TM.mb10,
              ]}>
              <View style={[TM.h1]} />
              {/* Time Table */}
              <View style={[TM.flexDirRow, TM.justifyCenter]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f20]}>පුහුණුකරු</Text>
              </View>
              <View style={[TM.mt5, TM.mb2, TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {DAY_TYPE[0]} ආහාර
                </Text>
              </View>
              <View style={[TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {analysisRes.breakfast}
                </Text>
              </View>
              <View style={[TM.mt5, TM.mb2, TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {DAY_TYPE[0]} සෙල්ලම් කාලය
                </Text>
              </View>
              <View style={[TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {analysisRes.m_play}
                </Text>
              </View>
              <View style={[TM.mt5, TM.mb2, TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {DAY_TYPE[1]} ආහාරය
                </Text>
              </View>
              <View style={[TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {analysisRes.lunch}
                </Text>
              </View>
              <View style={[TM.mt5, TM.mb2, TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {CLEAN_TYPE[0]}
                </Text>
              </View>
              <View style={[TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {analysisRes.clean}
                </Text>
              </View>
              <View style={[TM.mt5, TM.mb2, TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {DAY_TYPE[2]} සෙල්ලම් කාලය
                </Text>
              </View>
              <View style={[TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {analysisRes.e_play}
                </Text>
              </View>
              <View style={[TM.mt5, TM.mb2, TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {CLEAN_TYPE[1]}
                </Text>
              </View>
              <View style={[TM.flexDirRow]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {analysisRes.bath}
                </Text>
              </View>
              <View style={[TM.mt5, TM.mb2, TM.flexDirRow, TM.mt5]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {DAY_TYPE[3]} ආහාරය
                </Text>
              </View>
              <View style={[TM.flexDirRow, {height: 150}]}>
                <Text style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                  {analysisRes.dinner}
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
        <View style={[{height: 20}]} />
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

export default CoachingScreen;
