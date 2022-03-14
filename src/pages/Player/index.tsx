import React, { createRef } from "react";
import { ScrollView, View, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionSheet from "react-native-actions-sheet";

import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import AboutAlbum from "../../components/AboutAlbum";
import ListAudio from "../../components/ListAudio";

const Player: React.FC = () => {
  const actionSheetRef = createRef();

  //Função para acionar modal
  const handleToggleList = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <SafeAreaView>
      <Header handleToggleList={handleToggleList} />
      <ScrollView>
        <AboutAlbum />
        <AudioPlayer />
      </ScrollView>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          height: Dimensions.get("screen").height - 150,
          padding: 20,
        }}
      >
        <ListAudio />
      </ActionSheet>
    </SafeAreaView>
  );
};

export default Player;
