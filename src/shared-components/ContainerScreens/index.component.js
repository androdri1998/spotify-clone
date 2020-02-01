import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Styles from './styles';

export default function ContainerScreens({ children }) {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#000"/>
      <SafeAreaView>
        <View style={Styles.Container}>
          {children}
        </View>
      </SafeAreaView>
    </>
  )
}