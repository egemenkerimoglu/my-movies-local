import React from "react";
import SearchBar from "../components/SearchBar"
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList";
import axios from "axios";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  // fetch ile APİ den bilgileri al
  /*
  async componentDidMount() {
    const baseURL = "http://localhost:3001/movies";
    const response = await fetch(baseURL);
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    this.setState({ movies: data });
  }
  */

  // axios ile APİ den bilgileri al
  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/movies");
    //console.log(response);
    this.setState({ movies: response.data });
  }

  // fetch APİ ile Silme İşlemi
  /*
  deleteMovie = async (movie) => {
    const baseURL = `http://localhost:3001/movies/${movie.id}`;
    await fetch(baseURL, {
      method: "DELETE",
    });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };
  */

  // axios APİ ile Silme İşlemi
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3001/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  //Silme motodunu MovieListe.js e porps vasıtası ile aktardık
  /*
  deleteMovie = (movie) => {
    //yeni bir liste oluştur, listeye state deki moviesleri ata ama
    //slinen filmi filtre ederek bul ve çıkar
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    //setState ile güncelleme yap
    // this.setState({
    //     movies: newMovieList
    // })
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };
  */

  // Film arama
  searchMovie = (event) => {
    // console.log(event.target.value);
    //state update ediyoruz
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <SearchBar searchMovieProp={this.searchMovie}></SearchBar>
          </div>
          <div className="col-12">
            <MovieList
              movies={filteredMovies}
              deleteMovieProp={this.deleteMovie}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App
