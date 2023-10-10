import { useEffect, useState } from "react";
import "./App.css";
import { MovieListHeading } from "./components/MovieListHeading";
import { SearchBox } from "./components/SearchBox";
import { MovieDisplay } from "./components/MovieDisplay";
import { RemoveMovie } from "./components/RemoveMovie";
import { AddFavourite } from "./components/AddFavourite";
import { randomCharGenerator } from "./utils/randomStr";
import { fetchRandom } from "./utils/axiosHelper";
import { Recommen } from "./components/Recommen";
function App() {
  const [movieList, setMovieList] = useState([]);

  const [favourites, setFavourites] = useState([]);

  const [randomMovie, setRandomMovie] = useState({});
  const [randomChar, setRandomChar] = useState("");

  const fetchRandomMovie = async () => {
    const char = randomCharGenerator();
    setRandomChar(char);

    try {
      const data = await fetchRandom(char);
      setRandomMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRandomMovie();
  }, []);

  const addMovieList = (movies) => {
    setMovieList([...movieList, ...movies]); //movies is an array
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
      <MovieListHeading heading="Recommendation" />
      <Recommen randomMovie={randomMovie} icon={AddFavourite} />

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <div className="row">
          <MovieDisplay
            movieList={movieList}
            handleFavourite={handleFavourite}
            icon={AddFavourite}
          />
        </div>
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
