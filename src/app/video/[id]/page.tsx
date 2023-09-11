import { fetchFromAPI } from "@/utils/fetchFromApi";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Video({ params }: any) {
  const { items } = await fetchFromAPI(
    `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${params.id}`
  );
  console.log(items[0]);
  return (
    <>
      <VideoPlayer id={params.id} />
      <h1>{items[0]?.snippet.title}</h1>
    </>
  );
}
