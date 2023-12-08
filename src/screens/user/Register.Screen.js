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

const RegisterScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const css = {
    input: {
      width: SCREEN_WIDTH * 0.6,
    },
    btn: {
      width: SCREEN_WIDTH * 0.75,
    },
    google: {
      width: SCREEN_WIDTH * 0.35,
      height: '80%',
    },
    send: {width: 40, height: 25},
    lock: {width: 20, height: 25, marginHorizontal: '3%'},
  };
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
        style={[Theme.w100, Theme.h100, Theme.justAlign]}
        source={require('../../assets/img/login-bg.png')}>
        <View
          style={[
            Theme.mt10,
            Theme.bgTransparent,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.7},
            Theme.p4,
            Theme.borderRadius20,
            Theme.alignItemCenter,
          ]}>
          <View style={[Theme.h10]}>
            <Text style={[Theme.fBlack, Theme.f18]}>නව ගිණුමක් අරඹන්න</Text>
          </View>
          {/* email */}
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <View
              style={[
                Theme.justifyCenter,
                Theme.px3,
                Theme.bgWhite,
                Theme.borderRadiusStart15,
              ]}>
              <Image
                style={[css.send]}
                source={require('../../assets/img/send.png')}
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
              placeholder="විද්යුත් තැපෑල"
              onChangeText={text => setUserName(text)}
            />
          </View>
          <View style={[Theme.h5]} />
          {/* password */}
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <View
              style={[
                Theme.justifyCenter,
                Theme.px3,
                Theme.bgWhite,
                Theme.borderRadiusStart15,
              ]}>
              <Image
                style={[css.lock]}
                source={require('../../assets/img/lock.jpg')}
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
              placeholder="මුරපදය"
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={[Theme.h10]} />
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <TouchableOpacity
              style={[
                Theme.bgGreen,
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,
              ]}>
              <Text style={[Theme.fBlack, Theme.f15]}>
                ගිණුමක් නිර්මාණය කරන්න
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login */}
          <View style={Theme.h5} />
          <View style={[Theme.h10, Theme.flexDirRow]}>
            <TouchableOpacity
              style={[
                Theme.fBlack,
                css.btn,
                Theme.borderRadius15,
                Theme.alignItemCenter,
                Theme.justifyCenter,
              ]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={[Theme.fBlack, Theme.f16]}>
                ඔබට ගිණුමක් තිබේ නම්,
              </Text>
              <Text style={[Theme.fBlack, Theme.f16]}>ලොගින් වන්න</Text>
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
});

export default RegisterScreen;
