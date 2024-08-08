function rps_play () {
    if (Math.random() <= (1 / 3)) {
        return "rock";
    }
    else if (Math.random() <= (2 / 3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

console.log(rps_play());
console.log(rps_play());
console.log(rps_play());
