import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return(
    <>
    <StatusBar  barStyle='light-content' backgroundColor='#322444' />
    <Routes />
    </>
  );
}

