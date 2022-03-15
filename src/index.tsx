import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Background } from "./styles";

import Player from "./pages/Player";
import { AudioProvider } from "./hooks/audio";

const Main: React.FC = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={["#090979", "#000000"]}
        start={[0.21, 0.08]}
        end={[0.3, 0.22]}
        style={{ flex: 1 }}
      >
        <AudioProvider>
          <StatusBar style="light" />
          <Player />
        </AudioProvider>
      </LinearGradient>
    </ScrollView>
  );
};

export default Main;
