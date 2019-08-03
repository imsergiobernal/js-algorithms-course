const countdown = (number) => {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}

countdown(5);


const recursiveCountdown = (number) => {
    console.log(number);

    number--;

    if (number + 1 > 0) recursiveCountdown(number);
}

recursiveCountdown(5);