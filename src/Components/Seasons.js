import React from "react";
import { Link } from "react-router-dom";
export default class Seasons extends React.Component {
  state = {
    results: [],
    seasonNumber: 1,
  };
  handleChange = this.handleChange.bind(this);

  // handleOnClick = (event) => {
  //   this.setState(
  //     {
  //       seasonNumber: parseInt(event.target.innerText),
  //     },
  //     () => {
  //       this.searchEpisodes();
  //     }
  //   );
  // };

  componentDidMount = () => {
    this.setState({ seasonNumber: 1 }, () => {
      this.searchEpisodes();
    });
  };

  searchEpisodes = () => {
    this.setState({
      results: this.props.episodes.filter(
        (episode) => episode.season === this.state.seasonNumber
      ),
    });
  };

  handleChange(event) {
    this.setState({ seasonNumber: parseInt(event.target.value) }, () => {
      this.searchEpisodes();
    });
  }

  render() {
    const results = this.state.results;

    return (
      <div className="container">
        <h3>Season</h3>

        {/* <div>
          <button onClick={this.handleOnClick}>1</button>
          <button onClick={this.handleOnClick}>2</button>
          <button onClick={this.handleOnClick}>3</button>
          <button onClick={this.handleOnClick}>4</button>
          <button onClick={this.handleOnClick}>5</button>
          <button onClick={this.handleOnClick}>6</button>
          <button onClick={this.handleOnClick}>7</button>
          <button onClick={this.handleOnClick}>8</button>
        </div> */}

        <form>
          <select value={this.state.value} onChange={this.handleChange}>
            <option default value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </form>

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
