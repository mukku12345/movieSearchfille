import React from "react";
import { useGlobalContext } from "./context";
import {NavLink} from "react-router-dom";
 


const Movies = () => {
    const {movie,isLoading} = useGlobalContext();

        if(isLoading){
          return(
            <div >
              <div className="loading">Loading...</div>
            </div>
          )
        }

  return (
    <>
    <section className="movie-page">
      <div className="grid grid-4-col">
    { movie.map((curMovie)=>{
      const{imdbID,Title,Poster} =curMovie
      const MovieName =Title.substring(0,15);
        return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
           <div className="card">
            <div className="card-info">
              <h3>{MovieName>=15?`${MovieName} ...`:MovieName}</h3>
              <img src={Poster} alt={imdbID} className="movie-poster"/>
            </div>
           </div>

            </NavLink>
        ) })
      }
      </div>
      </section>
    
    </>
  )
}

export default Movies;