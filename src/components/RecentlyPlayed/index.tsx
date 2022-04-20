import React, { useEffect } from "react";

import {
  Container,
  Title,
  ContainerArtists,
  ContainerImg,
  ImgRecentlyPlayed,
  ArtistsName,
} from "./styles";

import img1 from "../../assets/images/recentlyPlayed1.png";
import img2 from "../../assets/images/recentlyPlayed2.png";
import img3 from "../../assets/images/recentlyPlayed3.png";
import img4 from "../../assets/images/recentlyPlayed4.png";
import img5 from "../../assets/images/recentlyPlayed5.png";
import img6 from "../../assets/images/recentlyPlayed6.png";

const RecentlyPlayed: React.FC = () => {
  const item = [
    {
      artist: img1,
      text: "Tereza",
    },
    {
      artist: img2,
      text: "Nija",
    },
    {
      artist: img3,
      text: "Selena",
    },
    {
      artist: img4,
      text: "Dance Party",
    },
    {
      artist: img5,
      text: "Anime Hits",
    },
    {
      artist: img6,
      text: "You & Me",
    },
  ];

  var list = [];
  var items = [];

  for (var i = 0; i < 12; i++) {
    var newOrder = item[Math.floor(Math.random() * item.length)];
    items.push(newOrder);
    list = [...new Set(items)];
  }
  console.log(list);

  return (
    <Container>
      <Title>Recently Played</Title>
      <ContainerArtists horizontal={true}>
        {list.map((list) => (
          <ContainerImg>
            <ImgRecentlyPlayed source={list.artist} />
            <ArtistsName>{list.text}</ArtistsName>
          </ContainerImg>
        ))}
      </ContainerArtists>
    </Container>
  );
};

export default RecentlyPlayed;
