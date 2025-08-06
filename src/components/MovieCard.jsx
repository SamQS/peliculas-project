import "../components/MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;
    return (
        <li className="movie-card">
            <Link to={`/movie/${movie.id}`} className="movie-link">
            <img width={230} height={345} src={imageUrl} alt={movie.title} className="movieImage"/>
            <h2 className="titulo">{movie.title}</h2>
            </Link>
        </li>
    )
}