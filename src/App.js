import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/AllEpisodes/Home/Home';
import AllEpisodes from './Components/AllEpisodes/AllEpisodes';
import SpecificEpisode from './Components/AllEpisodes/SpecificEpisode/SpecificEpisode';


function App () {
  
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
            <Route exact path="/episodes" component={AllEpisodes} />
            <Route exact path="/specific-episode" component={SpecificEpisode}/>
            <Route exact path="/" component={Home} ></Route>
            </Switch>
          </BrowserRouter>
      </div>
    );
}


export default App;
