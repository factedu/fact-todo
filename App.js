import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/welcome.screen';
const Stack = createStackNavigator();

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Home' component={WelcomeScreen} options={{ title: 'Overview', headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

