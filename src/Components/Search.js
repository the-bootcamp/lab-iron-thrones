import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  state = {
    searchParams: "",
    results: [],
  };

  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.searchEpisodes();
      }
    );
  };

  searchEpisodes = () => {
    this.setState({
      results: this.props.episodes.filter((episode) =>
        episode.name
          .toLocaleLowerCase()
          .includes(this.state.searchParams.toLocaleLowerCase())
      ),
    });
  };

  render() {
    const results = this.state.results;
    return (
      <div className="container">
        <h3>Search</h3>
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
            name="searchParams"
            value={this.state.searchParams}
            onChange={this.handleOnChange}
          />
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
