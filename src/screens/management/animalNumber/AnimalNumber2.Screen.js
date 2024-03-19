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
import TM from '../../../assets/them/AxTheme';

const AnimalNumber2Screen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const next = () => {
    const game = {};
    navigation.navigate('AnimalNumber2B', {game});
  };

  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={[TM.w100, TM.h100, TM.justAlign]}
        style={[TM.w100, TM.h100, TM.justAlign]}
        source={require('../../../assets/img/mgt-bg1.jpg')}>
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

        <View style={[TM.flexDirRow]}>
          <Image
            style={[styles.obj]}
            source={require('../../../assets/img/game/numbering.png')}
          />
        </View>

        {/* phase 1 */}
        <View
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.6},
            TM.p4,
            TM.borderRadius20,
          ]}>
          <View style={[TM.h2]} />

          <View style={[TM.h3]} />
          <View style={[TM.flexDirRow, TM.alignItemCenter]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f14]}>
              පහත සතුන් ඉදිරියෙන් අංක ලබා දී ඇත.එම අංක හොඳින් මතකයේ තබාගෙන
              ඉදිරියට යන්න
            </Text>
          </View>

          <View style={[TM.h5]} />

          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/jiraf.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                TM.bgMain4,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={[TM.flexDirRow, TM.flexDirRowReverse]}>
            <TouchableOpacity
              style={[
                TM.bgMain2,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objCat]}
                source={require('../../../assets/img/game/tortoise.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[TM.flexDirRow]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/rabit.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                TM.bgMain3,
                TM.mx1,
                TM.borderRadius100,
                styles.num,
                TM.alignItemCenter,
                TM.justifyCenter,
              ]}>
              <Text style={[TM.fBlack, TM.fBold, TM.f25]}>4</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* next button */}
        <TouchableOpacity
          onPress={next}
          style={[
            TM.bgTransparent1,
            {width: SCREEN_WIDTH * 0.3, height: SCREEN_HEIGHT * 0.047},
            TM.p4,
            TM.borderRadius20,
            TM.alignItemCenter,
            styles.nextBtn,
          ]}>
          <View style={[TM.flexDirRow]}>
            <Text style={[TM.fBlack, TM.fBold, TM.f18]}>ඊළඟ</Text>
            <Image
              style={[styles.next]}
              source={require('../../../assets/icons/next-ic.png')}
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
  obj: {
    height: 110,
    width: 240,
    marginBottom: 10,
  },
  objGame: {
    height: 90,
    width: 70,
  },
  objCat: {
    height: 70,
    width: 70,
  },
  num: {
    height: 60,
    width: 60,
  },
  nextBtn: {position: 'absolute', bottom: 20, right: 20},
  backBtn: {position: 'absolute', top: 20, left: 20},
});

export default AnimalNumber2Screen;
