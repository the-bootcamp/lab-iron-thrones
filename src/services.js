import axios from "axios";

//make axios call to return all episodes
export const getAllEpisodes = async () => {
  try {
    const response = await axios.get(
      "https://got-mock-api.herokuapp.com/episodes"
    );
    const allEpisodesResponse = response.data;
    return allEpisodesResponse;
  } catch (error) {
    return console.log(`Error while getting all episodes `, error);
  }
};

//make axios call to return details
export const getDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://got-mock-api.herokuapp.com/episodes/${id}`
    );

    return response.data;
  } catch (error) {
    return console.log(`Error while getting Episode Details`, error);
  }
};
