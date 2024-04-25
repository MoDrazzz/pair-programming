import { useLoaderData } from "react-router-dom";
import { Episode } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchMainCharacters } from "../lib";

type EpisodeDataProps = {
  data: Episode
}

const EpisodeData = ({ data }: EpisodeDataProps) => {
  const { data: mainCharacters } = useQuery({ queryKey: ['mainCharacters'], queryFn: () => fetchMainCharacters(data.characters) })

  const episodeDate = new Date(data.created).toLocaleString('en-us');

  return (
  <ul>
    <li><strong>Air Date:</strong> {data.air_date}</li>
    <li><strong>Episode:</strong> {data.episode}</li>
    <li><strong>Created:</strong> {episodeDate}</li>
    <li><strong>Main Characters:</strong>
      <div className="flex gap-4">
        {mainCharacters ? mainCharacters.map(character => <img key={character.id} src={character.image} />) : <p>Characters loading...</p>}
      </div>
    </li>
  </ul>
  )
}

const EpisodePage = () => {
  const episodeData = useLoaderData() as Episode

  return (
    <main className="grid place-items-center h-screen">
      <div>
      <h1>Episode {episodeData.name}</h1>
      <EpisodeData data={episodeData} />
      </div>
    </main>
  )
};

export default EpisodePage;