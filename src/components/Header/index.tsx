import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Button, Container, ImgLogo } from "./styles";

import logo from "../../assets/images/icon.png";

const Header: React.FC = ({ handleToggleList }) => {
  return (
    <Container>
      <ImgLogo source={logo} />
      <Button onPress={handleToggleList}>
        <Feather name="list" size={24} color="white" />
      </Button>
    </Container>
  );
};

export default Header;
