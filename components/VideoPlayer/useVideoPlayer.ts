import { useState, useRef, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Video } from "expo-av";

export interface VideoPlayerInterface {
  uri: string;
  isPlaying: boolean;
  index: number;
  setPlayIndex: (val: number) => void;
}

function useVideoPlayer({
  isPlaying,
  setPlayIndex,
  index,
}: VideoPlayerInterface) {
  const [currentMili, setCurrentMili] = useState(0);
  const videoRef = useRef<Video | null>(null);
  const [status, setStatus] = useState<any>({});

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && isPlaying) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }

    if (!isFocused && isPlaying) {
      setPlayIndex(index + 1);
    }
  }, [isFocused, isPlaying]);

  const handleMuted = () => {
    if (status.isMuted) {
      videoRef.current?.setIsMutedAsync(false);
    } else {
      videoRef.current?.setIsMutedAsync(true);
    }
  };

  const handlePlayPause = () => {
    if (status.isPlaying) {
      videoRef.current?.pauseAsync();
    } else {
      setPlayIndex(index);
      videoRef.current?.playAsync();
    }
  };

  return {
    handleMuted,
    handlePlayPause,
    currentMili,
    setCurrentMili,
    setStatus,
    status,
    videoRef,
  };
}

export default useVideoPlayer;
