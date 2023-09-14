import { fetchFromAPI } from "@/utils/fetchFromApi";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import moment from "moment";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Flag, Forward, Plus, Share, ThumbsDown, ThumbsUp } from "lucide-react";
import formattedCount from "@/utils/formattedCount";
import Suggested from "@/components/Suggested";

export default async function Video({ params }: any) {
  const data: any = await Promise.all([
    fetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${params.id}`
    ),
  ]);

  const channelData = await fetchFromAPI(
    `channels?id=${data[0].items[0].snippet.channelId}`
  );

  const suggestedData = await fetchFromAPI(
    `search?part=snippet&relatedToVideoId=${params.id}`
  );

  return (
    <>
      <div className="sticky top-0">
        <VideoPlayer id={data[0].items[0]?.id} />
      </div>
      <div>
        <h1 className="font-extrabold text-lg leading-[26px] px-4 pt-4">
          {data[0].items[0]?.snippet.title}
        </h1>
        <div className="flex gap-4 text-xs text-gray-600 pt-1 pb-2 px-4">
          <p>
            {`${formattedCount(data[0].items[0].statistics.viewCount)} views`} ·{" "}
            {moment(
              data[0].items[0]?.snippet.publishedAt,
              "YYYYMMDD"
            ).fromNow()}
            <span className="font-bold text-gray-900"> ...more</span>
          </p>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 gap-3">
        <div className="rounded-full overflow-hidden">
          <Image
            src={channelData.items[0].snippet.thumbnails.default.url}
            height="34"
            width="34"
            alt="img"
          />
        </div>

        <div className="flex gap-2">
          <h3 className="text-sm font-semibold ">
            {channelData.items[0].snippet.title}
          </h3>
          <span className="text-xs text-gray-600 leading-5">
            {formattedCount(channelData.items[0].statistics.subscriberCount)}
          </span>
        </div>
        <div className="flex-grow flex justify-end">
          <Button>Subscribe</Button>
        </div>
      </div>
      <div className="px-4 py-2 flex gap-2 overflow-x-scroll no-scrollbar">
        <Button
          variant="secondary"
          className="flex items-center gap-2 rounded-r-0"
        >
          <ThumbsUp size={24} strokeWidth={1} />
          {formattedCount(data[0].items[0].statistics.likeCount)}
        </Button>

        <Button variant="secondary" className="rounded-l-0">
          <ThumbsDown size={24} strokeWidth={1} />
        </Button>

        <Button variant="secondary" className="flex items-center gap-2">
          <Forward size={24} strokeWidth={1} />
          Share
        </Button>
        <Button variant="secondary" className="flex items-center gap-2">
          <Plus size={24} strokeWidth={1} />
          Save
        </Button>
        <Button variant="secondary" className="flex items-center gap-2">
          <Flag size={24} strokeWidth={1} />
          Report
        </Button>
        {/* {JSON.stringify(data[0].items[0])} */}
      </div>
      <div>
        <div className="px-4 pt-2 pb-3">
          <p className="p-3 rounded bg-gray-400">
            Comments {data[0].items[0].statistics.commentCount}
          </p>
        </div>
      </div>
      <div>
        <Suggested videos={suggestedData.items} />
      </div>
    </>
  );
}
