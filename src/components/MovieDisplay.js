import React from "react";

export const MovieDisplay = ({
  movieList,
  handleFavourite,
  icon: Icon,
  handleOnDelete,
}) => {
  //I will recieve two arrays but key name is the same
  //Like this I can keep use this component
  //
  const MovieList = movieList;

  if (!Array.isArray(MovieList) || MovieList.length === 0) {
    return <p>No movies to diaplay</p>;
  }
  return (
    <div className="d-flex gap-4 flex-row flex-wrap  pt-4 pb-4 justify-content-start mt-4 mb-4">
      {movieList.map((movie, index) => (
        <div
          className="card-effect card"
          style={{ width: "16rem" }}
          key={index}
        >
          <img src={movie.Poster} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title pb-2">{movie.Title}</h5>
          </div>
          <div className="overlay button-effect btn btn-dark">
            <Icon
              handleFavourite={handleFavourite}
              handleOnDelete={handleOnDelete}
              movie={movie}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
