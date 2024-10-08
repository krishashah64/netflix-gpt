import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import {useEffect} from 'react';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();


    const getTopRatedMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', 
            API_OPTIONS
        );
        const jsonMovies = await data.json();
        // console.log(jsonMovies.results);
        dispatch(addTopRatedMovies(jsonMovies.results)); //add movies to redux store.
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [])

};
export default useTopRatedMovies;