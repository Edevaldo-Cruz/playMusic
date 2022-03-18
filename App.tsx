import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/router";
import { AudioProvider } from "./src/hooks/audio";
import AudioPlayer from "./src/components/AudioPlayer";
import ActionSheet from "react-native-actions-sheet";
import ListAudio from "./src/components/ListAudio";
import { Dimensions } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
