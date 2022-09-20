import React, { useContext,useEffect,useState } from "react";

const AppContext =React.createContext();

export const API_url =`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY} `;
// export const API_url =`https://www.omdbapi.com/?apikey=727bbdc1&s=""`;
const AppProvider = ({children})=>{
    const[isLoading,setIsLoading] = useState(true);
            const[movie,setMovie] =useState([]);
     const[isError,setIsError]    = useState({show:"false",msg:""});
      const[query,setQuery] =useState("");
    
    const getMovies =async (url)=>{
        setIsLoading(true);
       try{
        const res =await fetch(url);
        const data = await res.json();
        console.log(data);
         if(data.Response==="True"){
            setIsLoading(false);
            setIsError({
                show:false ,
                msg:"",
            })
            setMovie(data.Search);
         }else{
            setIsError({
                show:true ,
                msg:data.Error,
            })

         }



       } catch(error){
        console.log(error);
       }
    }

    useEffect(() => {
   let debouncing = setTimeout(()=>{
         getMovies(`${API_url}&s=${query}`);
        },800)
       return ()=>clearTimeout(debouncing);
    }, [query]);

    return (
     <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
        {children}
    </AppContext.Provider>
    )
}

const useGlobalContext =()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useGlobalContext};