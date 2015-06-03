describe ("Player", function() {
  it("will display player stats", function() {
    var player1 = new Player("Spiderman", 5, 30);
    expect(player1.playerName).to.equal("Spiderman");
    expect(player1.turnScore).to.equal(5);
    expect(player1.totalScore).to.equal(30);
  });

  it("will return a value between 1 and 6", function() {
    var player1 = new Player("Spiderman", 0, 0);
    var rollValue = player1.roll();
    expect([1,2,3,4,5,6]).to.contain(rollValue);
  });

  it("will return a value of 0 if a roll is 1", function() {
    var player1 = new Player("Spiderman", 0, 0);
    var rollValue = 1;
    expect(player1.turnScore).to.equal(0);
  });

  it("it will return rollValue as turn score if rollValue > 1", function() {
    var player1 = new Player("Spiderman", 0, 0);
    var turnScore = player1.roll();
    expect([0, 2, 3, 4, 5, 6]).to.contain(player1.turnScore);
  });

  it("it will accumulate roll values in turnScore for multiple rolls if rollValue >1", function() {
    var player1 = new Player("Spiderman", 0, 0);
    var rollValue1 = player1.roll();
    var rollValue2 = player1.roll();
    expect([0,4,5,6,7,8,9,10,11,12]).to.contain(player1.turnScore);
  });

  it("it will turn the turn score into the total score", function() {
    var player1 = new Player("Spiderman", 0, 0);
    var rollValue1 = player1.roll();
    var rollValue2 = player1.roll();
    player1.score();
    expect([0,4,5,6,7,8,9,10,11,12]).to.contain(player1.totalScore);
  });
});
