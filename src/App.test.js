import { render, screen } from "@testing-library/react";
// import App from "./App";
import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import MovieCard from "./components/MovieCard";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe("Home tests", () => {
//   test("Home page has picture", () => {
//           render(<Home />);
//           const picture = screen.getByTestId("avengers");
//           expect(picture).toBeInTheDocument();
//   });
// }
// );

// describe("Navbar tests", () => {
//   test("Navbar has 4 links", () => {
//     render(<Navbar />);
//     const links = screen.getAllByRole("link");
//     expect(links.length).toBe(4);
//   });
// });

describe("MovieCard tests", () => {
  test("MovieCard has title", () => {
    const movie = {
      title: "Avengers",
      poster_path: "avengers.jpg",
    };
    render(<MovieCard movie={movie} />);
    const title = screen.getByText("Avengers");
    expect(title).toBeInTheDocument();
  });
});





