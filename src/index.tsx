import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Background } from "./styles";

import Player from "./pages/Player";
import { AudioProvider } from "./hooks/audio";

const Main: React.FC = () => {
  return (
    <AudioProvider>
      <StatusBar style="light" />
      <Background>
        <Player />
      </Background>
    </AudioProvider>
  );
};

export default Main;
