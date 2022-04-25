import React, { useState, createRef } from "react";
import ActionSheet from "react-native-actions-sheet";
import { TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { useAudio } from "../../hooks/audio";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
  Feather,
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
  ContainerIncosToShare,
  Icons,
} from "./styles";
import ModalList from "../ModalList";

const ListAudio: React.FC = ({ handleToggleList }) => {
  const { currentAudioInfo, isPlay, handleToggleAudio } = useAudio();
  const [like, setLike] = useState(false);
  const [btnRandom, setBtnRadom] = useState(false);
  const [btnRetweet, setBtnRetweet] = useState(false);
  const actionSheetRef = createRef();

  const handleToggleModalList = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <Container>
      <LinearGradient colors={[currentAudioInfo?.color, "#121212"]}>
        <HeaderModal>
          <TouchableOpacity onPress={handleToggleList}>
            <AntDesign name="down" size={24} color="white" />
          </TouchableOpacity>
          <ContainerTextHeader>
            <TitleHeader> TOCANDO DA SUA BIBLIOTECA</TitleHeader>
            <SubTitleHeader> Musicas Curtidas</SubTitleHeader>
          </ContainerTextHeader>
          <TouchableOpacity onPress={handleToggleModalList}>
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
            <AntDesign
              name={like ? "heart" : "hearto"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </InfoAudio>

        <ContainerIcons>
          <TouchableOpacity onPress={() => setBtnRadom(!btnRandom)}>
            {(btnRandom && (
              <FontAwesome name="random" size={24} color="green" />
            )) || <FontAwesome name="random" size={24} color="white" />}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggleModalList}>
            <AntDesign name="stepbackward" size={24} color="white" />
          </TouchableOpacity>
          <BtnPlayPause primary onPress={handleToggleAudio}>
            <MaterialIcons
              name={isPlay ? "pause" : "play-arrow"}
              size={55}
              color="black"
            />
          </BtnPlayPause>
          <TouchableOpacity onPress={handleToggleModalList}>
            <AntDesign name="stepforward" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBtnRetweet(!btnRetweet)}>
            {(btnRetweet && (
              <FontAwesome name="retweet" size={24} color="green" />
            )) || <FontAwesome name="retweet" size={24} color="white" />}
          </TouchableOpacity>
        </ContainerIcons>

        <ContainerIncosToShare>
          <Icons>
            <MaterialIcons name="devices" size={18} color="white" />
          </Icons>
          <Feather name="share-2" size={18} color="white" />
          <Entypo name="menu" size={18} color="white" />
        </ContainerIncosToShare>

        <ActionSheet
          ref={actionSheetRef}
          containerStyle={{
            height: Dimensions.get("screen").height,
            backgroundColor: "#121212",
          }}
        >
          <ModalList handleToggleModalList={handleToggleModalList} />
        </ActionSheet>
      </LinearGradient>
    </Container>
  );
};

export default ListAudio;
