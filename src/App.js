import React, {
  useEffect,
  useState
} from "react";
import "./App.css";
import searchIcon from "./search.svg"
import MovieCard from "./MovieCard";



const API_URL = "http://www.omdbapi.com?apikey=505de100"
// eslint-disable-next-line
const movie1 = {

  "Title": "Disney Gallery: The Mandalorian",
  "Year": "2020–",
  "imdbID": "tt12162902",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjY0YWEzNT…WVkYzFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
}



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

  }

  useEffect(function() {
    searchMovies(`Disney`);
  }, []);

  return ( < div className = "app" >
      <
      h1 > Movieland < /h1> <
      div className = "search" >
      <
      input placeholder = "Search movies"
      value = {
        searchTerm
      }
      onChange = {
        (e) => setSearchTerm(e.target.value)
      }
      /> <
      img src = {
        searchIcon
      }
      alt = "search"
      onClick = {
        () => searchMovies(searchTerm)
      }
      /> < /
      div > {
        movies?.length > 0 ?
        ( <
          div className = "container" > {
            movies.map((movie) => ( < MovieCard movie = {
                  movie
                }
                />))} < /
                div >
              ): ( <
                div className = "empty" >
                <
                h2 > No Movies Found < /h2> < /
                div >
              )
            } <
            /div>
          );
        }

        export default App;