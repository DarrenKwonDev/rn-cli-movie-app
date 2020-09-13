/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  background-color: pink;
  padding: 35px;
  margin-top: 25px;
`;

const App: () => React$Node = () => {
  return (
    <>
      <Container>
        <Text>hellosss</Text>
      </Container>
    </>
  );
};

export default App;
