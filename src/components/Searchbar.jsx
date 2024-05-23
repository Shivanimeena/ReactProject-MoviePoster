import React, { useState, useRef, useEffect } from "react";
import "./styles/searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { fetchSearch } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
   
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      dispatch(fetchSearch(search));
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="searchbar">
      <input
        ref={searchRef}
        className="search-input"
        type="text"
        placeholder="Search for a movie"
        onChange={handleChange}
      />
      <div className="search-icon">
        <SearchIcon
          fontSize="large"
          onClick={handleSearch}
          sx={
            {
              color: "black",
            }
          }
          
        />
      </div>
    </div>
  );
};

export default Searchbar;
