import React, { createRef, useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  ContainerFilter,
  TextFilter,
  ContainerArrows,
} from "./styles";
import ActionSheet from "react-native-actions-sheet";
import Filter from "../../components/Filter";
import HeaderLibrary from "../../components/HeaderLibrary";
import { AntDesign, Feather } from "@expo/vector-icons";
import ItensList from "../../components/ItensList";
import ItensGrid from "../../components/ItensGrid";
import ModalFilter from "../../components/ModalFilter";

const Search: React.FC = () => {
  const actionSheetRef = createRef();

  //Função para acionar modal
  const handleFilter = () => {
    actionSheetRef.current?.setModalVisible();
  };
  const [btnList, setBtnList] = useState(true);
  return (
    <>
      <StatusBar style="light" />

      <Container>
        <HeaderLibrary />
        <ScrollView>
          <Filter />
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#000000",
              shadowColor: "#000000",
              shadowOffset: { width: "100%", height: 1 },
              shadowOpacity: 0.9,
              elevation: 9,
            }}
          />
          <ContainerFilter>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={handleFilter}
            >
              <ContainerArrows>
                <AntDesign name="arrowdown" size={14} color="white" />
              </ContainerArrows>
              <AntDesign name="arrowup" size={14} color="white" />
              <TextFilter>Mais recente</TextFilter>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBtnList(!btnList)}>
              {(btnList && (
                <AntDesign name="appstore-o" size={18} color="white" />
              )) || <Feather name="list" size={18} color="white" />}
            </TouchableOpacity>
          </ContainerFilter>
          {(btnList && <ItensList />) || <ItensGrid />}
          <View style={{ marginBottom: 180 }} />
        </ScrollView>
        <ActionSheet
          ref={actionSheetRef}
          containerStyle={{
            height: Dimensions.get("screen").height - 440,
            backgroundColor: "#121212",
          }}
        >
          <ModalFilter handleFilter={handleFilter} />
        </ActionSheet>
      </Container>
    </>
  );
};

export default Search;
