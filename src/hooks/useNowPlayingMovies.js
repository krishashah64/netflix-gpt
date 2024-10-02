import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import {useEffect} from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();


    const getNowPlayingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?page=1', 
            API_OPTIONS
        );
        const jsonMovies = await data.json();
        // console.log(jsonMovies.results);
        dispatch(addNowPlayingMovies(jsonMovies.results)); //add movies to redux store.
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

};
export default useNowPlayingMovies;