import React from "react";
import { getAllEpisodes } from "../../services/GotService";
import EpisodesList from "../EpisodesList/EpisodesList";
import SearchBar from "../SearchBar/SearchBar";
import SeasonFilter from "../SeasonFilter/SeasonFilter";

export default class Home extends React.Component {
  state = {
    episodesList: [],
    srchResults: [],
    season: null,
  };

  componentDidMount() {
    getAllEpisodes()
      .then((episodesList) => {
        this.setState({
          episodesList: episodesList,
          srchResults: episodesList,
        });
        return console.log("component mounted", this.state.episodesList);
      })
      .catch((error) => console.log(error));
  }

  handleSearch = (value) => {
    const srchResults = this.state.episodesList.filter((singleEpisode) =>
      singleEpisode.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      srchResults: srchResults,
    });
  };

  filterBySeason = (season) => this.setState({ season });

  render() {
    const { srchResults, season } = this.state;
    const episodesToShow = srchResults.filter(
      (singleEpisode) =>
        season === null || Number(season) === singleEpisode.season
    );
    return (
      <>
        <SearchBar onHandleSearch={this.handleSearch} />
        <SeasonFilter onFilterSeason={this.filterBySeason} />

        <div className='row'>
          <div className='col-12 p-4'>
            <EpisodesList episodesList={episodesToShow} />
          </div>
        </div>
      </>
    );
  }
}
