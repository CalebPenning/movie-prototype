import { Route, Switch, Redirect } from "react-router-dom"
import MovieSearch from "./MovieSearch"
import MovieDetails from "./MovieDetails"

const Routes = () => (
    <> 
        <Switch>
            <Route exact path="/"><MovieSearch /></Route>
            <Route path="/:imdbID" ><MovieDetails /></Route>
            <Redirect to="/" />
        </Switch>
    </>
)

export default Routes