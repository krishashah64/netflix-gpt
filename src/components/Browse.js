import userEvent from "@testing-library/user-event";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {

    //fetch data from tmdb api and update the store
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    return(
        // <div >
        <div >
            <Header />
           {showGptSearch ? <GptSearchPage /> : (<><MainContainer />
            <SecondaryContainer /></>)}
        </div>
    );
};

export default Browse;