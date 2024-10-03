import './style.css';

const img = document.querySelector('img');
const btn = document.querySelector('button');
const search = document.getElementById('search');
const status = document.querySelector('.status');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  getGif();
});

async function getGif() {
  try {
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=cjGdfLDepHC3ULDf9t46kOHUSAzgEZ51&s=${search.value}`;
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const gifData = await response.json();
    if (gifData.data.length === 0) {
      status.textContent = 'GIF not found';
      img.src = '#';
    } else {
      status.textContent = '';
      console.log(response);
      img.src = gifData.data.images.original.url;
    }
  } catch (error) {
    console.log(error);
    status.textContent = `Could not load GIF: (${error})`;
  }
}
