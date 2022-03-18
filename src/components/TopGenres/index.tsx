import React from "react";

import { Container, ImgCard, ContainerCard, TitleCard } from "./styles";

import card1 from "../../assets/images/genres1.png";
import card2 from "../../assets/images/genres2.png";
import card3 from "../../assets/images/genres3.png";
import card4 from "../../assets/images/genres4.png";
import card5 from "../../assets/images/genres5.png";
import card6 from "../../assets/images/genres6.png";

const TopGenres: React.FC = () => {
  const card = [
    {
      img1: card1,
      text1: "Top Hits Hindi",
      img2: card2,
      text2: "Arijit singh",
    },
    {
      img1: card3,
      text1: "Traveling songs",
      img2: card4,
      text2: "Warrior Workout",
    },
    {
      img1: card5,
      text1: "Bollywood Butter",
      img2: card6,
      text2: "Hot Country",
    },
  ];

  return (
    <>
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
    </>
  );
};

export default TopGenres;
