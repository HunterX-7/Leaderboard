import './style.css';
// import addScore from './modules/addScore.js';
// import listScore from './modules/interface.js';
// import Score from './modules/score.js';

// Elements

const list = document.getElementById('score-list');
const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

// form event

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  // postData
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

// refresh event

refresh.addEventListener('click', async () => {
  // getData
  const row = document.createElement('tr');
  scores.forEach((score) => {
    row.innerHTML = `
            <td>${score.name}</td>
            <td>${score.score}</td>
            <td></td>
            <td></td>  
        `;
    list.appendChild(row);
  });
})