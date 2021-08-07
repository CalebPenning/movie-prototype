import baseUrl from "./secrets"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
const MovieDetails = () => {
    const history = useHistory()
    const { imdbID } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] 
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const getMovie = async (id) => {
            let res = await axios.get(`${baseUrl}i=${id}`)
            if (res.status !== 200) console.log(res)
            else setMovie(res.data)
            setIsLoading(false)
        }
        getMovie(imdbID)
    }, [imdbID])

    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleClick = () => {
        history.goBack()
    }
    
    return (
        <div>
            <h3>{movie.Title}</h3>
            <img alt={`Poster for the ${movie.Type} ${movie.Title}, released in ${movie.Year}`} src={movie.Poster} />
            <pre>Released in {movie.Year}</pre>
            <h4>Ratings for {movie.Title}:</h4>
            <ul>
                {movie.Ratings.map((el) => {
                    return (
                        <li>{el.Source}: {el.Value}</li>
                    )
                })}
            </ul>
            <section>
                <p>
                Starring: {movie.Actors}
                </p>
                <p>
                Directed by: {movie.Director}
                </p>
                <p>
                {"Writer(s): "} {movie.Writer}
                </p>
                <p>
                <b>Plot:</b> {movie.Plot}
                </p>
            </section>
            <button onClick={handleClick}>Go Back</button>
        </div>
    )
}

export default MovieDetails