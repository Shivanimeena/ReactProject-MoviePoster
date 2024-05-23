import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const initialUserState = {
  name: "",
  email: "",
  password: "",
  isLoggedIn: false,
};

const movieState = {
  loading: false,
  movies: [],
  error: "",
};

const searchState = {
  title: "",
  results: [],
  error: "",
};

const logger = createLogger();

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
        isLoggedIn: true,
      };

    case "LOGOUT":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
        movies: [],
        error: "",
      };
    case "GET_MOVIES":
      return {
        ...state,
        loading: false,
        movies: action.movies,
        error: "",
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.error,
      };
    default:
      return state;
  }
};


const searchReducer = (state = searchState, action) => {
  switch (action.type) {
    case "SEARCH_RESULTS":
      return {
        ...state,
        title: action.title,
        results: action.results,
        error: "",
      };
    case "ERROR":
      return {
        ...state,
        title: "",
        results: [],
        error: action.error,
      };
    default:
      return state;
  }
};




const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
