const listScore = (scores, list) => {
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
};

export default listScore;