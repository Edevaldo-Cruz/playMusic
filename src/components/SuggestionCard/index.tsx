import React from "react";
import { Container, ImgCard, ContainerCard, TitleCard } from "./styles";
import card1 from "../../assets/icon/likedSongs.png";
import card2 from "../../assets/images/imgCard2.png";
import card3 from "../../assets/images/imgCard3.png";
import card4 from "../../assets/images/imgCard4.png";
import card5 from "../../assets/images/imgCard5.png";
import card6 from "../../assets/images/imgCard6.png";

const SuggestionCard: React.FC = () => {
  const card = [
    {
      img1: card1,
      text1: "Musicas Curtidas",
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
      {card.map((card) => (
        <Container>
          <ContainerCard>
            <ImgCard source={card.img1} />
            <TitleCard>{card.text1}</TitleCard>
          </ContainerCard>
          <ContainerCard>
            <ImgCard source={card.img2} />
            <TitleCard>{card.text2}</TitleCard>
          </ContainerCard>
        </Container>
      ))}
    </>
  );
};

export default SuggestionCard;
