import React from 'react';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold
} from '@expo-google-fonts/open-sans';

import {ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';

import { Home } from './src/screens';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold,
    OpenSans_400Regular,
    OpenSans_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
