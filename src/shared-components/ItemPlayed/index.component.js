import React from 'react';
import {
  View,
  Text
} from 'react-native';
import ThumbnailAlbum from '../ThumbnailAlbum/index.component';

import Styles from './styles';
import ThumbnailArtists from '../ThumbnailArtists/index.component';

export default function ItemPlayed({ text, src, type }) {
  return (
    <View style={Styles.Container}>
      {type === "album" && (
        <>
          <ThumbnailAlbum 
            src={src} 
            styles={Styles.Img}/>
          <Text style={Styles.Description}>{text}</Text>
        </>
      )}
      {type === "artist" && (
        <>
          <ThumbnailArtists
            src={src} 
            styles={Styles.Img}/>
          <Text style={Styles.Description}>{text}</Text>
        </>
      )}
    </View>
  )
}