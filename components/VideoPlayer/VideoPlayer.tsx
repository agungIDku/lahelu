import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import { Video, ResizeMode } from "expo-av";
import Slider from "@react-native-community/slider";

import { Play, Unmuted, Muted } from "../icons";
import useVideoPlayer, { VideoPlayerInterface } from "./useVideoPlayer";

const VideoPlayer = ({
  uri,
  isPlaying,
  setPlayIndex,
  index,
}: VideoPlayerInterface) => {
  const {
    handleMuted,
    handlePlayPause,
    currentMili,
    setCurrentMili,
    setStatus,
    status,
    videoRef,
  } = useVideoPlayer({
    uri,
    isPlaying,
    setPlayIndex,
    index,
  });

  return (
    <View style={styles.container}>
      {!status.isPlaying && (
        <Pressable onPress={handlePlayPause} style={styles.containerPlay}>
          <Play />
        </Pressable>
      )}

      <Pressable onPress={handlePlayPause} style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri }}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          positionMillis={currentMili}
          isLooping
        />
      </Pressable>

      <Pressable onPress={handleMuted} style={styles.containerMute}>
        {status.isMuted ? <Muted /> : <Unmuted />}
      </Pressable>

      <Slider
        style={styles.slider}
        value={status.positionMillis / status.durationMillis}
        thumbTintColor="transparent"
        maximumTrackTintColor="#65a4ec"
        minimumTrackTintColor="#65a4ec"
        onValueChange={(value) => setCurrentMili(value * status.durationMillis)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  videoContainer: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").width * 9) / 16,
    backgroundColor: "#333333",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  slider: {
    width: Dimensions.get("window").width + 32,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    left: -16,
    top: -8,
  },
  containerPlay: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    zIndex: 1000,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
  containerMute: {
    width: 27,
    height: 27,
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    right: 12,
    bottom: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default VideoPlayer;
