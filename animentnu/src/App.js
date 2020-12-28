import { Route, Switch } from "react-router-dom";
import PageAbout from "./pages/About";
import PageFront from "./pages/Front";
import PageNews from "./pages/News";
import PageScreenings from "./pages/Screenings";
import PageVoting from "./pages/Voting";

function App() {
    return (
        <Switch>
            <Route path="/about">
                <PageAbout />
            </Route>
            <Route path="/news">
                <PageNews />
            </Route>
            <Route path="/screenings">
                <PageScreenings />
            </Route>
            <Route path="/voting">
                <PageVoting />
            </Route>
            <Route exact path="/">
                <PageFront />
            </Route>
        </Switch>
    );
}

export default App;
