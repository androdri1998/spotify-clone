import React from 'react';
import ContainerScreens from '../../shared-components/ContainerScreens/index.component';
import { Text, ScrollView } from 'react-native';

export default function Library() {
  return (
    <>
      <ContainerScreens>
        <ScrollView>
          <Text>Library</Text>
        </ScrollView>
      </ContainerScreens>
    </>
  )
}