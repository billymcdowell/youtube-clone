"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

function SearchInput({ onChange, onSubmit, ...props }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form onSubmit={(e) => onSubmit(e)} {...props}>
      <div className="w-full items-center flex justify-end">
        {isOpen ? (
          <div className="w-full items-center flex rounded-lg bg-gray-200 dark:bg-gray-700 focus-visible:ring-2 focus-visible:ring-offset-2">
            <Input
              autoFocus
              className="border-none ring-offset-none bg-transparent focus-visible:ring-none focus-visible:ring-0 ring-transparent focus-visible:ring-offset-0"
              type="text"
              placeholder="Search"
              onChange={(e) => onChange(e)}
            />
            <button type="submit" className="p-1">
              <Search size={24} strokeWidth={1} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-1">
              <X size={24} strokeWidth={1} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-3"
          >
            <Search size={24} strokeWidth={1} />
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchInput;
