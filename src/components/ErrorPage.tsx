import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div className="bg-zinc-800 flex flex-col text-zinc-50 justify-center items-center gap-3 h-screen">
        <h1 className="text-5xl font-bold">Oops!</h1>
        <h2 className="text-3xl font-bold">{error.status}</h2>
        <p>{error.data}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  }

  return <div>Oops</div>;
};

export default ErrorPage;