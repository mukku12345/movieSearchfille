import React from "react";
import Home from "./Movie/Home";
import SingleMovie from "./Movie/SingleMovie";

import {BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
 
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element ={<Home/>}/>
     <Route path="movie/:id" element={<SingleMovie/>}/>
     {/* <Route path="*" element={<Error/>}/> */}

   </Routes>
   </BrowserRouter>
   {/* <NavBar/>
   <Search/> */}
   
   </>
    
  
  );

}
  

export default App;
