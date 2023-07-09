import React from 'react';
import { View, StatusBar, LogBox } from "react-native"
import AppNavigator from './navigation';




//starting dev
const Entrypoint = () => {
  LogBox.ignoreAllLogs()
  return (
    <View style={{ flex: 1 }}>

      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content" />

      <AppNavigator />
    </View>
  );
};


export default Entrypoint;