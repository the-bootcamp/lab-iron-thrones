import React from "react";
import { Link } from "react-router-dom";

const Seasons = (props) => {
  let episodes = props.episodes;

  const seasons = episodes
    .map((ep) => ep.season)
    .filter((item, pos, self) => self.indexOf(item) === pos);

  const seasonTabs = (
    <div className="container">
      <ul className="nav nav-tabs">
        {seasons.map((tb) =>
          tb === 1 ? (
            <li className="active" key={tb}>
              <Link to={`/season/${tb}`}>Season {tb}</Link>
            </li>
          ) : (
            <li key={tb}>
              <Link to={`/season/${tb}`}>Season {tb}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );

  const reqSeasaon = props.match ? props.match.params.id : 1;

  const seasonEpisodes = episodes.filter(
    (episode) => episode.season === parseInt(reqSeasaon)
  );

  return (
    <div>
      {seasonTabs} {reqSeasaon}
      <div className="card-group d-flex flex-row  flex-wrap justify-content-around">
        {seasonEpisodes.map((episode) => {
          return (
            <div key={episode.id} className=" w-25 order-3  p-2  ">
              <img className="card-img" src={episode.image.medium} alt=" " />
              <Link to={`/episode/${episode.id}`}>
                <h2 className="card-title  text-wrap text-weight-normal text-info">
                  {episode.name}
                </h2>
              </Link>
              <a className="card-text" href={episode.url}>
                Watch Episode
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;
