import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../Screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
