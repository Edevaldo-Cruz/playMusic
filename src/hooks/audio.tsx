import React, { createContext, useContext, useEffect, useState } from "react";
import { Audio } from "expo-av";
import api from "../services/api";
import ListAudio from "../components/ListAudio";

const AudioContext = createContext({});

const AudioProvider: React.FC = (children) => {
  const [audio, setAudio] = useState();
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    async function loadAudio() {
      //const result = await api.get("/playlist");
      const result = await ListAudio.playlist;

      if (!result.data) {
        return;
      }

      setPlayList(result.data);
    }
    loadAudio();
  }, []);

  return (
    <AudioContext.Provider value={{ audio, playList }}>
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
