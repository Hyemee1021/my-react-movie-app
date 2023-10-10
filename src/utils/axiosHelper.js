import axios from "axios";

const apiUrl = `http://www.omdbapi.com/?apikey=212bd8d2&s=`;

const apiUrl2 = "https://www.omdbapi.com/?apikey=1c49254a&t=";

export const getMovieRequest = async (searchValue) => {
  try {
    const { data } = await axios.get(apiUrl + searchValue);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRandom = async (str) => {
  try {
    const { data } = await axios.get(apiUrl2 + str);

    return data;
  } catch (error) {
    console.log(error);
  }
};
