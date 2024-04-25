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

  if(!episodeData) {
    return <h1>Loading...</h1>
  }

  const episodeDate = new Date(episodeData.created).toLocaleString('en-us');

  return (
    <main className="grid place-items-center h-screen">
      <div>
      <h1>Episode {episodeData?.name}</h1>
      <ul>
        <li><strong>Air Date:</strong> {episodeData.air_date}</li>
        <li><strong>Episode:</strong> {episodeData.episode}</li>
        <li><strong>Created:</strong> {episodeDate}</li>
      </ul>
      </div>
    </main>
  )
};

export default EpisodePage;