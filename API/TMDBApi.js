import { API_KEY } from '@env';

const API_TOKEN = API_KEY;

const getFilmsFromApiWithSearchedText = (text) => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export default getFilmsFromApiWithSearchedText;