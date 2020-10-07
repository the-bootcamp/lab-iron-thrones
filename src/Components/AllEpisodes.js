import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function AllEpisodes(props) {
  return (
    <div>
      <h1>All Episodes</h1>
      <div>
        {props.episodes.map((episode) => (
          <div className="card" key={episode.id}>
            <img src={episode.image.medium} alt={episode.name} />
            <div className="episodeDetails">
              <h3>{episode.name}</h3>
              <div className="episode">
                <strong>Season:</strong> {episode.season}
                <strong>Episode:</strong> {episode.number}
              </div>

              <Link to={`/details/${episode.id}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
      {/* <Card style={{ width: "18rem" }} key={episode.id}>
            <Card.img src={episode.image.medium} alt={episode.name} />
            <Card.Body className="episodeDetails">
              <Card.Text>Season: {episode.season}</Card.Text>
              <Card.Text>Episode: {episode.number}</Card.Text>
              <Card.Title>{episode.name}</Card.Title>
              <Link to={`/details/${episode.id}`}>Details</Link>
            </Card.Body> */}
    </div>
  );
}
