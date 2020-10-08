import React from 'react';
import { getEpisodeDetails } from '../../services/GOTServices';

class EpisodeDetails extends React.Component {
  state = {
    episode: {},
  };
  componentDidMount = () => {
    const id = this.props.match.params.id;
    console.log('this props ', this.props);
    getEpisodeDetails(id).then((response) => {
      this.setState({
        episode: response.data,
      });
    });
  };
  render() {
    if (!this.state.episode.image) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <div className="container">
          <h2>{this.state.episode.name}</h2>
          <img className="img-fluid" src={this.state.episode.image.original} />
          <h6>Season #{this.state.episode.season} </h6>
          <h6> Episode #{this.state.episode.number}</h6>
          <h6>
            <b>Duration: </b>
            {this.state.episode.runtime} min
          </h6>
          <h6>
            <b>First aired at: </b>
            {this.state.episode.airdate} min
          </h6>
          <p>{this.state.episode.summary}</p>
        </div>
      </div>
    );
  }
}
export default EpisodeDetails;
