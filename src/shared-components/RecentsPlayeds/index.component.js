import React from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';

import Styles from './styles';

export default function RecentsPlayeds({}){
  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>Recently played</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={Styles.ScrollView}>
          <Text style={Styles.Title}>Content Scroll</Text>
      </ScrollView>
    </View>
  );
}