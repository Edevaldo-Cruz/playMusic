import React from "react";
import { View } from "react-native";

import { Container, Album, Title } from "./styles";

const AboutAlbum: React.FC = () => {
  return (
    <Container>
      <Title>Selecione um audio</Title>
      <Album
        source={{
          uri: "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg",
        }}
      />
    </Container>
  );
};

export default AboutAlbum;
