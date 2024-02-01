import axios from 'axios';

const apiKey = '08034ee7e8msh868310a7dfb49d6p1bbc03jsn502dc6885f99';

const weatherApi = axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
});

export const searchWeather = async (query) => {
  try {
    const response = await weatherApi.get('/current.json', {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
