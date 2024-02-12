import React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Slot } from "expo-router";
import { ThemeProvider } from "../context/themeContext";
import { Provider } from "../context/auth";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // return <Stack onLayout={onLayoutRootView} />;
  return (
    <ThemeProvider>
      <Provider>
        <Slot onLayout={onLayoutRootView} />
      </Provider>
    </ThemeProvider>
  );
};

export default Layout;
