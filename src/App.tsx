import { Episode } from "./types";
import { EpisodeItem } from "./components";
import { useQuery } from "@tanstack/react-query";

const getEpisodes = async () => {
  const request = await fetch("https://rickandmortyapi.com/api/episode")
  const data = await request.json()

  return data.results as Episode[]
}

function App() {
  const { data: episodes } = useQuery({ queryKey: ['episodes'], queryFn: getEpisodes })

  if(!episodes) {
    return <h1>Loading...</h1>
  }

  return (
    <main className="bg-zinc-800 text-zinc-50 grid place-items-center h-screen">
      <ul>
        {episodes.map(episode => <EpisodeItem key={episode.id} data={episode} />)}
      </ul>
    </main>
  )
}

export default App
