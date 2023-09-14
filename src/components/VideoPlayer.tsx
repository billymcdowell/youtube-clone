"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ id }: any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-[220px]">
      {isClient ? (
        <ReactPlayer
          className="aspect-video"
          autoPlay
          controls={true}
          playing={true}
          style={{ overflow: "hidden" }}
          width={"100%"}
          height={"100%"}
          url={id ? `https://www.youtube-nocookie.com/embed/${id}` : ""}
        />
      ) : null}
    </div>
  );
}
