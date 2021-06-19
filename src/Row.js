import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import ReactLoader from "react-loading";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isTrailerLoading, setIsTrailerLoading] = useState(false);

  useEffect(() => {
    // if [], run once and dont run again, or if [movies] then run when movies changes.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setIsLoading(false);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };
  console.log(movies);
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
      setIsTrailerLoading(false);
    } else {
      setIsTrailerLoading(true);
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_title ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
          setIsTrailerLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsTrailerLoading(false);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      {isLoading ? (
        <ReactLoader type="spin" color="grey" />
      ) : (
        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${movie.poster_path}`}
                // isLargeRow ? movie.poster_path : movie.backdrop_path
                alt={movie.name}
              />
            );
          })}
        </div>
      )}

      {isTrailerLoading ? (
        <ReactLoader type="bubbles" color="grey" />
      ) : (
        trailerURL && (
          <Youtube className="video" videoId={trailerURL} opts={opts} />
        )
      )}
    </div>
  );
}

export default Row;
