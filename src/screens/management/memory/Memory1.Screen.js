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
} from 'react-native';
import TM from '../../../assets/them/AxTheme';

const Memory1Screen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const {game} = route.params;

  const next = () => {
    navigation.navigate('Memory1B', {game});
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
            source={require('../../../assets/img/game/memory-headline.png')}
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
              පහත රූප හදුනාගන්න.ඒවා මතකයේ තබාගෙන ඉදිරියට යන්න
            </Text>
          </View>

          <View style={[TM.h5]} />
          {/* row 1 */}
          <View style={[TM.flexDirRow, TM.justifySpaceBetween]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame]}
                source={require('../../../assets/img/game/book.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[TM.h5]} />
          <View style={[TM.flexDirRow, TM.flexDirRowReverse]} />

          <View style={[TM.flexDirRowReverse]}>
            <TouchableOpacity style={[TM.p2, TM.m1, TM.borderRadius10]}>
              <Image
                style={[styles.objGame1]}
                source={require('../../../assets/img/game/pencil.png')}
              />
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
    height: 70,
    width: 70,
  },
  objGame1: {
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

export default Memory1Screen;
