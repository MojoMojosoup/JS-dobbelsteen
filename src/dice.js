const diceHistory = [];
const finalDegrees = [
  [0, 0, 0],
  [90, 0, 0],
  [90, 0, 90],
  [90, 0, 270],
  [90, 0, 180],
  [180, 0, 0]
];

function rollDice(e) {
  const rolled = Math.ceil(Math.random() * 6);
  diceHistory.push(rolled);
  let dice = document.querySelector('div.dice');
  const y = finalDegrees[rolled-1][0], x = finalDegrees[rolled-1][1], z = finalDegrees[rolled-1][2];
  dice.animate([
    { composite: 'auto' },
    { transform: `translateY(-150px) rotateY(${y - Math.random() *240}deg) rotateX(${x -Math.random() * 240}deg) rotateZ(${z - Math.random() *240}deg)` },
    { transform: `translateY(0px) rotateY(${y - Math.random() *160}deg) rotateX(${x - Math.random() *160}deg) rotateZ(${z - Math.random() *160}deg)` },
    { transform: `translateY(-70px) rotateY(${y - Math.random() * 80}deg) rotateX(${x -Math.random() * 80}deg) rotateZ(${z -Math.random() * 80}deg)` },
    { transform: `translateY(0px) rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z}deg)` },
  ],
    { iterations: 1, duration: 1000, fill: 'forwards', easing: 'ease-out'}
  );
  document.querySelector("#averageText").innerText = `Average roll: ${getAverage()}`;
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
