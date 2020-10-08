import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import EpisodesList from './components/EpisodesList/EpisodesList';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/episodes/:id" component={EpisodeDetails} />
          <Route path="/episodes" exact component={EpisodesList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
