const history = {
  rolls: [],
  times: [ 0, 0, 0, 0, 0, 0 ],
  get average() {
    let total = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      total += this.rolls[i];
    }
    return Math.round((total / this.rolls.length) * 1000) / 1000;
  },
  set newRoll(rolled) {
    this.rolls.push(rolled);
    this.times[rolled - 1] += 1;
  }
};
    
const rollDice = (e) => {
  const rolled = Math.ceil(Math.random() * 6);
  history.newRoll = rolled;
  document.getElementById("dieImg").src = `img/die${rolled}.png`;
  document.getElementById("averageText").innerText = `Average roll: ${history.average}`;
  document.getElementById(`rolled${rolled}`).innerText = history.times[rolled-1];
  console.log(`Rolled: ${rolled}`);
}
