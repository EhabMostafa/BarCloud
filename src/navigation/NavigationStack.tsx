

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainMenu } from '../pages';

// import { MyTabs } from './MyTabs';




const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName={"MainMenu"}
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="MainMenu" component={MainMenu} />

    </Stack.Navigator >
  );
}



