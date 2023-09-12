import { fetchFromAPI } from "@/utils/fetchFromApi";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Video({ params }: any) {
  const { items } = await fetchFromAPI(
    `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${params.id}`
  );

  if (!items[0]) return "loading...";
  console.log(items[0]);

  const viewCount = (num: number) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol
      : "0";
  };

  const diff_minutes = (dt: Date) => {
    const publishedAt = new Date(dt);
    const today = new Date();
    // let diff = (today.getTime() - publishedAt.getTime()) / 1000;
    // diff /= 60;
    // diff /= 60;
    let diff = publishedAt;
    return Math.abs(Math.round(diff));
  };

  return (
    <>
      <div className="sticky top-0 aspect-video">
        <VideoPlayer id={items[0]?.id} />
      </div>
      <div className="p-4">
        <h1 className="font-extrabold text-lg">{items[0]?.snippet.title}</h1>
        <div className="flex gap-4">
          {" "}
          <p className="text-xs text-gray-600">
            {`${viewCount(items[0]?.statistics.viewCount)} views`}
          </p>
          <p className="text-xs text-gray-600">
            {items[0]?.snippet.publishedAt}
          </p>
        </div>
      </div>
    </>
  );
}
