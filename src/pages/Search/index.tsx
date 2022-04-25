import React, { createRef } from "react";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, InputView, InputSearch, ContainerInput } from "./styles";
import TopGenres from "../../components/TopGenres";

const YourLibrary: React.FC = () => {
  const actionSheetRef = createRef();

  const handleToggleList = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <>
      <Container>
        <ScrollView>
          <StatusBar style="light" />
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
      </Container>
    </>
  );
};

export default YourLibrary;
