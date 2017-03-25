import React from "react";

const FetchError = ({errorMessage, onRetry}) => (
  <div>
    <p>Could not fetch todos. {errorMessage}!</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default FetchError;