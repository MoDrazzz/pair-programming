import { Link } from "react-router-dom";
import { Episode as EpisodeType } from "../types";

type Props = {
  data: EpisodeType
}

const Episode = ({ data }: Props) => {
  return (
    <li><Link to={`/episodes/${data.id}`}>{data.episode} | {data.name}</Link></li>
  )
};

export default Episode;