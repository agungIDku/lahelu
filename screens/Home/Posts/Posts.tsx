import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Campaign from "@/components/Campaign";
import { Other } from "@/components/icons";
import VideoPlayer from "@/components/VideoPlayer";

import usePost from "./usePost";

dayjs.extend(relativeTime);

function Posts() {
  const { data, handleLoadMore, playIndex, setPlayIndex } = usePost();

  return (
    <View style={styles.container}>
      <View style={styles.containerCampaign}>
        <Campaign
          icon="💰"
          content="Kamu punya teman? Sini dapatkan koin gratis!"
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => (
          <View style={styles.containerItem}>
            <View style={styles.containerHead}>
              <View style={styles.containerProfile}>
                <Image
                  source={{ uri: item.user.photo }}
                  style={styles.photoProfile}
                />
                <View style={styles.containerUsername}>
                  <Text style={styles.username}>{item.user.username}</Text>
                  <View style={styles.containerDate}>
                    <View style={styles.dot} />
                    <Text style={styles.createdAt}>
                      {dayjs(item.createdAt).fromNow()}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <Other />
              </TouchableOpacity>
            </View>
            <View style={styles.containerCaption}>
              <Text style={styles.caption}>{item.caption}</Text>
            </View>
            <View>
              {item.type === "video" ? (
                <VideoPlayer
                  isPlaying={index === playIndex}
                  index={index}
                  setPlayIndex={setPlayIndex}
                  uri={item.url}
                />
              ) : (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.url }} style={styles.image} />
                </View>
              )}
            </View>
            <View style={styles.containerTags}>
              {item.tags.map((el) => (
                <View style={styles.containerTagsItem}>
                  <Text style={styles.tagText}>#{el}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  containerCampaign: {
    padding: 16,
  },
  containerCaption: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  containerHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  containerProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  containerUsername: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  createdAt: {
    color: "silver",
    fontSize: 12,
  },
  photoProfile: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  username: {
    color: "#e4e4e4",
    fontSize: 12,
    fontWeight: "700",
  },
  containerDate: {
    position: "relative",
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 2,
    backgroundColor: "silver",
    position: "absolute",
    left: -8,
    top: 8,
  },
  caption: {
    color: "#e4e4e4",
    fontWeight: "600",
  },
  imageContainer: {
    width: Dimensions.get("window").width,
    aspectRatio: 16 / 9,
    backgroundColor: "#333333",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  containerTagsItem: {
    borderWidth: 1,
    borderColor: "#414141",
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  containerTags: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 16,
    position: "relative",
    top: -6,
  },
  tagText: {
    color: "#e4e4e4",
    fontWeight: "700",
  },
});

export default Posts;
