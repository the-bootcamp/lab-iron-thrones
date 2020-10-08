import axios from 'axios';

const service = axios.create({
    baseURL: 'https://got-mock-api.herokuapp.com/episodes' 
});

export const getAllEpisodes = () => {
    return http.get('/episodes')
        .then(response => response.data)
}

export const getSpecificEpisode = (id) => {
    return http.get('/specific-episode')
        .then(response => response.data)

}