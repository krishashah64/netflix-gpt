export const LOGO = "https://cdn-icons-png.flaticon.com/512/5977/5977590.png";
export const USER_AVATAR = "https://occ-0-853-851.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 
            'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const bgURL = "https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg";

export const SUPPORTED_LANGUAGES = [
    {identifier: 'en', name: "English"}, 
    {identifier: 'hindi', name: "Hindi"}, 
    {identifier: 'spanish', name: "Spanish"}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY