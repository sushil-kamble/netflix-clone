import React, { useState, useEffect } from "react";
import "../css/row.css";
import axios from "../axios";
import Model from "./Model";

function Rows({ title, fetchUrl, islargerow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map(movie => (
          <Model
            large={islargerow}
            poster={movie.poster_path}
            backdrop={movie.backdrop_path}
            title={movie.title || movie.name}
            overview={movie.overview}
            rating={movie.vote_average}
            count={movie.vote_count}
            key={movie.id}
          />
          // <img
          //   src={
          //     base_url + (islargerow ? movie.poster_path : movie.backdrop_path)
          //   }
          //   alt={movie.title}
          //   className={`row__poster ${islargerow && "row__posterLarge"}`}
          //   key={movie.id}
          // />
        ))}
      </div>
    </div>
  );
}

export default Rows;
