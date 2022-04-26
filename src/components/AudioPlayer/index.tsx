import React, { useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  Container,
  ButtonAction,
  Content,
  Info,
  Album,
  ContainerText,
  Title,
  Author,
} from "./styles";
import { useAudio } from "../../hooks/audio";

const AudioPlayer: React.FC = ({ handleToggleList }) => {
  const [like, setLike] = useState(false);
  const { isPlay, handleToggleAudio, currentAudioInfo, playlist } = useAudio();

  return (
    <Container
      style={{ backgroundColor: currentAudioInfo?.color || "#FFFFFF" }}
    >
      <Content>
        <Info>
          <Album
            source={{
              uri:
                currentAudioInfo?.imageSource ||
                "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg",
            }}
          />
          <ContainerText onPress={handleToggleList}>
            {(currentAudioInfo && (
              <Title style={{ color: "#FFFFFF" }}>
                {currentAudioInfo?.title}
              </Title>
            )) || (
              <Title style={{ color: "#000000" }}>Selecione um audio</Title>
            )}
            {(currentAudioInfo && (
              <Author style={{ color: "#FFFFFF" }}>
                {currentAudioInfo?.author}
              </Author>
            )) || <Author style={{ color: "#000000" }}>...</Author>}
          </ContainerText>
        </Info>
        <ButtonAction primary onPress={() => setLike(!like)}>
          {(currentAudioInfo &&
            ((like && <AntDesign name="heart" size={20} color="green" />) || (
              <AntDesign name="hearto" size={20} color="white" />
            ))) || <AntDesign name="hearto" size={20} color="black" />}
        </ButtonAction>
        <ButtonAction primary onPress={handleToggleAudio}>
          {(currentAudioInfo && (
            <MaterialIcons
              name={isPlay ? "pause" : "play-arrow"}
              size={32}
              color="white"
            />
          )) || (
            <MaterialIcons
              name={isPlay ? "pause" : "play-arrow"}
              size={32}
              color="black"
            />
          )}
        </ButtonAction>
      </Content>
    </Container>
  );
};

export default AudioPlayer;
