import axios from "axios";

const service = axios.create({
  baseURL: "https://got-mock-api.herokuapp.com",
});

export const getAllEpisodes = async () => {
  try {
    const response = await service.get("/episodes");
    const episodes = response.data;
    return episodes;
  } catch (error) {
    return console.log(`Err while getting all episodes: `, error);
  }
};

export const getSingleEpisode = async (id) => {
  try {
    const response = await service.get(`/episodes/${id}`);
    const singleEpisode = response.data;
    return singleEpisode;
  } catch (error) {
    return console.log(`Err while getting details of episode: `, error);
  }
};
