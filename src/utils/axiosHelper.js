import axios from "axios";

const apiUrl = `http://www.omdbapi.com/?apikey=212bd8d2&s=`;

export const getMovieRequest = async (searchValue) => {
  try {
    const { data } = await axios.get(apiUrl + searchValue);

    return data;
  } catch (error) {
    console.log(error);
  }
};
