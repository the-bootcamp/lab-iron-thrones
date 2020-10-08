import React from "react";
import { Link } from "react-router-dom";
export default class Seasons extends React.Component {
  state = {
    results: [],
    seasonNumber: 0,
  };

  handleOnClick = (event) => {
    this.setState(
      {
        seasonNumber: parseInt(event.target.innerText),
      },
      () => {
        this.searchEpisodes();
      }
    );
  };

  searchEpisodes = () => {
    this.setState({
      results: this.props.episodes.filter(
        (episode) => episode.season === this.state.seasonNumber
      ),
    });
  };

  render() {
    const results = this.state.results;

    return (
      <div className="container">
        <h3>Seasons</h3>

        <div>
          <button onClick={this.handleOnClick}>1</button>
          <button onClick={this.handleOnClick}>2</button>
          <button onClick={this.handleOnClick}>3</button>
          <button onClick={this.handleOnClick}>4</button>
          <button onClick={this.handleOnClick}>5</button>
          <button onClick={this.handleOnClick}>6</button>
          <button onClick={this.handleOnClick}>7</button>
          <button onClick={this.handleOnClick}>8</button>
        </div>

        <div>
          {results.map((episode) => (
            <div className="card" key={episode.id}>
              <img src={episode.image.medium} alt={episode.name} />
              <div className="episode-details">
                <h2>{episode.name}</h2>
                <div className="episode">
                  <strong>Season:</strong> {episode.season}
                  <strong>Episode:</strong> {episode.number}
                </div>

                <Link to={`/details/${episode.id}`}>Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
