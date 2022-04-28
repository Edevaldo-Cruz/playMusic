import React from "react";
import { View } from "react-native";
import { Container, ImgCard, TitleCard } from "./styles";

import card1 from "../../assets/images/genres1.png";
import card2 from "../../assets/images/genres2.png";
import card3 from "../../assets/images/genres3.png";
import card4 from "../../assets/images/genres4.png";
import card5 from "../../assets/images/genres5.png";
import card6 from "../../assets/images/genres6.png";

const TopGenres: React.FC = () => {
  return (
    <View style={{ marginBottom: 60 }}>
      <TitleCard>Your top generes</TitleCard>
      <Container>
        <ImgCard source={card1} />
        <ImgCard source={card2} />
      </Container>
      <Container>
        <ImgCard source={card3} />
        <ImgCard source={card4} />
      </Container>
      <TitleCard>Your top generes</TitleCard>
      <Container>
        <ImgCard source={card5} />
        <ImgCard source={card6} />
      </Container>
      <Container>
        <ImgCard source={card5} />
        <ImgCard source={card6} />
      </Container>
      <Container>
        <ImgCard source={card5} />
        <ImgCard source={card6} />
      </Container>
      <Container>
        <ImgCard source={card5} />
        <ImgCard source={card6} />
      </Container>
      <Container>
        <ImgCard source={card5} />
        <ImgCard source={card6} />
      </Container>
    </View>
  );
};

export default TopGenres;
