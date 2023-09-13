import React from "react";
import Spinner from "@/components/ui/spinner";

function loading() {
  return (
    <div className="w-full h-full flex flex-grow items-center justify-center">
      <Spinner />
    </div>
  );
}

export default loading;
