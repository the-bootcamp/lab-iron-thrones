import React from "react";
import { getAllEpisodes } from "../../services/GotService";
import EpisodesList from "../EpisodesList/EpisodesList";

export default class Home extends React.Component {
  state = {
    episodesList: [],
    season: null,
    searchResults: [],
  };

  componentDidMount() {
    getAllEpisodes()
      .then((episodesList) => {
        return this.setState({ episodesList: episodesList });
      })
      .catch((error) => console.log(error));
    console.log("component mounted");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12 p-4'>
          <EpisodesList episodesList={this.state.episodesList} />
        </div>
      </div>
    );
  }
}
