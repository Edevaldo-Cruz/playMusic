import React from "react";
import { ToastAndroid } from "react-native";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";

import { Button, Container, Salutation, ContainerBtn } from "./styles";

const Header: React.FC = ({ handleToggleList }) => {
  let now = new Date();
  let hour = now.getHours();

  if (hour > 4 && hour < 12) {
    var salutationText = "Bom dia";
  } else if (hour > 11 && hour < 18) {
    var salutationText = "Boa tarde";
  } else {
    var salutationText = "Boa noite";
  }

  const notifications = () => {
    ToastAndroid.show(
      "Você não possue notificações no momento.",
      ToastAndroid.SHORT
    );
  };

  const settings = () => {
    ToastAndroid.show(
      "Botão de configurações desabilitado.",
      ToastAndroid.SHORT
    );
  };

  return (
    <Container>
      <Salutation>{salutationText}</Salutation>
      <ContainerBtn>
        <Button onPress={() => notifications()}>
          <Feather name="bell" size={24} color="white" />
        </Button>
        <Button onPress={handleToggleList}>
          <MaterialIcons name="history" size={25} color="white" />
        </Button>
        <Button onPress={() => settings()}>
          <Ionicons name="ios-settings-outline" size={25} color="white" />
        </Button>
      </ContainerBtn>
    </Container>
  );
};

export default Header;
