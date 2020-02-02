import React from 'react';
import {
  View,
  Image
} from 'react-native';

import Styles from './styles';
import imgs from '../../utils/imgs.constantes';

export default function ThumbnailArtists({ src, styles }) {
  return (
    <View>
      <Image 
        style={{...Styles.Img, ...styles}}
        source={imgs[src]}
        />
    </View>
  )
}