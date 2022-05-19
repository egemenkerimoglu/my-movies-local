import React from "react";

const MovieList = (props) => {      
      

    // function handleClick(event) {
    //     console.log("Sil butonuna tıklandı");
    //     const name = event.target.getAttribute("name");     
    //     console.log(event.target.getAttribute("id"));
    // }

    return (
      <div className="row my-4">
        {props.movies.map((movie) => (
          <div className="col-sm-6 col-lg-4" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img src={movie.imageURL} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className=" d-flex justify-content-between">
                  <button
                    type="button"
                                className="btn btn-outline-danger btn-sm"
                             
                     onClick={(event) => props.deleteMovieProp(movie)}
                               
                  >
                    Sil
                  </button>
                  <h2>
                    <span className="badge bg-secondary">{movie.rating}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default MovieList
