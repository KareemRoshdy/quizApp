const tbody = document.getElementById("tbody");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

tbody.innerHTML = highScores
  .map((score) => {
    return `
    <tr>
    <td>${score.name}</td>
    <td>${score.points}/50</td>
    <td>${score.score}%</td>
 </tr>`;
  })
  .join("");
