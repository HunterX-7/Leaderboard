import './style.css';
// import addScore from './modules/addScore.js';
// import listScore from './modules/interface.js';
// import Score from './modules/score.js';
import postData from './modules/postData.js';

// Elements

const list = document.getElementById('score-list');
const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

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
  // const scores = await getData();
  const row = document.createElement('tr');
  scores.forEach((score) => {
    row.innerHTML = `
            <td>${score.user}</td>
            <td>${score.score}</td>
            <td></td>
            <td></td>  
        `;
    list.appendChild(row);
  });
})