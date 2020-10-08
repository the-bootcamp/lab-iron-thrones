import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllEpisodes from "./Components/AllEpisodes";
import Seasons from "./Components/Seasons";
import { getAllEpisodes } from "./services";
import Details from "./Components/Details";
import Search from "./Components/Search";

class App extends React.Component {
  state = {
    allEpisodes: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      const allEpisodes = await getAllEpisodes();
      this.setState({
        allEpisodes,
      });
    } catch (error) {
      console.log(`Error setting state allEpisodes `, error);
    }
  };

  render() {
    return (
      <div className="App">
        <img className="logo" src="/thrones-logo.png" alt="thrones-logo" />
        <Router>
          {/* <Link to="/">Home</Link> */}
          <Link to="/">All Episodes</Link>
          <Link to="/seasons">Seasons</Link>
          <Link to="/search">Search Episodes</Link>

          <Switch>
            <Route
              exact
              path="/"
              render={() => <AllEpisodes episodes={this.state.allEpisodes} />}
            ></Route>
            <Route
              exact
              path="/seasons"
              render={() => <Seasons episodes={this.state.allEpisodes} />}
            ></Route>{" "}
            <Route exact path="/details/:details" component={Details}></Route>
            <Route
              exact
              path="/search"
              render={() => <Search episodes={this.state.allEpisodes} />}
            ></Route>{" "}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
