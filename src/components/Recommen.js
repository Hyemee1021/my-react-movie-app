import React from "react";

export const Recommen = ({ randomMovie, icon: Icon }) => {
  //in order to use component, I need to make a prop to component again
  const movie = randomMovie;

  return (
    <div className="d-flex gap-4 flex-row flex-wrap  pt-4 pb-4 justify-content-start mt-4 mb-4">
      <div className="card-effect card" style={{ width: "16rem" }}>
        <img src={movie.Poster} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title pb-2">{movie.Title}</h5>
        </div>
        <div className="overlay button-effect btn btn-dark">
          <Icon />
        </div>
      </div>
    </div>
  );
};
