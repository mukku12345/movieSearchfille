import React from 'react'
import { useGlobalContext } from './context';
import Movies from './Movies';

const Search = () => {
  const{query,setQuery,isError}=useGlobalContext();
  return (
    <>
    <section className='search-section'>
    <form action='#' onSubmit={(e)=>e.preventDefault()}>
<div>
  <input type="text"  placeholder='Enter Show Name'
  value={query}
  onChange={(e)=>setQuery(e.target.value)}
  />
</div>
</form>
<div className='card-error'>
  <p>{isError.show && isError.msg}</p>

</div>
    </section>
    <Movies/>
    
    </>
  )
}

export default Search;