import { EpisodeItem } from "./components";
import { useQuery } from "@tanstack/react-query";
import { EpisodesResponse } from "./types/EpisodesResponse";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const getEpisodes = async (page: string) => {
  const request = await fetch("https://rickandmortyapi.com/api/episode?page=" + page)
  const data = await request.json()

  return data as EpisodesResponse
}

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1'

  const { data, refetch, isLoading } = useQuery<EpisodesResponse>({ queryKey: ['episodes'], queryFn: () => getEpisodes(currentPage) })

  const handlePreviousPage = () => {
    setSearchParams({ page: `${parseInt(currentPage)-1}` })
  }
  const handleNextPage = () => {
    setSearchParams({ page: `${parseInt(currentPage)+1}` })
  }

  useEffect(() => {
    refetch()
  }, [searchParams, refetch])

  if(isLoading || !data) {
    return <h1>Loading...</h1>
  }

  return (
    <main className="bg-zinc-800 text-zinc-50 grid place-items-center h-screen">
      <ul>
        {data.results.map(episode => <EpisodeItem key={episode.id} data={episode} />)}
      </ul>
      <div className="flex gap-3">
      <button disabled={!data.info.prev} onClick={handlePreviousPage}>Previous</button>
      <span>{currentPage}</span>
      <button disabled={!data.info.next} onClick={handleNextPage}>Next</button>
      </div>
    </main>
  )
}

export default App
