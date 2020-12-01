import React, {useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './row.css'
const base_url = "https://image.tmdb.org/t/p/original"
const Row = ({ title,fetchUrl,islargerow }) => {
    const [movies, setMovies] = useState([]);

       

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            
            setMovies(request.data.results);
            
            return request;
        }
        fetchData()
    }, [fetchUrl]);


        return (
        <div className="Row">
            {title}
            <div className="row_posters">
                {movies.map(movie =>{
                  return  <img key={movie.id} className={`row_poster ${islargerow && "row_posterslarge"}`} src={`${base_url}${islargerow ?movie.poster_path:movie.backdrop_path}`} />
                })}
            </div>
        </div>
        
    );
}

export default Row;
