import { Route, Switch, Redirect } from "react-router-dom"
import MovieSearch from "./MovieSearch"
import MovieDetails from "./MovieDetails"
import MovieResults from "./MovieResults"

const Routes = () => (
    <> 
        <Switch>
            <Route exact path="/"><MovieSearch /></Route>
            <Route path="/movies/:searchTerm/:pageNum" ><MovieResults /></Route>
            <Route path="/movies/:imdbID" ><MovieDetails /></Route>
            <Redirect to="/" />
        </Switch>
    </>
)

export default Routes