import { Episode } from "./Episode"

export type EpisodesResponse = {
  info: {
    count: number
    next: string | null
    pages: number
    prev: string | null
  },
  results: Episode[]
}