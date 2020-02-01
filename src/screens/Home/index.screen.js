import React from 'react';
import Header from './components/Header/index.component';
import ContainerScreens from '../../shared-components/ContainerScreens/index.component';
import RecentsPlayeds from '../../shared-components/RecentsPlayeds/index.component';

export default function Home() {
  return (
    <>
      <ContainerScreens>
        <Header />
        <RecentsPlayeds />
      </ContainerScreens>
    </>
  )
}