import { useState } from "react";
import "./App.css";
import { MovieListHeading } from "./components/MovieListHeading";
import { SearchBox } from "./components/SearchBox";
import { MovieDisplay } from "./components/MovieDisplay";
import { RemoveMovie } from "./components/RemoveMovie";
import { AddFavourite } from "./components/AddFavourite";

function App() {
  const [movieList, setMovieList] = useState([]);

  const [favourites, setFavourites] = useState([]);

  const addMovieList = (movies) => {
    setMovieList([...movies]); //movies is an array
    //whenever I search new movies I want movie display new movies
    console.log(movieList);
  };

  const handleFavourite = (movie) => {
    const newArray = [...favourites, movie];
    setFavourites(newArray);
  };

  const handleOnDelete = (movie) => {
    const newArray = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newArray);
  };
  return (
    <div className="constainer-fluid movie-app ">
      <SearchBox addMovieList={addMovieList} />
      <MovieListHeading heading="Movies" />
      <div className="row">
        <MovieDisplay
          movieList={movieList}
          handleFavourite={handleFavourite}
          icon={AddFavourite}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
        <div className="row">
          <MovieDisplay
            movieList={favourites}
            icon={RemoveMovie}
            handleOnDelete={handleOnDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
