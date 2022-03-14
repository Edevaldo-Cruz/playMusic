import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useAudio } from "../../hooks/audio";

import {
  ItemContainer,
  ItemInfoContainer,
  ItemInfoTitle,
  ItemInfoData,
  ImgAlbum,
  Separetor,
} from "./styles";

const ListAudio: React.FC = () => {
  //const { playList } = useAudio;
  const data = [
    {
      id: "1",
      title: "Teste1",
    },
    {
      id: "2",
      title: "Teste2",
    },
    {
      id: "3",
      title: "Teste3",
    },
    {
      id: "4",
      title: "Teste4",
    },
    {
      id: "5",
      title: "Teste5",
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <ItemContainer>
        <ImgAlbum
          source={{
            uri: "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg",
          }}
        />
        <ItemInfoContainer>
          <ItemInfoTitle>Nome</ItemInfoTitle>
          <ItemInfoData>11/03/2022</ItemInfoData>
        </ItemInfoContainer>
      </ItemContainer>
    );
  };

  return (
    <ScrollView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Separetor />}
        renderItem={(item) => <RenderItem {...item} />}
      />
    </ScrollView>
  );
};

export default ListAudio;
