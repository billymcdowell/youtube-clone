import Filters from "@/components/Filters";
import NavBar from "@/components/NavBar";
import Feed from "@/components/Feed";
import { fetchFromAPI } from "@/utils/fetchFromApi";

export default async function Search({ searchParams }: any) {
  const videos = await fetchFromAPI(
    `search?part=snippet&q=${searchParams.query}`
  );

  return (
    <>
      <main>
        <div className="flex px-3 py-3 gap-2 items-center">
          <p className="text-sm text-gray-500"> Showing results for: </p>
          <h3 className="text-lg">{searchParams.query}</h3>
        </div>
        <Feed videos={videos.items} />
      </main>
    </>
  );
}
