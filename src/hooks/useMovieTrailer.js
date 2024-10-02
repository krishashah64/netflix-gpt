import React from 'react'
import { useEffect} from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (id) => {
    // const trailerVideo = useSelector(store => store.movies?.trailerVideo)

    const dispatch = useDispatch();

    useEffect(() => {
        getMovieTrailer();
    }, []);

    const getMovieTrailer = async function() {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos', API_OPTIONS);
        const  json = await data.json();
        const filterData = json.results.filter(movie => movie.name === 'Official Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer)); //add to movie store
    } 
 
}

export default useMovieTrailer