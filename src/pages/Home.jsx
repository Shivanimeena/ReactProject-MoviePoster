import React, { useState, useEffect } from "react";
import "./styles/home.css";
import Navbar from "../components/Navbar";
import avengers from "../components/pictures/avengers.png";
import Searchbar from "../components/Searchbar";
import axios from "axios";


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = () => {
    try {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/week?api_key=4c1dd802c715fe1bae1e460636604644"
        )
        .then((response) => {
          setTrendingMovies(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="top-div">
        <div className="top-div-left">
          <Searchbar />
        </div>
        <div className="top-div-right">
          <img src={avengers} alt="" data-testid="avengers" />
        </div>
      </div>
      <div className="mid-div">
        <p> Trending Movies </p>
        <div className="trending">
          {trendingMovies &&
            trendingMovies.map((movie) => {
              return (
                <div className="trending-movies" key={movie.id}>
                  <img
                    className="trending-movies-img"
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt="poster_path"
                  />
                  <p className="trending-movies-title">{movie.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
