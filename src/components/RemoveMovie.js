import React from "react";
import { FcEmptyTrash } from "react-icons/fc";

export const RemoveMovie = ({ handleOnDelete, movie }) => {
  return (
    <div onClick={() => handleOnDelete(movie)}>
      <span className="mr-2">Remove from favourites</span>
      <FcEmptyTrash />
    </div>
  );
};
