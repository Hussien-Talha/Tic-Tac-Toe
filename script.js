// script.js
let currentPlayer = 'X';
let gameOver = false;

const clickSound = new Audio('click.mp3');

function makeMove(cell) {
  if (cell.innerText === '' && !gameOver) {
    cell.innerText = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('message').innerText = `It's ${currentPlayer}'s turn`;

    clickSound.play();

    if (checkWinner()) {
      gameOver = true;
      const winner = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('message').innerText = `${winner} Wins!`;
      setTimeout(resetGame, 5000); // Wait for 5 seconds and reset the game
    } else if ([...document.getElementsByClassName('cell')].every(cell => cell.innerText !== '')) {
      gameOver = true;
      document.getElementById('message').innerText = "It's a draw!";
      setTimeout(resetGame, 5000); // Wait for 5 seconds and reset the game
    }
  }
}

function resetGame() {
  // Reset cells and message
  [...document.getElementsByClassName('cell')].forEach(cell => (cell.innerText = ''));
  document.getElementById('message').innerText = `It's X's turn`;

  // Reset game variables
  currentPlayer = 'X';
  gameOver = false;
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      document.getElementsByClassName('cell')[a].innerText &&
      document.getElementsByClassName('cell')[a].innerText ===
      document.getElementsByClassName('cell')[b].innerText &&
      document.getElementsByClassName('cell')[a].innerText ===
      document.getElementsByClassName('cell')[c].innerText
    ) {
      return true;
    }
  }
  return false;
}