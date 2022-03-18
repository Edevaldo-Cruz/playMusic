import React from "react";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { MaterialIcons } from "@expo/vector-icons";

import AudioPlayer from "../../components/AudioPlayer";
import Header from "../../components/Header";
import { AudioProvider } from "../../hooks/audio";

import { Container, InputView, InputSearch, ContainerInput } from "./styles";
import TopGenres from "../../components/TopGenres";

const YourLibrary: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <StatusBar style="light" />
        <Header />
        <ContainerInput>
          <InputView>
            <MaterialIcons name={"search"} size={35} color={"white"} />
            <InputSearch
              placeholderTextColor={"#FFFFFFc3"}
              placeholder={"Artistas, musicas ou padcasts"}
            />
          </InputView>
        </ContainerInput>

        <TopGenres />
      </ScrollView>

      <AudioProvider>
        <AudioPlayer />
      </AudioProvider>
    </Container>
  );
};

export default YourLibrary;
