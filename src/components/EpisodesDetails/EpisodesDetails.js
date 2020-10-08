import React from "react";
import { Link, Redirect } from "react-router-dom";
import { getSingleEpisode } from "../../services/GotService";

export default class EpisodeDetails extends React.Component {
  state = {
    episode: [],
  };

  componentDidMount() {
    getSingleEpisode(this.props.match.params.id)
      .then((episode) => {
        console.log("response", episode);
        this.setState({ episode: episode });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { episode } = this.state;
    console.log(episode);
    const summary = episode.summary
      ? episode.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")
      : "";

    const image = episode.image
      ? episode.image.medium
      : this.props.defaultImage;

    return (
      <>
        <div className='row mb-3 mt-3'>
          <div className='col-xs-12 col-sm-4 mt-3'>
            <img src={image} className='imf-fluid' alt={episode.name} />
          </div>
          <div className='col-xs-12 col-sm-8'>
            <h2>{episode.name}</h2>
            <h4>
              S{episode.season} E{episode.number}
            </h4>
            <div className='text-left'>
              <p>
                <strong>Summary</strong>: {summary}
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div>
            <Link to='/'>Back to list</Link>
          </div>
        </div>
      </>
    );
  }
}

EpisodeDetails.defaultProps = {
  defaultImage: "https://via.placeholder.com/350x197",
};
