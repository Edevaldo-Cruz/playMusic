import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container, Text, Content } from "./styles";
import Filter from "../../components/Filter";
import HeaderLibrary from "../../components/HeaderLibrary";

const Search: React.FC = () => {
  return (
    <>
      <ScrollView>
        <StatusBar style="light" />
        <SafeAreaView>
          <Container>
            <HeaderLibrary />
            <Filter />
          </Container>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Search;
