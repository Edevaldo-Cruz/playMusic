import React, { createRef } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionSheet from "react-native-actions-sheet";
import { LinearGradient } from "expo-linear-gradient";

import { AudioProvider } from "../../hooks/audio";

import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import ListAudio from "../../components/ListAudio";
import SuggestionCard from "../../components/SuggestionCard";
import RecentlyPlayed from "../../components/RecentlyPlayed";
import HitsOfYesterday from "../../components/HitsOfYesterday";

const Player: React.FC = () => {
  const actionSheetRef = createRef();

  //Função para acionar modal
  const handleToggleList = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={["#4B208D", "#000000"]}
          start={[0.005, 0.03]}
          end={[0.4, 0.24]}
          style={{ flex: 1 }}
        >
          <StatusBar style="light" />
          <SafeAreaView>
            <Header handleToggleList={handleToggleList} />
            <SuggestionCard />
            <RecentlyPlayed />
            <HitsOfYesterday />
            <RecentlyPlayed />
            <HitsOfYesterday />
            <RecentlyPlayed />
            <HitsOfYesterday />
          </SafeAreaView>
        </LinearGradient>
      </ScrollView>
      <AudioProvider>
        <AudioPlayer />

        <ActionSheet
          ref={actionSheetRef}
          containerStyle={{
            height: Dimensions.get("screen").height - 150,
          }}
        >
          <ListAudio />
        </ActionSheet>
      </AudioProvider>
    </>
  );
};

export default Player;
