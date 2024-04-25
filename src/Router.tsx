import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { EpisodePage } from "./components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getEpisodes, getEpisode } from "./lib";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/episodes",
    element: <App />,
    loader: async ({ request }) => {
      const searchParams = new URL(request.url).searchParams
      const currentPage = searchParams.get('page') || '1'

      const data = await queryClient.ensureQueryData({ queryKey: ['episodes'], queryFn: () => getEpisodes(currentPage) })

      return data
    }
  },
  {
    path: "episodes/:episodeId",
    element: <EpisodePage />,
    loader: async ({ params }) => {
      const data = await queryClient.ensureQueryData({ queryKey: ['episode'], queryFn: () => getEpisode(params.episodeId!) })

      return data
    }
  },
]);

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};

export default Router;