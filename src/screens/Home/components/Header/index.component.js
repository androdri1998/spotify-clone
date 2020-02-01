import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default function Header() {
  return (
    <View style={Styles.Header}>
      <Icon name="settings" size={30} color="#fff" />
    </View>
  )
}