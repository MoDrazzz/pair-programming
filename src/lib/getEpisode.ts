import { Episode } from "../types"

export const getEpisode = async (id: string) => {
  const request = await fetch("https://rickandmortyapi.com/api/episode/" + id)
  const data = await request.json()

  if(data.error) throw new Response("Episode not found", { status: 404 });

  return data as Episode
}