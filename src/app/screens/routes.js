import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './home';
import Search from './search';
import Videoplayer from './VideoPlayer';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Videoplayer" component={Videoplayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
