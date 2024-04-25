import { EpisodesResponse } from "../types/EpisodesResponse";

export const getEpisodes = async (page: string) => {
  const request = await fetch("https://rickandmortyapi.com/api/episode?page=" + page)
  const data = await request.json()

  return data as EpisodesResponse
}