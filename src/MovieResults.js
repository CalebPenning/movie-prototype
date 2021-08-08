import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import axios from "axios"
import baseUrl from "./secrets"

const MovieResults = (
    // { data }
    ) => {
    const { searchTerm, pageNum } = useParams()
    const [page, setPage] = useState(pageNum)
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getMovies = async () => {
            let res = await axios.get(`${baseUrl}s=${searchTerm}&page=${page}`)
            if (res.data.Search) setMovies(res.data.Search)
            else console.log(res.data, res.status)
            setIsLoading(false)
        }
        getMovies()
    }, [page])

    const turnPage = () => {
        if (page >= 1) setPage(page + 1)
    }

    const turnBackPage = () => {
        if (page >= 2) setPage(page - 1)
        else return <p>Can't go back!</p>
    }

    if (isLoading) return <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="A swirling circle-esque icon, meant to denote loading" />

    return (
        <>
            {
            movies.map((movie) => (
                <div style={{border: "2px solid black"}} key={movie.imdbID}>
                    <h3><NavLink to={`/movies/${movie.imdbID}`}>{movie.Title}</NavLink></h3>
                    <span>{movie.Year}</span>
                    { movie.Poster !== "N/A" ? 
                    <img src={movie.Poster} alt={`A poster for the ${movie.Year} ${movie.Type}, ${movie.Title}`} /> :
                    <p>No Poster Available.</p>}
                </div>
            ))}
            <button onClick={turnBackPage} >Last Page</button>
            <button onClick={turnPage} >Next Page</button>   
        </>
    )
}

export default MovieResults