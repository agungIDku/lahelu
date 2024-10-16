import { useState } from "react";

const exampleData = [
  {
    id: 1,
    user: {
      username: "uzikiu_rowi",
      photo: "https://cache.lahelu.com/avatar-UzXZ3cCtG-68712",
    },
    caption: "Lucu banget🥰🥰😍😍",
    type: "video",
    url: "https://cache.lahelu.com/video-Pj2udOw0H-15873",
    tags: ["anime", "cat", "cute"],
    like: 33,
    unlike: 0,
    comment: 3,
    createdAt: "2024-10-13 17:45:00",
  },
  {
    id: 2,
    user: {
      username: "kimo_roki",
      photo: "https://cache.lahelu.com/avatar-UGxyYCeiH-57815",
    },
    caption: "iShow Speed",
    type: "video",
    url: "https://cache.lahelu.com/video-PRl9Z4p94-72019",
    tags: ["good", "cute"],
    like: 22,
    unlike: 0,
    comment: 1,
    createdAt: "2024-10-12 17:45:00",
  },
  {
    id: 3,
    user: {
      username: "uzikiu_rowi",
      photo: "https://cache.lahelu.com/avatar-UzXZ3cCtG-68712",
    },
    caption: "Lucu banget🥰🥰😍😍",
    type: "video",
    url: "https://cache.lahelu.com/video-Pj2udOw0H-15873",
    tags: ["anime", "cat", "cute"],
    like: 33,
    unlike: 0,
    comment: 3,
    createdAt: "2024-10-13 17:45:00",
  },
];

function usePost() {
  const [data, setData] = useState([...exampleData]);
  const [playIndex, setPlayIndex] = useState(0);

  const handleLoadMore = () => {
    const newData = [...exampleData].map((el, index) => ({
      ...el,
      id: data.length + 1 + index,
    }));

    setData((prev) => [...prev, ...newData]);
  };

  return { data, handleLoadMore, playIndex, setPlayIndex };
}

export default usePost;
