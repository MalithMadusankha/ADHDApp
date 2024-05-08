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

import {GAME_RECORMMEND} from '../../utility/ConstVaribales';
import {GameAnalysis, GetGameData} from '../../service/GameService';

const GameAnalysisScreen = ({navigation, route}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const {game} = route.params;

  const [analysisRes, setAnalysisRes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchActivityData = async () => {
    try {
      const res = await GetGameData(game.gameType);
      console.log(res.data);
      getAnalysis(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnalysis = async gameData => {
    try {
      const res = await GameAnalysis(gameData);
      console.log(res.data.predict_res);
      setAnalysisRes(GAME_RECORMMEND[res.data.predict_res]);
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
                <Text style={[TM.fBlack, TM.fBold, TM.f20]}>විශ්ලේෂණය</Text>
              </View>

              {analysisRes && analysisRes.length > 0
                ? analysisRes.map((recom, key) => (
                    <View style={[TM.flexDirRow, TM.mt5]} key={key}>
                      <Text
                        style={[TM.fBlack, TM.fBold, TM.f15, TM.txtAlignLeft]}>
                        {recom}
                      </Text>
                    </View>
                  ))
                : null}
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

export default GameAnalysisScreen;
