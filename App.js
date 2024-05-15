import { SafeAreaView, Text, View } from "react-native";
import Eat from "./Components/eatdie";
import Buttonss from "./Components/buttontt";
import * as React from "react";
import styles from "./assets/cssbutbetter";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { WidgetPreview } from 'react-native-android-widget';
import { HelloWidget } from './Components/Widgetcool';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    HelloHeadlineW00Regular: require("./assets/fonts/HelloHeadlineW00Regular.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Text
        style={{
          fontFamily: "HelloHeadlineW00Regular",
          fontSize: 35,
          color: "#ffffff", //or also known as style.words
        }}
      >
        Oh biscuits!
      </Text>
      <Eat whattoeat="beans" />
      <Text>
        {"\n"}
      </Text>
      <Buttonss buttontitle='thisbuttonn' />
      <WidgetPreview
        renderWidget={() => <HelloWidget />}
        width={320}
        height={200}
      />
    </SafeAreaView>
    
  );
}
//192.168.2.7
