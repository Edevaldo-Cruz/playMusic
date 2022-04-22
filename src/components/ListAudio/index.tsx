import React, { useState, createRef } from "react";
import ActionSheet from "react-native-actions-sheet";
import { TouchableOpacity, Dimensions } from "react-native";
import { useAudio } from "../../hooks/audio";

import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  Container,
  HeaderModal,
  ContainerTextHeader,
  TitleHeader,
  SubTitleHeader,
  InfoAudio,
  ContainerTextInfo,
  TitleAudio,
  SubTitleAudio,
  ImgAlbum,
  ContainerIcons,
  BtnPlayPause,
  ContainerImage,
} from "./styles";
import ModalList from "../ModalList";

const ListAudio: React.FC = () => {
  const { playlist, playSong, currentAudioInfo, isPlay } = useAudio();
  const [like, setLike] = useState(false);
  const actionSheetRef = createRef();

  const handleToggleList = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <Container>
      <HeaderModal>
        <TouchableOpacity>
          <AntDesign name="down" size={24} color="white" />
        </TouchableOpacity>
        <ContainerTextHeader>
          <TitleHeader> TOCANDO DA SUA BIBLIOTECA</TitleHeader>
          <SubTitleHeader> Musicas Curtidas</SubTitleHeader>
        </ContainerTextHeader>
        <TouchableOpacity onPress={handleToggleList}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </HeaderModal>
      <ContainerImage>
        <ImgAlbum
          source={{
            uri:
              currentAudioInfo?.imageSource ||
              "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg",
          }}
        />
      </ContainerImage>
      <InfoAudio>
        <ContainerTextInfo>
          <TitleAudio>
            {currentAudioInfo?.title || "Selecione um audio"}
          </TitleAudio>
          <SubTitleAudio> {currentAudioInfo?.author || "    "}</SubTitleAudio>
        </ContainerTextInfo>
        <TouchableOpacity onPress={() => setLike(!like)}>
          <AntDesign name={like ? "heart" : "hearto"} size={20} color="white" />
        </TouchableOpacity>
      </InfoAudio>
      <ContainerIcons>
        <TouchableOpacity>
          <FontAwesome name="random" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="stepbackward" size={24} color="white" />
        </TouchableOpacity>
        <BtnPlayPause>
          <MaterialIcons
            name={isPlay ? "pause" : "play-arrow"}
            size={55}
            color="black"
          />
        </BtnPlayPause>
        <TouchableOpacity>
          <AntDesign name="stepforward" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="retweet" size={24} color="white" />
        </TouchableOpacity>
      </ContainerIcons>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          height: Dimensions.get("screen").height,
          backgroundColor: "#121212",
        }}
      >
        <ModalList />
      </ActionSheet>
    </Container>
  );
};

export default ListAudio;
function goBack(): void {
  throw new Error("Function not implemented.");
}
