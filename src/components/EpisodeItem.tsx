import { Link } from "react-router-dom";
import { Episode } from "../types";

type Props = {
  data: Episode
}

const EpisodeItem = ({ data }: Props) => {
  return (
    <li><Link to={`/episodes/${data.id}`}>{data.episode} | {data.name}</Link></li>
  )
};

export default EpisodeItem;