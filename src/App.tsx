import { useEffect, useState } from "react"
import { Episode } from "./types";

function App() {
  const [, setEpisodes] = useState<Episode[]>([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then(res => res.json())
      .then(data => {
        setEpisodes(data.results);
      })
  }, [])

  return (
    <main className="bg-zinc-800 text-zinc-50 grid place-items-center h-screen">
      Hello
    </main>
  )
}

export default App
