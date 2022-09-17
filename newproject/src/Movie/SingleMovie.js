import React,{useState,useEffect } from "react";
import {NavLink, useParams} from "react-router-dom";
import {API_url} from "./context";

function SingleMovie(){

    const { id } =useParams(0);

    const[isLoading,setIsLoading] = useState(true);
    const[movie,setMovie] =useState("");

const getMovies =async (url)=>{
try{
const res =await fetch(url);
const data = await res.json();
console.log(data);
 if(data.Response==="True"){
    setIsLoading(false);
    setMovie(data);
 }
} catch(error){
console.log(error);
}
}

useEffect(() => {
let debouncing = setTimeout(()=>{
 getMovies(`${API_url}&i=${id}`);
},800)
return ()=>clearTimeout(debouncing);
}, [id]);


if(isLoading){
    return(
        <div >
            <div className="loading">Loading...</div>
        </div>
    )
}

    return(
    <section className="movie-section">
    <div className="movie-card" >
        <figure>
            <img src={movie.Poster} alt="mukesh" className="single-image"/>
        </figure>
        
        <div className="card-content">
            <p className="title">{movie.title}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{`imdbRating:${movie.imdbRating}/10`}</p>
            <p className="card-text">{`Country:${movie.Country}`}</p>
            <NavLink to={"/"}>
                <button>Back</button>
                </NavLink>
            </div>
             </div>
             </section>
         

    )
}

export default SingleMovie;