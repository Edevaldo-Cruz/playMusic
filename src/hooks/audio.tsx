import React, { createContext, useContext, useEffect, useState } from "react";
import { Audio } from "expo-av";
import api from "../services/api";

const AudioContext = createContext({});

const AudioProvider: React.FC = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
  const [currentAudioInfo, setCurrentAudioInfo] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [position, setPosition] = useState(-1);

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

  const handleNext = async () => {
    if (isPlay) {
      await currentAudio.pauseAsync();
      setPosition(position + 1);
      setCurrentAudioInfo(playlist[position]);
      setIsPlay(false);
    } else {
      setPosition(position + 1);
      setCurrentAudioInfo(playlist[position]);
    }
  };

  const handleBack = async () => {
    setPosition(position - 1);
    setCurrentAudioInfo(playlist[position]);
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
