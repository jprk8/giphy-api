import './style.css';

const img = document.querySelector('img');
const btn = document.querySelector('button');
const search = document.getElementById('search');
const status = document.querySelector('.status');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  // My key: cjGdfLDepHC3ULDf9t46kOHUSAzgEZ51
  const url =
    'https://api.giphy.com/v1/gifs/translate?api_key=cjGdfLDepHC3ULDf9t46kOHUSAzgEZ51&s=' +
    search.value;
  fetch(url, { mode: 'cors' })
    .then(function (response) {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(function (response) {
      if (response.data.length === 0) {
        status.textContent = 'GIF not found';
        img.src = '#';
      } else {
        status.textContent = '';
        console.log(response);
        img.src = response.data.images.original.url;
      }
    })
    .catch(function (error) {
      console.log(error);
      status.textContent = `Could not load GIF: (${error})`;
    });
});
