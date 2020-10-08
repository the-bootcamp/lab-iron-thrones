import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import EpisodesDetails from "./components/EpisodesDetails/EpisodesDetails";

function App() {
  return (
    <div className='App container'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/episodes/:id' component={EpisodesDetails} />
          {/* <Route exact path='/about' component={AboutUs} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
