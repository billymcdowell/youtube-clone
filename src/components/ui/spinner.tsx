import React from "react";
import { Loader2 } from "lucide-react";

function spinner() {
  const Icons = {
    spinner: Loader2,
  };
  return <Icons.spinner className="h-12 w-12 animate-spin" />;
}

export default spinner;
