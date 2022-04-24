import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useAudio } from "../../hooks/audio";
import {
  Entypo,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  ContainerScrollView,
  SubTitleAudio,
  ContainerMusicNow,
  TitleAudio,
  StandardTitle,
  ContainerText,
  ContainerItem,
  ImgAlbum,
  ContainerIcons,
  BtnPlayPause,
  Separetor,
} from "./styles";

const ModalList: React.FC = () => {
  const { isPlay, handleToggleAudio, currentAudioInfo, playlist, playSong } =
    useAudio();

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => playSong(item, true)}>
        <ContainerItem>
          <Entypo name="circle" size={16} color="#4F4F4F" />
          <ContainerText>
            <TitleAudio>{item.title}</TitleAudio>
            <SubTitleAudio>{item.author}</SubTitleAudio>
          </ContainerText>
          <SimpleLineIcons name="menu" size={16} color="white" />
        </ContainerItem>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ContainerScrollView>
        <StandardTitle>Tocando agora</StandardTitle>
        <ContainerMusicNow>
          <ImgAlbum
            source={{
              uri:
                currentAudioInfo?.imageSource ||
                "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg",
            }}
          />
          <View>
            <TitleAudio>
              {currentAudioInfo?.title || "Selecione um audio"}
            </TitleAudio>
            <SubTitleAudio>
              {currentAudioInfo?.author || "  ...  "}
            </SubTitleAudio>
          </View>
        </ContainerMusicNow>
        <StandardTitle>Proximas de: Músicas curtidas</StandardTitle>
        <FlatList
          data={playlist}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <RenderItem {...item} />}
        />
      </ContainerScrollView>
      <Separetor />
      <ContainerIcons>
        <TouchableOpacity>
          <AntDesign name="stepbackward" size={24} color="white" />
        </TouchableOpacity>
        <BtnPlayPause primary onPress={handleToggleAudio}>
          <MaterialIcons
            name={isPlay ? "pause" : "play-arrow"}
            size={55}
            color="black"
          />
        </BtnPlayPause>
        <TouchableOpacity>
          <AntDesign name="stepforward" size={24} color="white" />
        </TouchableOpacity>
      </ContainerIcons>
    </>
  );
};

export default ModalList;
