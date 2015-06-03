function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function() {
  var turnScore = this.turnScore;
  var diceValues = [1, 2, 3, 4, 5, 6];
  var rollValue = diceValues[Math.floor(Math.random() * diceValues.length)];
  if (rollValue === 1) {
    turnScore = 0;
  } else {
    (turnScore = (rollValue + turnScore)) };
  return turnScore;
  return rollValue;
}

// Player.prototype.roll = function() {
//   var diceValues = [1, 2, 3, 4, 5, 6];
//   var rollValue = diceValues[Math.floor(Math.random() * diceValues.length)];
//   return rollValue;
// }
