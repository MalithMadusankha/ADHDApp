import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthHeader = async () => {
  const token = await AsyncStorage.getItem('userToken');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const RegisterNo = async () => await AsyncStorage.getItem('userId');

// await AsyncStorage.setItem('userId', user._id);
