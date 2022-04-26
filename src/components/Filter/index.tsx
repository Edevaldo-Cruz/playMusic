import React from "react";
import { Content, Container, Text, ScrollContainer } from "./styles";

const Filter: React.FC = () => {
  return (
    <ScrollContainer horizontal={true}>
      <Content>
        <Container>
          <Text>Playlists</Text>
        </Container>
        <Container>
          <Text>Artistas</Text>
        </Container>
        <Container>
          <Text>Albuns</Text>
        </Container>
        <Container>
          <Text>Podcast e programas</Text>
        </Container>
        <Container>
          <Text>Baixado</Text>
        </Container>
      </Content>
    </ScrollContainer>
  );
};

export default Filter;
