let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function addHome(number) {
    homeScore += number 
    homeScoreEl.textContent = homeScore
}

function addGuest(number) {
    guestScore += number 
    guestScoreEl.textContent = guestScore
}

// function addToScore(scoreId, amount) {
//     const scoreEl = document.getElementById(scoreId);
//     const currentScore = Number(scoreEl.textContent)
//     scoreEl.textContent = currentScore + amount;
// }
