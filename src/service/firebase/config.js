import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = (name, email, password) => {
  if (name && email && password) {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(cred => {
        const {uid} = cred.user;
        auth().currentUser.updateProfile({
          displayName: name,
        });
        console.log('Sign Up', uid);
        return uid;
      })
      .catch(err => Alert(err.code.err.message));
  }
};

const SignIn = (email, password) => {
  if (email && password) {
    return auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        auth()
          .currentUser.getIdToken(true)
          .then(async token => {
            await AsyncStorage.setItem('userToken', token);
          });
      })
      .catch(err => console.log(err));
  }
};

const SignOut = async () => {
  await AsyncStorage.clear();
  return auth().signOut();
};

const Auth = {
  SignIn,
  SignUp,
  SignOut,
};

export default Auth;
