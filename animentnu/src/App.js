import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Frontpage from "./pages/Frontpage";
import News from "./pages/News";
import Screenings from "./pages/Screenings";
import Voting from "./pages/Voting";

function App() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/news">
                <News />
            </Route>
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
