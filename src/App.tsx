import { useEffect, useState } from "react"
import { Episode as EpisodeType } from "./types";
import { Episode } from "./components";

function App() {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then(res => res.json())
      .then(data => {
        setEpisodes(data.results);
      })
  }, [])

  return (
    <main className="bg-zinc-800 text-zinc-50 grid place-items-center h-screen">
      <ul>
        {episodes.map(episode => <Episode key={episode.id} data={episode} />)}
      </ul>
    </main>
  )
}

export default App
