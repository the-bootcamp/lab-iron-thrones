import React from "react";
import SingleEpisode from "../SingleEpisode/SingleEpisode";

const EpisodesList = (props) => {
  console.log("props: ", props);

  const list = props.episodesList.map((episode) => {
    return (
      <div className='col-3 mb-4' key={episode.id}>
        <SingleEpisode episode={episode} />
      </div>
    );
  });

  return (
    <>
      <h3>All episodes</h3>
      <div className='row'>{list}</div>
    </>
  );
};

export default EpisodesList;
