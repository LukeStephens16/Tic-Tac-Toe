let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let player1 = 'X';
let player2 = 'O';
let turnCounter = 0;
let winningMsg = document.getElementById('data-winning-message-text')
let restart = document.getElementById('restartButton')

restart.addEventListener('click', 
function () {window.location.reload()})

function cellClicked() {
    if (event.target.textContent === "") {
        turnCounter++;
        event.target.textContent = player1;
        togglePlayer();
        checkWin();
    }
}

function togglePlayer() {
    if (player1 === "X") {
      player1 = "O";
      player2 ="X";
    } else {
      player1 = "X";
      player2 = "O";
    }
}

function checkWin() {
    if (
        cells[0].textContent === cells[1].textContent &&
        cells[1].textContent === cells[2].textContent &&
        cells[0].textContent === cells[2].textContent &&
        cells[0].textContent !== ""
    ) {
        return winningMsg.innerText = player2 + " won!";  
    } else if (turnCounter === 9) {
        return winningMsg.innerText = "It's a draw"; 
      
      } else if (
        cells[3].textContent === cells[4].textContent &&
        cells[4].textContent === cells[5].textContent &&
        cells[3].textContent === cells[5].textContent &&
        cells[3].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!"; 
        } else if (turnCounter === 9) {
        return winningMsg.innerText = "It's a draw";
      }
    
      else if (
        cells[6].textContent === cells[7].textContent &&
        cells[7].textContent === cells[8].textContent &&
        cells[6].textContent === cells[8].textContent &&
        cells[6].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
       } else if (turnCounter === 9) {
        return winningMsg.innerText = "It's a draw";
      } else if (
        cells[0].textContent === cells[3].textContent &&
        cells[3].textContent === cells[6].textContent &&
        cells[0].textContent === cells[6].textContent &&
        cells[0].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[1].textContent === cells[4].textContent &&
        cells[4].textContent === cells[7].textContent &&
        cells[1].textContent === cells[7].textContent &&
        cells[1].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[2].textContent === cells[5].textContent &&
        cells[5].textContent === cells[8].textContent &&
        cells[2].textContent === cells[8].textContent &&
        cells[2].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[0].textContent === cells[4].textContent &&
        cells[4].textContent === cells[8].textContent &&
        cells[4].textContent === cells[8].textContent &&
        cells[0].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[2].textContent === cells[4].textContent &&
        cells[4].textContent === cells[6].textContent &&
        cells[2].textContent === cells[6].textContent &&
        cells[2].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      }
    }
=======
let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let player1 = 'X';
let player2 = 'O';
let turnCounter = 0;
let winningMsg = document.getElementById('data-winning-message-text')
let restart = document.getElementById('restartButton')

restart.addEventListener('click', 
function () {window.location.reload()})

function cellClicked() {
    if (event.target.textContent === "") {
        turnCounter++;
        event.target.textContent = player1;
        togglePlayer();
        checkWin();
    }
}

function togglePlayer() {
    if (player1 === "X") {
      player1 = "O";
      player2 ="X";
    } else {
      player1 = "X";
      player2 = "O";
    }
}

function checkWin() {
    if (
        cells[0].textContent === cells[1].textContent &&
        cells[1].textContent === cells[2].textContent &&
        cells[0].textContent === cells[2].textContent &&
        cells[0].textContent !== ""
    ) {
        return winningMsg.innerText = player2 + " won!";  
    } else if (turnCounter === 9) {
        return winningMsg.innerText = "It's a draw"; 
      
      } else if (
        cells[3].textContent === cells[4].textContent &&
        cells[4].textContent === cells[5].textContent &&
        cells[3].textContent === cells[5].textContent &&
        cells[3].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!"; 
        } else if (turnCounter === 9) {
        return winningMsg.innerText = "It's a draw";
      }
    
      else if (
        cells[6].textContent === cells[7].textContent &&
        cells[7].textContent === cells[8].textContent &&
        cells[6].textContent === cells[8].textContent &&
        cells[6].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
       } else if (turnCounter === 9) {
        return winningMsg.innerText = "It's a draw";
      } else if (
        cells[0].textContent === cells[3].textContent &&
        cells[3].textContent === cells[6].textContent &&
        cells[0].textContent === cells[6].textContent &&
        cells[0].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[1].textContent === cells[4].textContent &&
        cells[4].textContent === cells[7].textContent &&
        cells[1].textContent === cells[7].textContent &&
        cells[1].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[2].textContent === cells[5].textContent &&
        cells[5].textContent === cells[8].textContent &&
        cells[2].textContent === cells[8].textContent &&
        cells[2].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[0].textContent === cells[4].textContent &&
        cells[4].textContent === cells[8].textContent &&
        cells[4].textContent === cells[8].textContent &&
        cells[0].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      } else if (
        cells[2].textContent === cells[4].textContent &&
        cells[4].textContent === cells[6].textContent &&
        cells[2].textContent === cells[6].textContent &&
        cells[2].textContent !== ""
      ) {
        return winningMsg.innerText = player2 + " won!";  
      } else if (turnCounter === 9) {
       return winningMsg.innerText = "It's a draw";
      }
    }
>>>>>>> 44c25d452b3cc159061ba8d184729bcc6d1981a0
