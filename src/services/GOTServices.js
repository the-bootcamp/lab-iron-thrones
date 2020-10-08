import axios from 'axios';

const service = axios.create({
  baseURL: 'https://got-mock-api.herokuapp.com/episodes',
});

export const getAllEpisodes = async () => {
  const response = await service.get('/');
  return response.data;
};

export const getEpisodeDetails = async (id) => {
  const response = await service.get('/' + id);
  return response;
};
// export const filterEpisodes = async (query) => {
//   const response = await service.get('/search?q=' + query);
//   return response.data;
// };
