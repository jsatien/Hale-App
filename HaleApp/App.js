import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { initializeApp } from 'firebase/app';
import  { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


const firebaseConfig = {
  apiKey: "AIzaSyBZjOSwmkDo_OzPoEB5r0W--qM4CyZa4VU",
  authDomain: "hale-app-eb6c7.firebaseapp.com",
  projectId: "hale-app-eb6c7",
  storageBucket: "hale-app-eb6c7.appspot.com",
  messagingSenderId: "602664219386",
  appId: "1:602664219386:web:12c4b67169dc66b213cf43",
};

initializeApp(firebaseConfig);


import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from './src/infrastructure/navigation';


export default function App() {
  
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation /> 
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"/>
    </>
  );
}



