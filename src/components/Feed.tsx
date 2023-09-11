import React from "react";
import VideoCard from "@/components/VideoCard";

function Feed({ videos }: any) {
  return (
    <>
      {videos.map((video: any, idx: any) => (
        <VideoCard key={idx} video={video} />
      ))}
    </>
  );
}

export default Feed;
