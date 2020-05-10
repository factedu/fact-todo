import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Color from './constraints/color';
import WelcomeScreen from './screens/welcome.screen';
import TodoScreen from './screens/todo.screen';
import LoginScreen from './screens/Auth/LoginScreen';
// import LocationScreen from './screens/location.screen';

import firebase from 'firebase';
import { firebaseConfig } from './constraints/firebase.config';
import SignupScreen from './screens/Auth/SignupScreen';


firebase.initializeApp(firebaseConfig);




const Stack = createStackNavigator();

export default function App() {
  [user, setUser] = React.useState(null);
  [isLoggedIn, setIsLoggedIn] = React.useState(false);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        {
          (isLoggedIn) ?
            <>
              <Stack.Screen name='Welcome' component={WelcomeScreen} options={screenOptions.Welcome} />
              <Stack.Screen name='Todo' component={TodoScreen} options={screenOptions.Todo} />
            </>
            :
            <>
              <Stack.Screen name='Login' component={LoginScreen}/>
              <Stack.Screen name="Signup" component={SignupScreen}/>
            </>
      }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  Welcome: { title: 'Welcom', headerShown: false },
  Todo: {
    title: 'ToDo',
    headerShown: true,
    headerStyle: { backgroundColor: Color.white },
    headerTintColor: Color.primary
  },
  Location: {
    title: 'Location',
    headerShown: true,
    headerStyle: { backgroundColor: Color.white },
    headerTintColor: Color.primary
  }
};

