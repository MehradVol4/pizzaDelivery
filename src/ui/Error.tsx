import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function RouteError() {

  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? error.data || error.statusText
    : error instanceof globalThis.Error
      ? error.message
      : "Unknown error";

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{String(message)}</p>

      <LinkButton to="-1">
        &larr; Go back
      </LinkButton>

      
    </div>
  );
}

export default RouteError;
