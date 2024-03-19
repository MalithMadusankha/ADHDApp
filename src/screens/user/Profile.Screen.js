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

const ProfileScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const css = {
    input: {
      width: SCREEN_WIDTH * 0.6,
    },
    btn: {
      width: SCREEN_WIDTH * 0.75,
    },
    gender: {
      width: SCREEN_WIDTH * 0.35,
    },
    profile: {
      width: SCREEN_WIDTH * 0.35,
      height: SCREEN_WIDTH * 0.35,
    },
    name: {width: 30, height: 30},
    birth: {width: 30, height: 30},
  };
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(1);

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
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.7},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
          ]}>
          <View style={[Theme.h5]}>
            <Text style={[Theme.fBlack, Theme.f18]}>දරුවාගේ තොරතුරු</Text>
          </View>
          <Image
            source={require('../../assets/img/profile.png')}
            style={css.profile}
          />
          {/* name */}
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <View
              style={[
                Theme.justifyCenter,
                Theme.px3,
                Theme.bgWhite,
                Theme.borderRadiusStart15,
              ]}>
              <Image
                style={[css.name]}
                source={require('../../assets/icons/profile-ic.png')}
              />
            </View>
            <TextInput
              style={[
                Theme.bgWhite,
                Theme.fBlack,
                css.input,
                Theme.borderRadiusEnd15,
              ]}
              placeholderTextColor="black"
              placeholder="නම"
              onChangeText={text => setUserName(text)}
            />
          </View>
          <View style={[Theme.h5]} />
          {/* birthday */}
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <View
              style={[
                Theme.justifyCenter,
                Theme.px3,
                Theme.bgWhite,
                Theme.borderRadiusStart15,
              ]}>
              <Image
                style={[css.birth]}
                source={require('../../assets/icons/birthth-date-ic.png')}
              />
            </View>
            <TextInput
              style={[
                Theme.bgWhite,
                Theme.fBlack,
                css.input,
                Theme.borderRadiusEnd15,
              ]}
              placeholderTextColor="black"
              placeholder="උපන් දිනය"
              onChangeText={text => setPassword(text)}
            />
          </View>

          <View style={[Theme.h5]} />
          {/* age */}
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <View
              style={[
                Theme.justifyCenter,
                Theme.px3,
                Theme.bgWhite,
                Theme.borderRadiusStart15,
              ]}>
              <Image
                style={[css.birth]}
                source={require('../../assets/icons/age-ic.png')}
              />
            </View>
            <TextInput
              style={[
                Theme.bgWhite,
                Theme.fBlack,
                css.input,
                Theme.borderRadiusEnd15,
              ]}
              placeholderTextColor="black"
              placeholder="වයස"
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={[Theme.h5]} />
          {/* age */}
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => setGender(1)}
              style={[
                gender === 1 ? Theme.bgLogin : Theme.bgWhite,
                Theme.fBlack,
                css.gender,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,
                Theme.mr2,
              ]}>
              <Text style={[Theme.fBlack, Theme.f15]}> පිරිමි </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender(0)}
              style={[
                gender === 0 ? Theme.bgLogin : Theme.bgWhite,
                Theme.fBlack,
                css.gender,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,

                Theme.ml2,
              ]}>
              <Text style={[Theme.fBlack, Theme.f15]}> ගැහැණු </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.h5]} />
          {/* submit */}
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={[
                Theme.bgGreen,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,
              ]}>
              <Text style={[Theme.fBlack, Theme.f15]}> ඇතුල් වන්න </Text>
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
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default ProfileScreen;
