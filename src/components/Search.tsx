"use client";

import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { useRouter } from "next/navigation";

function Search() {
  const [value, setValue] = useState<null | string>(null);

  const router = useRouter();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted:", value);
    return router.push(`/search?query=${value}`);
  };
  return (
    <SearchInput
      className="flex flex-grow items-center justify-end"
      onSubmit={(e: React.FormEvent) => handleSearchSubmit(e)}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleValueChange(e)
      }
    />
  );
}

export default Search;
