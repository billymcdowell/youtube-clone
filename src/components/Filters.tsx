import { Compass } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

function Filters() {
  const filters = [
    "All",
    "Gaming",
    "Rugby unions",
    "News",
    "Music",
    "JavaScript",
    "Panel shows",
  ];
  return (
    <>
      <div className="px-3 py-2 flex gap-3 h-12 overflow-scroll no-scrollbar">
        <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 flex justify-center items-center rounded">
          <Compass size={24} strokeWidth={1} />
        </div>
        <Separator orientation="vertical" />
        {filters.map((filter, idx) => (
          <Badge key={idx} variant={filter === "All" ? "active" : "default"}>
            {filter}
          </Badge>
        ))}
      </div>
    </>
  );
}

export default Filters;
