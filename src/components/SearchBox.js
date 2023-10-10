import React, { useEffect, useRef, useState } from "react";
import { getMovieRequest } from "../utils/axiosHelper";
import { randomCharGenerator } from "../utils/randomStr";

export const SearchBox = ({ addMovieList }) => {
  //we get array from request
  const strRef = useRef();

  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const str = strRef.current.value;
    console.log(str);
    const data = await getMovieRequest(str);
    console.log(data);
    console.log(data.Search);

    if (data.Search) {
      const movies = data.Search;
      addMovieList(movies);
    } else {
      setError(data.Error);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div class="mb-3 d-grid">
        <div className="row">
          <div className="col">
            <input
              ref={strRef}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="col">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
