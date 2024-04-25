import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode as EpisodeType } from "../types";

const EpisodePage = () => {
  const { episodeId } = useParams();
  const [episodeData, setEpisodeData] = useState<null|EpisodeType>(null)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + episodeId)
    .then(res => res.json())
    .then(data => setEpisodeData(data))
  }, [episodeId])

  return (
    <main className="grid place-items-center h-screen">
      <h1>Episode {episodeData?.name}</h1>
    </main>
  )
};

export default EpisodePage;