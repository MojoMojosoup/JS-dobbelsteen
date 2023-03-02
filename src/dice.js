const history = {
  rolls: [],
  times: [0,0,0,0,0,0]
};
    
const rollDice = (e) => {
  const rolled = Math.ceil(Math.random() * 6);
  history.rolls.push(rolled);
  document.getElementById("dieImg").src = `img/die${rolled}.png`;
  document.getElementById("averageText").innerText = `Average roll: ${average()}`;
  updateRolledAmounts(rolled);
  console.log(`Rolled: ${rolled}`);
}

const average = () => {
  let total = 0;
  for (let i = 0; i < history.rolls.length; i++) {
    total += history.rolls[i];
  }
  return Math.round((total / history.rolls.length) * 1000) / 1000;
}

function updateRolledAmounts(rolled) {
  history.times[rolled-1] += 1;
  const rolledEl = document.getElementById(`rolled${rolled}`);
  rolledEl.innerText = history.times[rolled - 1];
}
