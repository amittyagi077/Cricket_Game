let score = {
  win: 0,
  lost: 0,
  tie: 0,
};

function playGame(userMove) {
  const computerMove = generateComputerChoice();
  const result = getResult(userMove, computerMove);

  // UI Elements fetch karna
  const resultArea = document.getElementById("result-area");
  const movesDesc = document.getElementById("moves-desc");
  const outcomeText = document.getElementById("outcome-text");

  resultArea.style.display = "block";

  movesDesc.innerText = `You: ${userMove} ⚔️ Computer: ${computerMove}`;
  outcomeText.innerText = result;

  outcomeText.className = "";
  if (result.includes("Won")) {
    outcomeText.style.color = "#4dfd7d";
  } else if (result.includes("Lost")) {
    outcomeText.style.color = "#ff6b6b";
  } else {
    outcomeText.style.color = "#ffd93d";
  }

  updateScoreUI();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber <= 1) return "Bat";
  if (randomNumber <= 2) return "Ball";
  return "Stump";
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "You Won! 🏆";
    } else if (computerMove === "Bat") {
      score.tie++;
      return "It's a tie! 🤝";
    } else {
      score.lost++;
      return "Computer Won! 🤖";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Stump") {
      score.win++;
      return "You Won! 🏆";
    } else if (computerMove === "Ball") {
      score.tie++;
      return "It's a tie! 🤝";
    } else {
      score.lost++;
      return "Computer Won! 🤖";
    }
  } else {
    if (computerMove === "Bat") {
      score.win++;
      return "You Won! 🏆";
    } else if (computerMove === "Stump") {
      score.tie++;
      return "It's a tie! 🤝";
    } else {
      score.lost++;
      return "Computer Won! 🤖";
    }
  }
}

function updateScoreUI() {
  document.getElementById("score-text").innerText =
    `Won: ${score.win} | Lost: ${score.lost} | Tie: ${score.tie}`;
}

function resetScore() {
  score = { win: 0, lost: 0, tie: 0 };
  updateScoreUI();
  document.getElementById("result-area").style.display = "none";
}
