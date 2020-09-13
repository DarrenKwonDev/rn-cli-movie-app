/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigations/Stack';
import styled from 'styled-components';
import Tabs from './navigations/Tabs';

function App() {
  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  );
}

export default App;
