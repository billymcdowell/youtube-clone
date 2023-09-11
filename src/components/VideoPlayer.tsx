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
        <ReactPlayer url={`<https://www.youtube.com/watch?v=${id}>`} controls />
      ) : null}
    </>
  );
}
