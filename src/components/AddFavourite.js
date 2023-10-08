import React from "react";
import { FcLike } from "react-icons/fc";

export const AddFavourite = ({ handleFavourite, movie }) => {
  return (
    <div className="text-center" onClick={() => handleFavourite(movie)}>
      <span className="">Add to Favourites {/*  */}</span>

      <FcLike />
    </div>
  );
};
