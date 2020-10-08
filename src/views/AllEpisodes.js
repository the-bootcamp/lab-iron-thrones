import React from "react";
import { Link } from "react-router-dom";
import "./AllEpisodes.css";

const allEpisodes = (props) => {
  return (
    <div className="card-group d-flex flex-row  flex-wrap justify-content-around">
      {props.episodes.map((episode) => {
        return (
          <div key={episode.id} className=" w-25 order-3  p-2  ">
            <img className="card-img" src={episode.image.medium} alt=" " />
            <Link to={`/episode/${episode.id}`}>
              <h2 className="card-title  text-wrap text-weight-normal text-info">
                {episode.name}
              </h2>
            </Link>
            <a href={episode.url}> Watch Episode</a>
          </div>
        );
      })}
    </div>
  );
};

export default allEpisodes;
