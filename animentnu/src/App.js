import { Route, Switch } from "react-router-dom";
import Frontpage from "./Frontpage";
import Screenings from "./Screenings";

function App() {
    return (
        <Switch>
            <Route path="/screenings">
                <Screenings />
            </Route>
            <Route exact path="/">
                <Frontpage />
            </Route>
        </Switch>
    );
}

export default App;
