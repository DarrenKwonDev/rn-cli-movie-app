import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../Screens/Movies';
import Detail from '../Screens/Detail';
import TV from '../Screens/TV';
import Search from '../Screens/Search';
import Favs from '../Screens/Favs';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={TV} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favs" component={Favs} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
  );
}
