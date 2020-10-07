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
      <div>
        <div>{details.name}</div>
        <div>Episode: {details.number}</div>
        <div>Season: {details.season}</div>
        <div>Summary: {details.summary}</div>
        <div>Original Air Date: {details.airdate}</div>
        <div>Original Air Date: {details.airdate}</div>
        <Link to="/allepisodes">Back</Link>{" "}
      </div>
    );
  }
}

export default Details;
