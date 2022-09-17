import React,{useState} from "react";
// import Movies from "./Movies";
import Search from "./Search";
import Actor from "./Actor";



function Home(){
  const [actor, setActor] = useState(false);
  const [show, setShow] = useState(false);

  const setActorFilter = () => {
      setShow(false);
      setActor(true);
  }

  const setShowFilter = () => {
      setActor(false);
      setShow(true);
     
  }
  return (
    <>
    <section >
                <div className="actor-container">
                         
                        <div >
                         <div><h1 className="tvmaze">Tvmaze</h1></div> 
                        <div> <p className="search-fav">Search Your Favourite Movies</p></div> 
                            <input type="radio" name="movie"className="in" onChange={() => setShowFilter()}  /> <strong style={{fontSize:"20px" , color:'whitesmoke'}}> By Shows </strong>
                            <input type="radio" name="movie" className="in" onChange={() => setActorFilter()} /> <strong style={{fontSize:"20px", color:'whitesmoke'}}> By Actor </strong>
                        </div>
                   
                   
                </div>
            </section>
            {actor ? <Actor /> : ""}
            {show ? <Search /> : ""}
    
    </>
    
    )
    
    }
    export default Home;