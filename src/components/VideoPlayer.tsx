"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ id }: any) {
  return <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />;
}
