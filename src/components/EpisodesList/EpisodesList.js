import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './BeerList.css';

import { getAllEpisodes } from '../../services/GOTServices';

class EpisodeList extends Component {
  state = {
    episodes: [],
    query: '',
  };

  componentDidMount = () => {
    this.fetchData();
  };

  // componentDidUpdate = () => {
  //   filterEpisodes(this.state.query)
  //     .then((response) => {
  //       this.setState({
  //         episodes: response,
  //       });
  //     })
  //     .catch((err) => console.log('Error retrieving filtered beers: ', err));
  // };

  fetchData = () => {
    getAllEpisodes()
      .then((response) => {
        console.log(response);
        this.setState({
          episodes: response,
        });
      })
      .catch((err) => console.log('Error retrieving all beers: ', err));
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <Link to={'/'}>
            <img src="/images/home.png" alt="home.png" />
          </Link>
        </div>
        <div>
          <input
            className="search-bar"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.episodes.map((episode) => {
          return (
            <div key={episode.id}>
              <Link to={'/episodes/' + episode.id} className="episode-card">
                <img src={episode.image} alt={episode.id} />
                <div className="episode-tag">
                  <h2>{episode.name}</h2>
                  <h3>{episode.tagline}</h3>
                  <p>
                    <strong>Created by: </strong>
                    {episode.contributed_by}
                  </p>
                </div>
              </Link>
              <hr style={{ height: '0.1px', margin: '0 20px' }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default EpisodeList;
