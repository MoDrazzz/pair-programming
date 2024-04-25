import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { EpisodePage } from "./components";

const router = createBrowserRouter([
  {
    path: "/episodes",
    element: <App />,
  },
  {
    path: "episodes/:episodeId",
    element: <EpisodePage />,
  },
]);

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Router;