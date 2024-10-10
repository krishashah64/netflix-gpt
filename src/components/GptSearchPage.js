import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bgURL } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div>
         <div className="fixed w-full -z-10">
                <img 
                    src= {bgURL}
                    alt=""
                    // style={{ width: "100vw", height: "auto" }}
                    className="w-full h-full object-cover bg-gradient-to-b from-black" 
                /> 
            </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearchPage;