import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const GptMovieSuggestion = () => {
  const gptMovie = useSelector((store) => store.gpt.gptMovie);
  return (
    <div className='p-2 m-2 flex flex-wrap pt-4 justify-center bg-black bg-opacity-80'>
      {gptMovie ? gptMovie.map((movie) => <MovieCard key={movie?.id} movie={movie} />) : "Movie not found"}
    </div>
  )
}

export default GptMovieSuggestion