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
import img7 from "../../assets/images/areBe.png";
import img8 from "../../assets/images/coffeTableJazz.png";
import img9 from "../../assets/images/loveSongs.png";
import img10 from "../../assets/images/deluxe.png";
import img11 from "../../assets/images/ellie.png";
import img12 from "../../assets/images/feelInMyself.png";
import img13 from "../../assets/images/happyHits.png";
import img14 from "../../assets/images/hotCountry.png";
import img15 from "../../assets/images/badBoy.png";
import img16 from "../../assets/images/feelGoodPiano.png";
import img17 from "../../assets/images/workoutTwerkout.png";
import img18 from "../../assets/images/popSauce.png";
import img19 from "../../assets/images/megaHitMix.png";
import img20 from "../../assets/images/dailymix3.png";
import img21 from "../../assets/images/darkAndStormy.png";
import img22 from "../../assets/images/deepSleep.png";
import img23 from "../../assets/images/peacefulPiano.png";
import img24 from "../../assets/images/topHitsTelugu.png";
import img25 from "../../assets/images/rockParty.png";

const RecentlyPlayed: React.FC = () => {
  const item = [
    {
      artist: img1,
      text: "neha",
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
    {
      artist: img7,
      text: "Are Be",
    },
    {
      artist: img8,
      text: "Coffe Table Jazz",
    },
    {
      artist: img9,
      text: "Love Songs",
    },
    {
      artist: img10,
      text: "deluxe",
    },
    {
      artist: img11,
      text: "ellie",
    },
    {
      artist: img12,
      text: "Feel In Myself",
    },
    {
      artist: img13,
      text: "Happy Hits",
    },
    {
      artist: img14,
      text: "Hot Country",
    },
    {
      artist: img15,
      text: "Bad Boy",
    },
    {
      artist: img16,
      text: "Feel Good Piano",
    },
    {
      artist: img17,
      text: "Workout Twerkout",
    },
    {
      artist: img18,
      text: "Pop Sauce",
    },
    {
      artist: img19,
      text: "megaHitMix",
    },
    {
      artist: img20,
      text: "Daily Mix3",
    },
    {
      artist: img21,
      text: "Dark And Stormy",
    },
    {
      artist: img22,
      text: "Deep Sleep",
    },
    {
      artist: img23,
      text: "Peace Full Piano",
    },
    {
      artist: img24,
      text: "Top Hits Telugu",
    },
    {
      artist: img25,
      text: "Rock Party",
    },
  ];

  var list = [];
  var items = [];

  for (var i = 0; i < 12; i++) {
    var newOrder = item[Math.floor(Math.random() * item.length)];
    items.push(newOrder);
    list = [...new Set(items)];
  }

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
