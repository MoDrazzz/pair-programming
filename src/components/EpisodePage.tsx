import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharactersType, Episode as EpisodeType } from "../types";

const EpisodePage = () => {
  const { episodeId } = useParams();
  const [episodeData, setEpisodeData] = useState<null|EpisodeType>(null)
  const [mainCharacters, setMainCharacters] = useState<CharactersType[]>([]);

  const fetchMainCharacters = async (characters: string[]) => {
    const mainCharacters = characters.slice(0, 3)
    const mainCharactersIds = mainCharacters.map(url => {
      const urlParts = url.split('/')

      return urlParts[urlParts.length - 1];
    })

    fetch("https://rickandmortyapi.com/api/character/" + mainCharactersIds.join(","))
    .then(res => res.json())
    .then(data => setMainCharacters(data))
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + episodeId)
    .then(res => res.json())
    .then((data: EpisodeType) => {
      setEpisodeData(data)

      fetchMainCharacters(data.characters)      
    })
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
        <li><strong>Main Characters:</strong>
          <div className="flex gap-4">
            {mainCharacters.map(character => <img key={character.id} src={character.image} />)}
          </div>
        </li>
      </ul>
      </div>
    </main>
  )
};

export default EpisodePage;