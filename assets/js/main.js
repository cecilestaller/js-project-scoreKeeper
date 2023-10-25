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