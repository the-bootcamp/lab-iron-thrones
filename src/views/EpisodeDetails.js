import React from "react";
import { Link } from "react-router-dom";

const episodeDetails = (props) => {
  console.log(props);
  const reqID = props.match.params.id;
  const reqEpisode = props.episodes.filter((ep) => ep.id === parseInt(reqID));
  console.log(reqEpisode[0]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img src={reqEpisode[0].image.medium} atl="" />
          <h1> {reqEpisode[0].name}</h1>
        </div>
        <div className="col-lg-8">
          <p>
            <strong> Episode details: </strong> Season: {reqEpisode[0].season}{" "}
            Episode Number: {reqEpisode[0].number}
          </p>
          <p>
            <strong> Summary: </strong> {reqEpisode[0].summary}
          </p>
          <p>
            <a href={reqEpisode[0].url}> Watch Episode </a>
          </p>
          <p>
            <strong> Runtime: </strong> {reqEpisode[0].runtime}
          </p>
          <p>
            <strong> Airdate: </strong> {reqEpisode[0].airdate}
          </p>
        </div>
        <Link to="/all">
          <h3> All Episodes </h3>
        </Link>
      </div>
    </div>
  );
};
export default episodeDetails;
