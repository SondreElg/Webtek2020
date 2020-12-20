import { Route, Switch } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Screenings from "./pages/Screenings";
import Voting from "./pages/Voting";

function App() {
    return (
        <Switch>
            <Route path="/screenings">
                <Screenings />
            </Route>
            <Route path="/voting">
                <Voting />
            </Route>
            <Route exact path="/">
                <Frontpage />
            </Route>
        </Switch>
    );
}

export default App;
