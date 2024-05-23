import axios from "axios";



//USER ACTIONS START
export const userLogin = (user) => {
    
  return {
    type: "LOGIN",
    name: user.name,
    email: user.email,
    password: user.password,
   
  };
}

export const userLogout = () => {
  return {
    type: "LOGOUT",
  };
}

//USER ACTIONS END

//FETCHING MOVIES WITH GENRE START

export const getMovies = (movies) => {
  return {
    type: "GET_MOVIES",
    movies: movies,
  };
}

export const error = (error) => {
  return {
    type: "ERROR",
    error: error,
  };
}

 
export const fetchMovies = (genreId) => {
    return (dispatch) => {

        dispatch({ type: "LOADING" });

        axios
          .get(
            'https://api.themoviedb.org/3/discover/movie?api_key=4c1dd802c715fe1bae1e460636604644&with_genres='+ genreId
          )
          .then((response) => {
            dispatch(getMovies(response.data.results));
          })
          .catch((error) => {
            dispatch(error("Error fetching movies"));
          });
          
    };
 };

 //FETCHING MOVIES WITH GENRE END


//SEARCH OPERATION
export const searchMovies = (search, title) => {
  return {
    type: "SEARCH_RESULTS",
    results: search,
    title: title,
  };
}

export const fetchSearch = (search) => {
  return (dispatch) => {
      axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=4c1dd802c715fe1bae1e460636604644&query=${search}`
      )
      .then((response) => {
        
        dispatch(searchMovies(response.data.results, search));
      })
      .catch((error) => {
        dispatch(error("Error searching movies"));
      });
    };
};

