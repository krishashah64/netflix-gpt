import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  console.log({movies});
  return (
    <div className='px-6'>

        <h1 className='text-2xl py-4 text-white'>{title}</h1>

        <div className='flex overflow-x-scroll' style={{ '-ms-overflow-style': 'none', 'scrollbarWidth': 'none', '&::-webkit-scrollbar': { display: 'none' }}} >  
            <div className='flex'>
                {movies?.map(movie =>  
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
            
        </div>
    </div>
  )
}
;
export default MovieList;