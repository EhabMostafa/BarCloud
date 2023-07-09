import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import NavigationService from './NavigationService';
import NavigationStack from './NavigationStack';


function AppNavigator() {



    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        >
            <NavigationStack />
        </NavigationContainer>

        // </ SafeAreaView>
    );
}

export default AppNavigator;
