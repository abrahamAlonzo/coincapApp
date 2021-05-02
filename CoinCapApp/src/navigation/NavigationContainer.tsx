import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from './NavigationContants';
import {CoinDetailScreen, CoinListScreen} from '../screens'

const Stack = createStackNavigator();

function AppRouting() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} >
        <Stack.Screen name={ROUTES.COINS} component={CoinListScreen} />
        <Stack.Screen name={ROUTES.COIN_DETAILS} component={CoinDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 


export default AppRouting;