import { NavLink} from "react-router-dom"

const MovieResults = ({ data }) => {
    return (
        data.map((movie) => (
            <div style={{border: "2px solid black"}} key={movie.imdbID}>
                <h3><NavLink to={`/${movie.imdbID}`}>{movie.Title}</NavLink></h3>
                <span>{movie.Year}</span>
                { movie.Poster !== "N/A" ? 
                <img src={movie.Poster} alt={`A poster for the ${movie.Year} ${movie.Type}, ${movie.Title}`} /> :
                <p>No Poster Available.</p>}
            </div>
        ))
    )
}

export default MovieResults