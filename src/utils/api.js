import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFkOTk0NzliMmIzNzNlYTg0OWNjZjg3NmY2MzMxNyIsInN1YiI6IjY0YjkwYjRlNGQyM2RkMDBjODEzZTQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OXUzwh93PhHfCqpyoQlC3cjZF8UJ9TEpPn8Zq5nYzWw"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get 
        (BASE_URL + url, {
            headers,
            params
        })
        return data; f
    } catch (error) {
        console.log(err);
        return err;
    }
}
