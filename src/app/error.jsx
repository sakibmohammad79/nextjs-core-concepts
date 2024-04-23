"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h2 className="text-3xl text-center text-red-400">An error occured</h2>
      <h2 className="text-3xl text-center text-red-400">{error.message}</h2>
      <button onClick={() => reset()} className="btn btn-primary">
        Try Again
      </button>
    </div>
  );
};

export default Error;
