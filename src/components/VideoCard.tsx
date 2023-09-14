import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MoreVertical, Ban, X, Clock } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

function VideoCard({ video }: any) {
  return (
    <div>
      <Link
        href={`/video/${video.id.videoId}`}
        className="aspect-video block overflow-hidden relative"
      >
        <Image
          className="absolute top-1/2 -translate-y-1/2"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={video?.snippet?.thumbnails?.high?.url}
          alt="img"
        />
      </Link>
      <div className="flex items-center gap-3 ml-3 mb-4 mt-2">
        <div className="rounded-full overflow-hidden">
          <Image
            src="https://placehold.co/40x40"
            height="40"
            width="40"
            alt="img"
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-sm font-bold ">{video.snippet.title}</h3>
          <div className="text-xs text-gray-600">
            <span>{video.snippet.channelTitle}</span> | <span>2K views</span> |{" "}
            <span>39 minutes ago</span>
          </div>
        </div>

        <Sheet>
          <SheetTrigger className="p-3">
            <MoreVertical />
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetDescription>
                <SheetClose className="w-full text-left flex p-4 items-center gap-3 text-base">
                  <Ban size={24} strokeWidth={1} />
                  Not interested
                </SheetClose>
                <SheetClose className="w-full text-left flex p-4 items-center gap-3 text-base">
                  <X size={24} strokeWidth={1} />
                  Dont recommend channel
                </SheetClose>
                <SheetClose className="w-full text-left flex p-4 items-center gap-3 text-base">
                  <Clock size={24} strokeWidth={1} />
                  Save to Watch later
                </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default VideoCard;
