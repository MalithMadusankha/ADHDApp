import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/Welcome.Screen';
import LoginScreen from '../screens/user/Login.Screen';
import RegisterScreen from '../screens/user/Register.Screen';
import HomeScreen from '../screens/Home.Screen';
import ProfileScreen from '../screens/user/Profile.Screen';
import GuidelineScreen from '../screens/timeTable/Guideline.Screen';
import TimeTable1Screen from '../screens/timeTable/TimeTable1.Screen';
import WeekDaysScreen from '../screens/timeTable/WeekDays.Screen';
import DayScreen from '../screens/timeTable/Day.Screen';
import FoodTimingScreen from '../screens/timeTable/foods/FoodTiming.Screen';
import FoodFormScreen from '../screens/timeTable/foods/FoodForm.Screen';
import PlayTimingScreen from '../screens/timeTable/play/PlayTiming.Screen';
import PlayFormScreen from '../screens/timeTable/play/PlayForm.Screen';
import CleanTimingScreen from '../screens/timeTable/clean/CleanTiming.Screen';
import CleanFormScreen from '../screens/timeTable/clean/CleanForm.Screen';
import GameMenuScreen from '../screens/management/GameMenu.Screen';
import LavelScreen from '../screens/management/Lavel.Screen';
import FindObjLevel1Screen from '../screens/management/findObjects/FindObjLevel1.Screen';
import WinScreen from '../componet/Win.Screen';
import WinMarkScreen from '../componet/WinMark.Screen';
import LostScreen from '../componet/Lost.Screen';
import LostMarkScreen from '../componet/LostMark.Screen';
import FindObjLevel2Screen from '../screens/management/findObjects/FindObjLevel2.Screen';
import FindObjLevel3Screen from '../screens/management/findObjects/FindObjLevel3.Screen';
import AnimalNumber1Screen from '../screens/management/animalNumber/AnimalNumber1.Screen';
import AnimalNumber1BScreen from '../screens/management/animalNumber/AnimalNumber1B.Screen ';
import AnimalNumber2Screen from '../screens/management/animalNumber/AnimalNumber2.Screen';
import AnimalNumber2BScreen from '../screens/management/animalNumber/AnimalNumber2B.Screen';
import AnimalNumber3Screen from '../screens/management/animalNumber/AnimalNumber3.Screen';
import AnimalNumber3BScreen from '../screens/management/animalNumber/AnimalNumber3B.Screen';
import Memory1Screen from '../screens/management/memory/Memory1.Screen';
import Memory1BScreen from '../screens/management/memory/Memory1B.Screen';
import Memory2BScreen from '../screens/management/memory/Memory2B.Screen';
import Memory2Screen from '../screens/management/memory/Memory2.Screen';
import Memory3Screen from '../screens/management/memory/Memory3.Screen';
import Memory3BScreen from '../screens/management/memory/Memory3B.Screen';
import MatchLevel1Screen from '../screens/management/matchPhotos/MatchLevel1.Screen';
import MatchLevel2Screen from '../screens/management/matchPhotos/MatchLevel2.Screen';
import MatchLevel3Screen from '../screens/management/matchPhotos/MatchLevel3.Screen';
import CoachingScreen from '../screens/timeTable/Coaching.Screen';
import GameAnalysisScreen from '../screens/management/GameAnalysis.Screen';

const RootRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        shifting="true"
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: false,
          gestureDirection: 'horizontal',
        })}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Guideline" component={GuidelineScreen} />
        <Stack.Screen name="TimeTable1" component={TimeTable1Screen} />
        <Stack.Screen name="WeekDays" component={WeekDaysScreen} />
        <Stack.Screen name="Day" component={DayScreen} />

        {/* Day works */}
        <Stack.Screen name="FoodTiming" component={FoodTimingScreen} />
        <Stack.Screen name="FoodForm" component={FoodFormScreen} />
        <Stack.Screen name="PlayTiming" component={PlayTimingScreen} />
        <Stack.Screen name="PlayForm" component={PlayFormScreen} />
        <Stack.Screen name="CleanTiming" component={CleanTimingScreen} />
        <Stack.Screen name="CleanForm" component={CleanFormScreen} />
        <Stack.Screen name="Coaching" component={CoachingScreen} />

        {/* Teaching Management */}
        <Stack.Screen name="GameMenu" component={GameMenuScreen} />
        <Stack.Screen name="Lavel" component={LavelScreen} />
        <Stack.Screen name="GameAnalysis" component={GameAnalysisScreen} />
        {/* find object games */}
        <Stack.Screen name="FindObjLevel1" component={FindObjLevel1Screen} />
        <Stack.Screen name="FindObjLevel2" component={FindObjLevel2Screen} />
        <Stack.Screen name="FindObjLevel3" component={FindObjLevel3Screen} />

        {/* numbering games */}
        <Stack.Screen name="AnimalNumber1" component={AnimalNumber1Screen} />
        <Stack.Screen name="AnimalNumber2" component={AnimalNumber2Screen} />
        <Stack.Screen name="AnimalNumber3" component={AnimalNumber3Screen} />
        <Stack.Screen name="AnimalNumber1B" component={AnimalNumber1BScreen} />
        <Stack.Screen name="AnimalNumber2B" component={AnimalNumber2BScreen} />
        <Stack.Screen name="AnimalNumber3B" component={AnimalNumber3BScreen} />

        <Stack.Screen name="Win" component={WinScreen} />
        <Stack.Screen name="WinMark" component={WinMarkScreen} />
        <Stack.Screen name="Lost" component={LostScreen} />
        <Stack.Screen name="LostMark" component={LostMarkScreen} />

        {/* memory games */}
        <Stack.Screen name="Memory1" component={Memory1Screen} />
        <Stack.Screen name="Memory1B" component={Memory1BScreen} />
        <Stack.Screen name="Memory2" component={Memory2Screen} />
        <Stack.Screen name="Memory2B" component={Memory2BScreen} />
        <Stack.Screen name="Memory3" component={Memory3Screen} />
        <Stack.Screen name="Memory3B" component={Memory3BScreen} />

        {/* match games */}
        <Stack.Screen name="Match1" component={MatchLevel1Screen} />
        <Stack.Screen name="Match2" component={MatchLevel2Screen} />
        <Stack.Screen name="Match3" component={MatchLevel3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootRoutes;
