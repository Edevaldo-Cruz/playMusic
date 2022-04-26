import React, { createRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionSheet from "react-native-actions-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { StandardTitle } from "./styles";
import Header from "../../components/Header";
import ListAudio from "../../components/ListAudio";
import SuggestionCard from "../../components/SuggestionCard";
import RecentlyPlayed from "../../components/RecentlyPlayed";
import HitsOfYesterday from "../../components/HitsOfYesterday";
import SuggestionPodcast from "../../components/SuggestionPodcast";

const Player: React.FC = () => {
  const actionSheetRef = createRef();

  //Função para acionar modal
  const handleToggleList = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={["#3B14AF", "#121212"]}
          start={[0.092321, 0.02]}
          end={[0.4, 0.259]}
        >
          <Header handleToggleList={handleToggleList} />
          <SuggestionCard />
          <SuggestionPodcast />
          <StandardTitle>Teste titulo</StandardTitle>
          <RecentlyPlayed />
          <StandardTitle>Teste titulo</StandardTitle>
          <HitsOfYesterday />
          <StandardTitle>Teste titulo</StandardTitle>
          <RecentlyPlayed />
          <StandardTitle>Teste titulo</StandardTitle>
          <RecentlyPlayed />
          <View style={{ width: "100%", height: 150 }} />

          <ActionSheet
            ref={actionSheetRef}
            containerStyle={{
              height: Dimensions.get("screen").height,
              backgroundColor: "#121212",
            }}
          >
            <ListAudio handleToggleList={handleToggleList} />
          </ActionSheet>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Player;
