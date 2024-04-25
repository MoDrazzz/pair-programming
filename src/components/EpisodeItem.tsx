import { Link } from "react-router-dom";
import { Episode } from "../types";

type EpisodeItemProps = {
  data: Episode
}

const EpisodeItem = ({ data }: EpisodeItemProps) => {
  return (
    <li><Link to={`/episodes/${data.id}`}>{data.episode} | {data.name}</Link></li>
  )
};

export default EpisodeItem;