import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/AllEpisodes/Home/Home';
import AllEpisodes from './Components/AllEpisodes/AllEpisodes'

function App () {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path="/episodes" component={AllEpisodes} />
          <Route exact path="/" component={Home} ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
}


export default App;
