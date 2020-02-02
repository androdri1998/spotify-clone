import React from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';

import Styles from './styles';
import ItemPlayed from '../ItemPlayed/index.component';

export default function ListPlayeds({ title = "", data = [] }){
  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>{title}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={Styles.ScrollView}>
          {
            data && data.map((item, key) => (
              <ItemPlayed 
                key={key}
                src={item.thumbnail}
                text={item.text} 
                type={item.type}/>
            ))
          }
      </ScrollView>
    </View>
  );
}