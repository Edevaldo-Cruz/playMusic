import React from "react";
import { Image, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Container, Title } from "./styles";

const HeaderLibrary: React.FC = () => {
  return (
    <Container>
      <Image
        source={require("../../assets/images/avatar.png")}
        style={{ width: 35, height: 35 }}
      />
      <Title>Sua Biblioteca</Title>
      <View style={{ marginHorizontal: 15 }}>
        <Entypo name="magnifying-glass" size={24} color="white" />
      </View>
      <AntDesign name="plus" size={24} color="white" />
    </Container>
  );
};

export default HeaderLibrary;
