const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`
};

export default requests;
