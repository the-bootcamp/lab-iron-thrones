import React from "react";
import { getDetails } from "../services";
import { Link } from "react-router-dom";

class Details extends React.Component {
  state = {
    details: [],
  };

  //store episode ID from props params into singleEpisode
  singleEpisode = this.props.match.params.details;

  componentDidMount = () => {
    this.fetchData(this.singleEpisode);
  };

  //Set state details with response from Api call
  fetchData = async (id) => {
    try {
      const details = await getDetails(id);
      this.setState(
        {
          details,
        },
        () => {
          console.log(details);
        }
      );
    } catch (error) {
      console.log(`Error setting state Details `, error);
    }
  };

  render() {
    const details = this.state.details;

    return (
      <div className="container">
        <div className="card">
          <div className="episode-details">
            <h2>{details.name}</h2>
            <div className="episode">
              <strong>Season:</strong> {details.season}
              <strong>Episode:</strong> {details.number}
            </div>
            <div>
              <h3>Summary</h3>
              <p>{details.summary}</p>
            </div>
            <div className="air-date">Original Air Date: {details.airdate}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
