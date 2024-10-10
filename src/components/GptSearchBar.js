import React, { useRef } from 'react';
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import client from '../utils/openAi';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovie } from '../utils/gptSlice';

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchTMDBMOvie = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1';`, API_OPTIONS);
        const json = await data.json();
        return json.results;
     };


    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);
        //make an API call to openAi and get movie results.

        // const gptQuery = 
        //     "Act as a Movie Recommendation System and suggest some movies for the query " + searchText.current.value + " only give me names of 5 movies, comma seperated like example result given ahead. Example result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya"; 

        // const gptResults = await client.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });

        //   console.log(gptResults.choices);
        const searchedMovie = await searchTMDBMOvie();
        console.log(searchedMovie);
        dispatch(addGptMovie(searchedMovie));
        
    }

  return (
    <div className='pt-[10%] flex justify-center bg-'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input 
                type='text' 
                className='p-4 m-4 col-span-9' 
                placeholder={lang[langKey].gptSearchPlaceholder}
                ref={searchText}
            >
            </input>
            <button className='py-2 px-2 m-4 bg-red-700 text-white rounded-md col-span-3' onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar