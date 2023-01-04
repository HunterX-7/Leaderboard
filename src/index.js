import './style.css';
import Score from './modules/score.js';
import addScore from './modules/addScore.js';
import listScore from './modules/interface.js';

// Elements

const list = document.getElementById('score-list');
const form = document.getElementById('form');

// Array of scores

const scores = [];

// interface

listScore(scores, list);

// form event

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const newScore = new Score(name, score);
  addScore(scores, newScore);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
  listScore(scores, list);
});