import React, { createContext, useContext, useEffect, useState } from "react";
import { Audio } from "expo-av";
import api from "../services/api";
import { Alert, ToastAndroid } from "react-native";

const AudioContext = createContext({});

const AudioProvider: React.FC = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
  const [currentAudioInfo, setCurrentAudioInfo] = useState();
  const [playlist, setPlaylist] = useState([]);
  const [position, setPosition] = useState(0);

  const playSong = async (source, autoPlay = false) => {
    if (currentAudio) {
      await currentAudio.unloadAsync();
    }
    setCurrentAudioInfo(source);

    const { sound } = await Audio.Sound.createAsync({
      uri: source.uri,
    });

    setCurrentAudio(sound);

    if (autoPlay) {
      setIsPlay(true);
      await sound.playAsync();
    }
    return;
  };

  const handleToggleAudio = async () => {
    if (isPlay) {
      await currentAudio.pauseAsync();
    } else {
      await currentAudio.playAsync();
    }
    setIsPlay((prev) => !prev);
  };

  /**
   *  1 - Se estiver tocando pare de tocar, passe para outra musica e comece a tocar.
   *  2- Se não estiver tocando, passe para outra musica e não comece a trocar
   *
   *  Obter o indice de um array
   *
   *  https://acervolima.com/como-obter-o-indice-do-objeto-dentro-de-um-array-que-corresponda-a-condicao-em-jquery/
   *
   */

  const handleNext = async () => {
    if (isPlay === false) {
      setPosition(position + 1);
      setCurrentAudioInfo(playlist[position]);
      const { sound } = await Audio.Sound.createAsync({
        uri: playlist[position + 1].uri,
      });

      setCurrentAudio(sound);
      ToastAndroid.showWithGravity(
        "Primeiro",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      setPosition(0);
      setCurrentAudioInfo(playlist[position]);
      const { sound } = await Audio.Sound.createAsync({
        uri: playlist[position + 1].uri,
      });
      await playlist[position + 1].stopAsync();
      await playlist[position + 1].playAsync();
      ToastAndroid.showWithGravity(
        "segundo",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }

    setCurrentAudio(sound);
  };

  const handleBack = async () => {
    if (playlist[position]) {
      setPosition(position - 1);
      setCurrentAudioInfo(playlist[position]);

      const { sound } = await Audio.Sound.createAsync({
        uri: playlist[position].uri,
      });

      setCurrentAudio(sound);
    } else {
      setPosition(0);
      setCurrentAudioInfo(playlist[position]);

      const { sound } = await Audio.Sound.createAsync({
        uri: currentAudioInfo.uri,
      });
    }

    setCurrentAudio(sound);
  };

  useEffect(() => {
    async function loadAudio() {
      const result = await api.get("/db.json");

      if (!result.data.playlist) {
        return;
      }
      setPlaylist(result.data.playlist);
    }

    loadAudio();
  }, []);

  return (
    <AudioContext.Provider
      value={{
        currentAudioInfo,
        playlist,
        handleToggleAudio,
        playSong,
        isPlay,
        currentAudio,
        handleNext,
        handleBack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("Informe dentro do contexto");
  return context;
};

export { AudioProvider, useAudio };
