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
  const [like, setLike] = useState();
  const { isPlay, handleToggleAudio, currentAudioInfo } = useAudio();
  return (
    <Container>
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
            <Title>{currentAudioInfo?.title || "Selecione um audio"}</Title>
            <Author>{currentAudioInfo?.author || "..."}</Author>
          </ContainerText>
        </Info>
        <ButtonAction primary onPress={() => setLike(!like)}>
          <AntDesign name={like ? "hearto" : "heart"} size={20} color="black" />
        </ButtonAction>
        <ButtonAction primary onPress={handleToggleAudio}>
          <MaterialIcons
            name={isPlay ? "pause" : "play-arrow"}
            size={32}
            color="black"
          />
        </ButtonAction>
      </Content>
    </Container>
  );
};

export default AudioPlayer;
