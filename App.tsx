import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/router";
import ActionSheet from "react-native-actions-sheet";
import AudioPlayer from "./src/components/AudioPlayer";
import ListAudio from "./src/components/ListAudio";
import { AudioProvider } from "./src/hooks/audio";
import { createRef } from "react";

export default function App() {
  const actionSheetRef = createRef();

  //Função para acionar modal
  const handleToggleList = () => {
    actionSheetRef.current?.setModalVisible();
  };
  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <AudioProvider>
        <AudioPlayer handleToggleList={handleToggleList} />
        <ActionSheet
          ref={actionSheetRef}
          containerStyle={{
            backgroundColor: "#121212",
          }}
        >
          <ListAudio handleToggleList={handleToggleList} />
        </ActionSheet>
      </AudioProvider>
    </>
  );
}
