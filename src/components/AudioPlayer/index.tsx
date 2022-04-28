import React, { useState, useRef, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
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
import LottieView from "lottie-react-native";

const AudioPlayer: React.FC = ({ handleToggleList }) => {
  const [like, setLike] = useState(false);
  const firstRun = useRef(true);
  const animation = useRef(null);

  const { isPlay, handleToggleAudio, currentAudioInfo } = useAudio();

  useEffect(() => {
    if (currentAudioInfo) {
      if (firstRun.current) {
        if (like) {
          animation.current.play(71, 71);
        } else {
          animation.current.play(2, 2);
        }
        firstRun.current = false;
      } else if (like) {
        animation.current.play(0, 70);
      } else {
        animation.current.play(71, 130);
      }
    }
  }, [like]);

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
          <LottieView
            source={require("../../assets/icon/likeDislike.json")}
            autoPlay={false}
            loop={false}
            style={{ with: 60, height: 60 }}
            resizeMode="cover"
            ref={animation}
          />
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
