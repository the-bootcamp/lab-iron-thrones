import axios from 'axios';

const service = axios.create({
    baseURL: 'https://got-mock-api.herokuapp.com/episodes' 
});

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