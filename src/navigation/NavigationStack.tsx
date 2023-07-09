

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainMenu, Model, ModelDetails } from '../pages';




const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName={"MainMenu"}
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="Model" component={Model} />
      <Stack.Screen name="ModelDetails" component={ModelDetails} />

    </Stack.Navigator >
  );
}



