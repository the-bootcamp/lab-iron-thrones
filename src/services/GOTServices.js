import axios from "axios";

const gotAxiosService = axios.create({
  baseURL: "https://got-mock-api.herokuapp.com/episodes",
});

export const getAllGOTEpisodes = async () => {
  try {
    return (await gotAxiosService.get("/")).data;
  } catch (error) {
    return error;
  }
};
