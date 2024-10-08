import userEvent from "@testing-library/user-event";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {

    //fetch data from tmdb api and update the store
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    return(
        // <div >
        <div >
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;