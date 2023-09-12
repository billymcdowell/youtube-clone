"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ id }: any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <ReactPlayer
          autoPlay
          controls={true}
          style={{ borderRadius: "1rem", overflow: "hidden" }}
          width={"100%"}
          height={"220px"}
          url={id ? `https://www.youtube-nocookie.com/embed/${id}` : ""}
        />
      ) : null}
    </>
  );
}
