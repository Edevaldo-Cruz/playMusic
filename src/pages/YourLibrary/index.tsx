import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons";

import AudioPlayer from "../../components/AudioPlayer";
import Header from "../../components/Header";
import { AudioProvider } from "../../hooks/audio";

import { Container, Text, Content } from "./styles";

import Filter from "../../components/Filter";
import RecentlyPlayed from "../../components/RecentlyPlayed";
import SuggestionCard from "../../components/SuggestionCard";
import HitsOfYesterday from "../../components/HitsOfYesterday";

const Search: React.FC = () => {
  return (
    <>
      <ScrollView>
        <StatusBar style="light" />
        <SafeAreaView>
          <Container>
            <Header />
            <Filter />
            <SuggestionCard />
            <RecentlyPlayed />
            <HitsOfYesterday />
            <RecentlyPlayed />
            <HitsOfYesterday />
            <RecentlyPlayed />
            <HitsOfYesterday />
          </Container>
        </SafeAreaView>
      </ScrollView>
      <AudioProvider>
        <AudioPlayer />
      </AudioProvider>
    </>
  );
};

export default Search;
