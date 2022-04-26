import React from "react";
import { View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Container,
  ContainerRow,
  ContainerText,
  ItemImage,
  Title,
  TextInfo,
} from "./styles";

import img1 from "../../assets/icon/likedSongs.png";
import img2 from "../../assets/icon/item1.png";
import img3 from "../../assets/icon/item2.png";
import img4 from "../../assets/images/dancePopHits.png";
import img5 from "../../assets/images/areBe.png";
import img6 from "../../assets/images/getTurnt.png";
import img7 from "../../assets/images/dinnerChill.png";
import img8 from "../../assets/images/peacefulMeditation.png";
import img9 from "../../assets/images/loveSongs.png";
import img10 from "../../assets/images/happyHits.png";

const ItensList: React.FC = () => {
  const items = [
    {
      image: img1,
      title: "Musicas Curtidas",
      text: "Playlist • 275 músicas",
      pin: true,
      down: true,
      selected: true,
    },
    {
      image: img2,
      title: "Novos epsódios",
      text: "Atualizado hoje",
      pin: true,
      down: false,
      selected: false,
    },
    {
      image: img3,
      title: "Seus epsódios",
      text: "Episódios salvos e baixados",
      pin: true,
      down: false,
      selected: false,
    },
    {
      image: img4,
      title: "Dance Pop Hits",
      text: "Playlist • Spotify",
      pin: false,
      down: false,
      selected: false,
    },
    {
      image: img5,
      title: "Are Be",
      text: "Playlist • Spotify",
      pin: false,
      down: false,
      selected: false,
    },
    {
      image: img6,
      title: "Get Turnt",
      text: "Playlist • Spotify",
      pin: false,
      down: false,
      selected: false,
    },
    {
      image: img7,
      title: "Dinner Chill",
      text: "Playlist • Spotify",
      pin: false,
      down: false,
      selected: false,
    },
    {
      image: img8,
      title: "Peace full Meditation",
      text: "Playlist • Spotify",
      pin: false,
      down: false,
      selected: false,
    },
    {
      image: img9,
      title: "Love Songs",
      text: "Playlist • Spotify",
      pin: false,
      down: false,
      selected: false,
    },
    {
      image: img10,
      title: "Happy Hits",
      text: "Playlist • Spotify",
      pin: false,
      down: false,
      selected: false,
    },
  ];

  return (
    <View>
      {items.map((items) => (
        <Container>
          <ItemImage source={items.image} />
          <ContainerText>
            {(items.selected && (
              <Title style={{ color: "green" }}>{items.title}</Title>
            )) || (
              <Title style={{ color: "white", opacity: 0.8 }}>
                {items.title}
              </Title>
            )}
            <ContainerRow>
              {(items.pin && (
                <AntDesign name="pushpin" size={12} color="green" />
              )) || <View />}
              {(items.down && (
                <Ionicons name="arrow-down-circle" size={12} color="green" />
              )) || <View />}
              <TextInfo>{items.text}</TextInfo>
            </ContainerRow>
          </ContainerText>
        </Container>
      ))}
    </View>
  );
};

export default ItensList;
