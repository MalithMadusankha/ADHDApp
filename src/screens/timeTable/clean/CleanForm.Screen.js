import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import TM from '../../../assets/them/AxTheme';
import {
  CLEAN_TYPE,
  COMPILATION_LEVEL,
  SKILL_LEVEL,
} from '../../../utility/ConstVaribales';
import {AddActivity} from '../../../service/TimeTableService';

const CleanFormScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [intersting, setIntersting] = useState(0);
  const [understanding, setUnderstanding] = useState(0);
  const [compilation, setCompilation] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const {activity} = route.params;

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

  const submitHandler = async () => {
    try {
      const {duration, day, dayType, activityType, estimate} = activity;

      const dataObj = {
        intersting,
        understanding,
        compilation,
        duration, // seconds
        day,
        dayType,
        activityType,
        estimate,
      };
      const res = await AddActivity(dataObj);

      if (res && res.data.status === 'success') {
        console.log(res.data.status);
        Alert.alert('දත්ත සුරකින ලදී');
        navigation.navigate('Day', {day});
      }
    } catch (error) {
      console.log(error);
    }
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

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../../../assets/img/home-bg.png')}>
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
        <View
          style={[
            TM.mt10,
            TM.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.75},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
          ]}>
          <View style={[TM.h1]} />
          <Text
            style={[TM.fBlack, TM.fBold, TM.f18, TM.h10, TM.txtAlignCenter]}>
            {CLEAN_TYPE[activity.cleanType]} ක්‍රියාකාරකම් පිළිබඳ තොරතුරු ලබා
            දෙන්න
          </Text>
          <View style={[TM.h5]} />
          {/* Intersting Level */}
          <View style={[TM.h10, TM.flexDirRow, TM.w100]}>
            <View style={[TM.flexDirCol, TM.w60]}>
              <Text
                style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft, TM.pt11]}>
                රසවත් මට්ටම
              </Text>
            </View>
            <View style={[TM.flexDirCol, TM.w40]}>
              <Picker
                selectedValue={intersting}
                onValueChange={(itemValue, itemIndex) =>
                  setIntersting(itemIndex)
                }
                style={[TM.bgYellow1]}>
                {SKILL_LEVEL.map((level, i) => (
                  <Picker.Item label={level} value={i} key={i} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={[TM.h3]} />
          {/* activities understanding */}
          <View style={[TM.h10, TM.flexDirRow, TM.w100]}>
            <View style={[TM.flexDirCol, TM.w60]}>
              <Text
                style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft, TM.pt5]}>
                ක්‍රියාකාරකම පිළිබඳ අවබෝධය
              </Text>
            </View>
            <View style={[TM.flexDirCol, TM.w40]}>
              <Picker
                selectedValue={understanding}
                onValueChange={(itemValue, itemIndex) =>
                  setUnderstanding(itemIndex)
                }
                style={[TM.bgMain3]}>
                {SKILL_LEVEL.map((level, i) => (
                  <Picker.Item label={level} value={i} key={i} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={[TM.h3]} />
          {/* compilation Level */}
          <View style={[TM.h10, TM.flexDirRow, TM.w100]}>
            <View style={[TM.flexDirCol, TM.w60]}>
              <Text
                style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft, TM.pt11]}>
                ක්‍රියාකාරකම සම්පූර්ණ කිරීමේ හැකියාව
              </Text>
            </View>
            <View style={[TM.flexDirCol, TM.w40]}>
              <Picker
                selectedValue={compilation}
                onValueChange={(itemValue, itemIndex) =>
                  setCompilation(itemIndex)
                }
                style={[TM.bgMain5]}>
                {COMPILATION_LEVEL.map((level, i) => (
                  <Picker.Item label={level} value={i} key={i} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={[TM.h3]} />
          {/* time spending  */}
          <View style={[TM.h10, TM.flexDirRow, TM.w100]}>
            <View style={[TM.flexDirCol, TM.w60]}>
              <Text
                style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft, TM.pt5]}>
                කගතකරපු කාලය
              </Text>
            </View>
            <View style={[TM.flexDirCol, TM.w40]}>
              <Text
                style={[
                  TM.fBlack,
                  TM.fBold,
                  TM.f15,
                  TM.txtAlignLeft,
                  TM.pt5,
                  TM.txtAlignCenter,
                  TM.txtBlue,
                ]}>
                {activity.duration > 59
                  ? `මිනිත්තු ${Math.floor(activity.duration / 60)}.${
                      activity.duration % 60
                    }`
                  : 'තත්පර ' + activity.duration}
              </Text>
            </View>
          </View>

          <View style={[TM.h3]} />
          {/* time spending  */}
          <View style={[TM.h10, TM.flexDirRow, TM.w100]}>
            <View style={[TM.flexDirCol, TM.w60]}>
              <Text
                style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft, TM.pt5]}>
                අනුමාන කාලය
              </Text>
            </View>
            <View style={[TM.flexDirCol, TM.w40]}>
              <Text
                style={[
                  TM.fBlack,
                  TM.fBold,
                  TM.f15,
                  TM.txtAlignLeft,
                  TM.pt5,
                  TM.txtAlignCenter,
                  TM.txtRed,
                ]}>
                මිනිත්තු {activity.estimate}
              </Text>
            </View>
          </View>

          <View style={[TM.h10]} />

          <View style={[TM.h14, TM.flexDirRow]}>
            <TouchableOpacity
              onPress={submitHandler}
              style={[
                TM.bgGreen1,
                TM.fBlack,
                css.btn,
                TM.borderRadius15,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f20, TM.txtAlignCenter]}>
                සුරකින්න
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

export default CleanFormScreen;
