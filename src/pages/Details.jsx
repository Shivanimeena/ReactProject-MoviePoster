import React, { useState, useEffect } from "react";
import "./styles/details.css";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, connect } from "react-redux";
import { fetchMovies } from "../redux/actions";
import { CircularProgress } from "@mui/material";

const Details = ({ movies, loading }) => {
  const [genre, setGenre] = useState([]);
  const [genreId, setGenreId] = useState(28);

  const dispatch = useDispatch();

  //SETTING UP THE GENRES START
  const fetchGenre = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=4c1dd802c715fe1bae1e460636604644"
      );
      const response = await data.json();
      setGenre(response.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenre();
    dispatch(fetchMovies(genreId));
  }, [genreId]);

  //SETTING UP THE GENRES END

  //MUI MENU CODE START

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //MUI MENU CODE END

  const handleGenre = (genre) => {
    setGenreId(genre.id);
    handleClose();
  };

  return (
    <>
      <Navbar />
      <div className="Main">
        <div className="filter">
          <Button
            size="large"
            variant="contained"
            color="error"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Genre
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {genre &&
              genre.map((genre) => {
                return (
                  <MenuItem key={genre.id} onClick={() => handleGenre(genre)}>
                    {genre.name}
                  </MenuItem>
                );
              })}
          </Menu>
        </div>
        {loading && <CircularProgress />}
      
        {movies &&
          movies.map((movie) => {
            return (
              <img
                className="container"
                key={movie.id}
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt="movie.title"
              />
            );
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    loading : state.movie.loading,
  };
}; 

export default connect(mapStateToProps)(Details);
