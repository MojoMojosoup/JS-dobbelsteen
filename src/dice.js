const diceHistory = [];
    
function rollDice(e) {
  const rolled = Math.ceil(Math.random() * 6);
  diceHistory.push(rolled);
  document.getElementById("dieImg").src = `img/die${rolled}.png`;
  document.getElementById("averageText").innerText = `Average roll: ${getAverage()}`;
  updateRolledAmounts(rolled);
  console.log(`Rolled: ${rolled}`);
}

function getAverage() {
  let total = 0;
  for (let i = 0; i < diceHistory.length; i++) {
    total += diceHistory[i];
  }
  return Math.round((total / diceHistory.length) * 1000) / 1000;
}

function updateRolledAmounts(rolled) {
  const eachRolled = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < diceHistory.length; i++) {
    eachRolled[diceHistory[i] - 1] += 1;
  }
  for (let i = 1; i < 7; i++) {
    const rolledEl = document.getElementById(`rolled${i}`);
    rolledEl.innerText = eachRolled[i - 1];
  }
}
