import React from "react";

import {
  Container,
  ContainerArtists,
  ContainerImg,
  ImgRecentlyPlayed,
  ArtistsName,
} from "./styles";

import img1 from "../../assets/images/hits2006.png";
import img2 from "../../assets/images/hits2009.png";
import img3 from "../../assets/images/hits2010.png";
import img4 from "../../assets/images/hits2011.png";
import img5 from "../../assets/images/hits2013.png";
import img6 from "../../assets/images/hits2018.png";

const HitsOfYesterday: React.FC = () => {
  const list = [
    {
      artist: img1,
      text: "Hits 2006",
    },
    {
      artist: img2,
      text: "Sucessos de 2009",
    },
    {
      artist: img3,
      text: "Top de 2010",
    },
    {
      artist: img4,
      text: "Best of 2010",
    },
    {
      artist: img5,
      text: "Hits 2013",
    },
    {
      artist: img6,
      text: "Listen 2018",
    },
  ];
  return (
    <Container>
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

export default HitsOfYesterday;
