import { Episode as EpisodeType } from "../types";

type Props = {
  data: EpisodeType
}

const Episode = ({ data }: Props) => {
  return (
    <li>{data.episode} | {data.name}</li>
  )
};

export default Episode;