import React, { Component } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import AllEpisodes from "./views/AllEpisodes";
import EpisodeDetails from "./views/EpisodeDetails";
import Seasons from "./views/Seasons";
import { getAllGOTEpisodes } from "./services/GOTServices";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    gotEpisodes: [],
    srchKey: "",
  };

  fetchData = () => {
    getAllGOTEpisodes()
      .then((gotEpisodes) => {
        console.log("componenet did mount: ", gotEpisodes);
        this.setState({ gotEpisodes });
      })
      .catch((error) => console.log(error));
  };
  componentDidMount = () => {
    this.fetchData();
  };

  searchEpisodes = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.srchKey != this.state.srchKey) {
      console.log("componentDidUpdate-: prevkey: ", prevState.srchKey);
      console.log("componentDidUpdate- : current key: ", this.state.srchKey);

      let tempList = this.state.gotEpisodes;
      tempList = tempList.filter((ele) =>
        ele.name
          .toLowerCase()
          .trim()
          .includes(this.state.srchKey.toLowerCase().trim())
      );
      console.log(tempList);
    }
  }

  render = () => {
    console.log("app.js=> render", this.state.gotEpisodes);
    return (
      <div className="App">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <Link className="navbar-brand" to="/">
              <h2> Game Of Thrones </h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  justify-content-between"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" href="#" to="/">
                  All Episodes
                </Link>
                <Link
                  className="nav-item nav-link active"
                  href="#"
                  to="/seasons"
                >
                  Seasons
                </Link>
              </div>

              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search for Episodes ... "
                aria-label="Search"
                name="srchKey"
                value={this.state.srchKey}
                onChange={this.searchEpisodes}
              />
            </div>
          </nav>

          <Route
            exact
            path="/"
            render={() => <AllEpisodes episodes={this.state.gotEpisodes} />}
          />

          <Route
            exact
            path="/episode/:id"
            render={(props) => (
              <EpisodeDetails {...props} episodes={this.state.gotEpisodes} />
            )}
          />

          <Route
            exact
            path="/seasons"
            render={() => <Seasons episodes={this.state.gotEpisodes} />}
          />
          <Route
            exact
            path="/season/:id"
            render={(props) => (
              <Seasons {...props} episodes={this.state.gotEpisodes} />
            )}
          />
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
