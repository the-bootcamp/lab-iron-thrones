import React from "react";
import { Link } from "react-router-dom";

class SingleEpisode extends React.Component {
  state = {
    expand: false,
  };

  readMore = (e) => {
    e.preventDefault();
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const { episode } = this.props;
    const { summary } = episode;
    const summaryFull = summary.replace(/<p>/g, "").replace(/<\/p>/g, "");
    const summaryBrief = summaryFull.slice(0, 70);
    return (
      <div className='card'>
        <Link to={`/episodes/${episode.id}`}>
          <img
            src={episode.image.medium}
            className='card-img-top'
            alt={episode.name}
          />
        </Link>
        <div className='card-body'>
          <h5 className='card-title'>{episode.name}</h5>
          <h6 className='card-title'>
            S{episode.season} E{episode.number}
          </h6>
          <p className='card-text'>
            {this.state.expand ? summaryFull : summaryBrief}
          </p>
          <a href='#' className='card-link' onClick={this.readMore}>
            {this.state.expand ? "Read Less" : "Read More"}
          </a>
        </div>
      </div>
    );
  }
}

export default SingleEpisode;
