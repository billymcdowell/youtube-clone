import Filters from "@/components/Filters";
import Feed from "@/components/Feed";
import { fetchFromAPI } from "@/utils/fetchFromApi";

export default async function Home() {
  const videos = await fetchFromAPI(`search?part=snippet&q=all`);

  return (
    <>
      <main>
        <Filters />
        <Feed videos={videos.items} />
      </main>
    </>
  );
}
