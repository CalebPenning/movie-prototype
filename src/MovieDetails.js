import baseUrl from "./secrets"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const MovieDetails = () => {
    const imdbID = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] 
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const getMovie = async (id) => {
            let res = await axios.get(`${baseUrl}i=${id}`)
            if (res.status !== 200) console.log(res)
            else setMovie(res.data)
            setIsLoading(false)
        }
        getMovie(imdbID)
    }, [baseUrl])
}

export default MovieDetails