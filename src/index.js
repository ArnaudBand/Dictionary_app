import './style.css';

const wrapper = document.querySelector('.wrapper');
const inputText = document.querySelector('input');
const infoText = document.querySelector('.info-text');
const container = document.querySelector('.ul');
const wordP = document.querySelector('.word p');
const wordSpan = document.querySelector('.word span');
const meaningsSpan = document.querySelector('.meaning span');
const exampleSpan = document.querySelector('.example span');
console.log(container);

const displayUI = (result, word) => {
  if (result.title) {
    infoText.innerHTML = `Can't find the meaning of <span>'${word}'</span>. Please, try another word.`;
  } else {
    console.log('result', result);
    wrapper.classList.add('active');
    // let definition = result[0].meanings[0].definitions[0];
    wordP.innerHTML = result[0].word;
    wordSpan.innerHTML = `${result[0].meanings[0].partOfSpeech}/${result[0].phonetic}`;
    meaningsSpan.innerHTML = result[0].meanings[0].definitions[0].definition;
    exampleSpan.innerHTML = result[0].meanings[0].definitions[0].example;
  }
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
