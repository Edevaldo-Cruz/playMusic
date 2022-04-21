import React from "react";

import {
  Container,
  ContainerImg,
  ImgRecentlyPlayed,
  ArtistsName,
  TextView,
} from "./styles";

import img1 from "../../assets/images/podcastContos.png";
import img2 from "../../assets/images/podcastMathildas.png";
import img3 from "../../assets/images/podcastprimoCast.png";
import img4 from "../../assets/images/podcastTechMundo.png";
import img5 from "../../assets/images/podcastCinemaNaVaranda.png";
import img6 from "../../assets/images/podcastWanda.png";

const SuggestionPodcast: React.FC = () => {
  const item = [
    {
      artist: img1,
      text: "Os contos de fadas tradicionais não são exatamente adequados para crianças...",
    },
    {
      artist: img2,
      text: "As Mathildas é um podcast sobre arte, cultura e audiovisual. Volta para sua temporada 2020 com a proposta de expandir seus próprios horizontes",
    },
    {
      artist: img3,
      text: "Toda semana, Thiago Nigro reúne o próprio time, somado a convidados de peso ...",
    },
    {
      artist: img4,
      text: "O TecMundo pode ser sua fonte de informações sobre Podcast e outros assuntos relacionados.",
    },
    {
      artist: img5,
      text: "Podcast semanal com Chico Fireman, Michel Simões e Tiago Faria.",
    },
    {
      artist: img6,
      text: "Notícias, fofocas, opiniões e bom-humor sobre o mundo do entretenimento...",
    },
  ];
  var list = [];
  var items = [];

  for (var i = 0; i < 1; i++) {
    var newOrder = item[Math.floor(Math.random() * item.length)];
    items.push(newOrder);
    list = [...new Set(items)];
  }
  console.log(list);

  return (
    <Container>
      {list.map((list) => (
        <ContainerImg>
          <ImgRecentlyPlayed source={list.artist} />
          <TextView>
            <ArtistsName>{list.text}</ArtistsName>
          </TextView>
        </ContainerImg>
      ))}
    </Container>
  );
};

export default SuggestionPodcast;
