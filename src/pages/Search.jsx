import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const Search = ({ SearchResult }) => {
  return (
    <div className="main" style={{ display: "flex", flexDirection: "column" }}>
      <Navbar></Navbar>
      <p style={{ marginLeft: "10px" }}>
        Search results for " {SearchResult.title} "
      </p>
      <div
        className="movie-cards"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        {SearchResult &&
          SearchResult.results &&
          SearchResult.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SearchResult: state.search,
  };
};

export default connect(mapStateToProps)(Search);
