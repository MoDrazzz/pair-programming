import { useParams } from "react-router-dom";
import { Characters, Episode } from "../types";
import { useQuery } from "@tanstack/react-query";

type EpisodeDataProps = {
  data: Episode
}

const fetchMainCharacters = async (characters: string[]) => {
  const mainCharacters = characters.slice(0, 3)
  const mainCharactersIds = mainCharacters.map(url => {
    const urlParts = url.split('/')

    return urlParts[urlParts.length - 1];
  })

  const request = await fetch("https://rickandmortyapi.com/api/character/" + mainCharactersIds.join(","))
  const data = await request.json()

  return data as Characters[]
}

const getEpisode = async (id: string) => {
  const request = await fetch("https://rickandmortyapi.com/api/episode/" + id)
  const data = await request.json()

  return data as Episode
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
  const { episodeId } = useParams();
  const { data: episodeData } = useQuery({ queryKey: ['episode'], queryFn: () => getEpisode(episodeId!) })

  if(!episodeData) {
    return <h1>Loading...</h1>
  }

  return (
    <main className="grid place-items-center h-screen">
      <div>
      <h1>Episode {episodeData?.name}</h1>
      <EpisodeData data={episodeData} />
      </div>
    </main>
  )
};

export default EpisodePage;