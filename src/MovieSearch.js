import { useState } from "react"
import axios from "axios"
import baseUrl from "./secrets"
import MovieResults from "./MovieResults"

const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [data, setData] = useState([])
    const [hasSubmit, setHasSubmit] = useState(false)
    const handleChange = evt => {
        setSearchTerm(evt.target.value)
    }
    const handleSubmit = async evt => {
        evt.preventDefault()
        let res = await axios.get(`${baseUrl}s=${searchTerm}`)
        setData(res.data.Search)
        setHasSubmit(true)
    }
    return (
        <> {hasSubmit ?  <MovieResults data={data} /> : 
        (
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Movies</label>
                <input type="text" name="search" id="search" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>)
            }
        </>
    )
}

export default MovieSearch