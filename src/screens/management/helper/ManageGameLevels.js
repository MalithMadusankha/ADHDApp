import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveIswin = async (gameType, level, isWin) => {
  const saveName = `g${gameType}L${level}`;
  const stringValue = String(isWin); // Ensure value is converted to string
  await AsyncStorage.setItem(saveName, stringValue);
};

export const GetIswin = async (gameType, level) => {
  const getName = `g${gameType}L${level}`;
  const aa = await AsyncStorage.getItem(getName);
  return aa;
};

export const ClearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared successfully.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

export default SaveIswin;
