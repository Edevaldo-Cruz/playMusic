import React from "react";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";

import { Button, Container, Salutation, ContainerBtn } from "./styles";

const Header: React.FC = ({ handleToggleList }) => {
  return (
    <Container>
      <Salutation>Good afternoon</Salutation>

      <ContainerBtn>
        <Button onPress={handleToggleList}>
          <Feather name="bell" size={24} color="white" />
        </Button>

        <Button onPress={handleToggleList}>
          <MaterialIcons name="history" size={25} color="white" />
        </Button>

        <Button onPress={handleToggleList}>
          <Ionicons name="ios-settings-outline" size={25} color="white" />
        </Button>
      </ContainerBtn>
    </Container>
  );
};

export default Header;
