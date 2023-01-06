import './style.css';
// import addScore from './modules/addScore.js';
// import listScore from './modules/interface.js';
// import Score from './modules/score.js';
import postData from './modules/postData.js';
import getData from './modules/getData.js';

// Elements

const list = document.getElementById('score-list');
const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

// display list

const displayData = async () => {
  const scores = await getData();
  let scoreRow = '';
  scores.forEach((score) => {
    scoreRow += `
        <tr>
            <td>${score.user}</td>
            <td>${score.score}</td> 
        </tr>
        `;
    list.innerHTML = scoreRow;
  });
};

// form event

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  postData(user, score);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

// refresh event

refresh.addEventListener('click', async () => {
  displayData();
});