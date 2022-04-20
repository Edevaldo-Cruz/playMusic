import React from "react";
import {
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
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
  const { playlist, playSong } = useAudio();

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => playSong(item, true)}>
        <ItemContainer>
          <ImgAlbum
            source={{
              uri: item.imageSource,
            }}
          />
          <ItemInfoContainer>
            <ItemInfoTitle>{item.title}</ItemInfoTitle>
            <ItemInfoData>{item.author}</ItemInfoData>
          </ItemInfoContainer>
        </ItemContainer>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <FlatList
        data={playlist}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Separetor />}
        renderItem={(item) => <RenderItem {...item} />}
      />
    </ScrollView>
  );
};

export default ListAudio;
