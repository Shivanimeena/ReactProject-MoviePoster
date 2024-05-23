import React from 'react'
import "./styles/moviecard.css"

const MovieCard = ({movie}) => {
       
  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
        className="card-img"
      />
      <div className="card-title" > { movie && movie.title} </div>
    </div>
  );
}
  
export default MovieCard