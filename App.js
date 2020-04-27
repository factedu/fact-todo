import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Color from './constraints/color';
import WelcomeScreen from './screens/welcome.screen';
import TodoScreen from './screens/todo.screen';
import LocationScreen from './screens/location.screen';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={screenOptions.Welcome} />
      <Stack.Screen name='Todo' component={TodoScreen} options={screenOptions.Todo} />
      <Stack.Screen name='Location' component={LocationScreen} options={screenOptions.Location} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const screenOptions={
  Welcome:{ title: 'Welcom', headerShown: false },
  Todo:{ 
    title: 'ToDo', 
    headerShown: true,
    headerStyle:{backgroundColor:Color.white},
    headerTintColor:Color.primary
  },
  Location:{ 
    title: 'Location', 
    headerShown: true,
    headerStyle:{backgroundColor:Color.white},
    headerTintColor:Color.primary
  }
};

