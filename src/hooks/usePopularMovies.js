import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import {useEffect} from 'react';

const usePopularMovies = () => {
    const dispatch = useDispatch();


    const getPopularMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', 
            API_OPTIONS
        );
        const jsonMovies = await data.json();
        // console.log(jsonMovies.results);
        dispatch(addPopularMovies(jsonMovies.results)); //add movies to redux store.
    };

    useEffect(() => {
        getPopularMovies();
    }, [])

};
export default usePopularMovies;