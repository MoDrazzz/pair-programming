import { Character } from "../types";

export const fetchMainCharacters = async (characters: string[]) => {
  const mainCharacters = characters.slice(0, 3)
  const mainCharactersIds = mainCharacters.map(url => {
    const urlParts = url.split('/')

    return urlParts[urlParts.length - 1];
  })

  const request = await fetch("https://rickandmortyapi.com/api/character/" + mainCharactersIds.join(","))
  const data = await request.json()

  return data as Character[]
}