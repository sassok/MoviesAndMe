const API_TOKEN = "6e0d9b57746f9eb6a31937c692cf7002";

const getFilmsFromApiWithSearchedText = (text) => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export default getFilmsFromApiWithSearchedText;