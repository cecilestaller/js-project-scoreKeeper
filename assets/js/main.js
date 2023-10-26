"use strict";

const scoreHome = document.body.querySelector('#homeScore');
const scoreAway = document.body.querySelector('#awayScore');

console.log(scoreHome);

const homeScoreChange = (points) => {
    scoreHome.innerText = Number(scoreHome.innerText) + points;
}

const awayScoreChange = (points) => {
    scoreAway.innerText = Number(scoreAway.innerText) + points;
}

const resetButton = () => {
    scoreAway.innerText = 0;
    scoreHome.innerText = 0;
}

// ===== Bonus --> modales Fenster
// ist ein fenster, was weitere user interaktionen blockt, bis es weggeklickt wird.

let homeTeam = document.body.querySelector('#home-team');
let awayTeam = document.body.querySelector('#away-team');

const setTeams = () => {
    const homeTeamName = window.prompt("Gib einen Teamnamen für Home ein");
    const awayTeamName = window.prompt("Gib einen Teamnamen für Away ein");
    homeTeam.textContent = homeTeamName;
    awayTeam.textContent = awayTeamName;

}