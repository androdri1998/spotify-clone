import React from 'react';
import Header from './components/Header/index.component';
import ContainerScreens from '../../shared-components/ContainerScreens/index.component';
import ListPlayeds from '../../shared-components/ListPlayeds/index.component';
import { ScrollView } from 'react-native';

import DATA from '../../utils/data';

export default function Home() {
  return (
    <>
      <ContainerScreens>
        <ScrollView>
          <Header />
          <ListPlayeds 
            title="Recently playeds"
            data={DATA.recents_plays}/>
          <ListPlayeds  
            title="Your heavy rotation"
            data={DATA.heavy_rotations}/>
          <ListPlayeds  
            title="Top 10 artists from the past 3 years"
            data={DATA.past_players}/>
          <ListPlayeds  
            title="New songs addeds"
            data={DATA.recents_plays}/>
          <ListPlayeds  
            title="Made for you"
            data={DATA.recents_plays}/>
        </ScrollView>
      </ContainerScreens>
    </>
  )
}