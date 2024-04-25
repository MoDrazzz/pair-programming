import { Episode as EpisodeType } from "./types";
import { Episode } from "./components";
import { useQuery } from "@tanstack/react-query";

const getEpisodes = async () => {
  const request = await fetch("https://rickandmortyapi.com/api/episode")
  const data = await request.json()

  return data.results as EpisodeType[]
}

function App() {
  const { data: episodes } = useQuery({ queryKey: ['episodes'], queryFn: getEpisodes })

  if(!episodes) {
    return <h1>Loading...</h1>
  }

  return (
    <main className="bg-zinc-800 text-zinc-50 grid place-items-center h-screen">
      <ul>
        {episodes.map(episode => <Episode key={episode.id} data={episode} />)}
      </ul>
    </main>
  )
}

export default App
