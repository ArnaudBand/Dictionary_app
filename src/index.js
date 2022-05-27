import './style.css';

// const wrapper = document.querySelector('.wrapper');
const inputText = document.querySelector('input');
const infoText = document.querySelector('.info-text');

const displayUI = (result, word) => {
    
};

const fetchData = async (word) => {
  infoText.innerHTML = `The meaning of ${word}`;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url);
  const res = await response.json();
  displayUI(res, word);
};

inputText.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && e.target.value) {
    fetchData(e.target.value);
  }
});
