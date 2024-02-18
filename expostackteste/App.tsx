import 'react-native-gesture-handler';
import './global.css';

import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts,
} from '@expo-google-fonts/ubuntu';
import React from 'react';
import { StatusBar } from 'react-native';

import { Loading } from './src/components/Loading';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { RootStack } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <AuthContextProvider>
        <RootStack />
      </AuthContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </>
  );
}
