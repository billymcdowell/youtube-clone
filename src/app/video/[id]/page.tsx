import { fetchFromAPI } from "@/utils/fetchFromApi";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Video({ params }: any) {
  const { items } = await fetchFromAPI(
    `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${params.id}`
  );

  if (!items) return;

  return (
    <>
      <VideoPlayer id={items[0]?.id} />
      <h1>{items[0]?.snippet.title}</h1>
    </>
  );
}
