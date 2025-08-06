import {get} from "../data/httpClient"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovie] = useState([])
    useEffect(() => {
        get("/movie/" + id).then((data) => {
            setMovie(data);
        });

    }, [id])

    const imageUrl = getMovieImg(movie.poster_path,300);
    return (
        <div className="movie-details">
            <img src={imageUrl} alt={movie.title} className="movieImageDetail"/>  
            <div className="movieDetails"> 
                <p className="movieTitle">
                    <strong>Title: </strong>{movie.title}
                </p>
                <p>
                    <strong>Genero: </strong>{movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Descripcion: </strong>{movie.overview}
                </p>
            </div>
        </div>
    )
}     
