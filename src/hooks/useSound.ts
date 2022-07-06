import { useState, useEffect } from "react";

export const useSound = (url:string, volume:number) => {
  const [ audio ] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const play = () => setPlaying(true);

  const pause = () => setPlaying(false);

  useEffect(() => {
    audio.volume = volume;
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return { playing, play, pause };
};