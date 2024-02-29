let compImages = [
    {path:"./assets/rock-hand.png",id:"rock"},
    {path:"./assets/paper-hand.png",id:"paper"},
    {path:"./assets/scissors-hand.png",id:"scissors"}
];

let playerCount = 0;
let compCount = 0;

function getRandomCompImage() {
    let randomIndex = Math.floor(Math.random() * compImages.length);
    return {path:compImages[randomIndex].path,id:compImages[randomIndex].id};
}

function chooseHand(playerChoice) {
    let playerHandDiv = document.getElementById("player-hand");
    let compHandDiv = document.getElementById("comp-hand");

    
    let playerImage = document.getElementById(`${playerChoice}`);
    let compChoice = getRandomCompImage();

    playerHandDiv.innerHTML = `<img src="./assets/${playerChoice}-hand.png" alt="Your Hand">`;
    compHandDiv.innerHTML = `<img src="${compChoice.path}" alt="Computer's Hand">`;

    console.log(playerImage.id, compChoice.id)
    if (playerImage.id === compChoice.id) {
    } else if (
        (playerImage.id =="rock" && compChoice.id =="scissors") ||
        (playerImage.id == "paper" && compChoice.id == "rock") ||
        (playerImage.id == "scissors" && compChoice.id == "paper")
    ) {
        playerCount++;
    } else {
        compCount++;
    }


    updateScoreDisplay(playerCount, compCount);
}

function updateScoreDisplay(playerCount, compCount) {
    let yourScore = document.getElementById("yourScore");
    let comScore = document.getElementById("comScore");
    yourScore.textContent = playerCount;
    comScore.textContent = compCount;
    checkResults(playerCount, compCount)
}


function checkResults(playerCount, compCount) {
    if (playerCount === 5) {
        winner("You win!");
        chooseHand = function() {
            return;
        };
        
    } else if (compCount === 5) {
        winner("Computer wins!");
        chooseHand = function() {
            return;
        };
    }
}


function winner(winner) {
    let winnerDiv = document.createElement("div");
    winnerDiv.className = "winner";
    winnerDiv.innerHTML = `<h1>${winner}</h1><button onclick="restartGame()">Restart</button>`;
    document.body.appendChild(winnerDiv);
}


function restartGame() {
    location.reload();
}
