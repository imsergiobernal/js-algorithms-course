exports.shortedArrayGenerator = (amount) => {
    const multiplier = Math.round(Math.random() * 10) * 10;
    let beginningNumber = Math.round(Math.random() * 10) * multiplier;
    beginningNumber = Math.round(Math.random()) === 0 ? Math.abs(beginningNumber) : -Math.abs(beginningNumber);

    const array = [];
    for (let i = 0; i < amount; i++) {
        if (i === 0) {
            array.push(beginningNumber);
            continue;
        }
        const add = Math.round(Math.random() * 10);
        const hasToRepeat = Math.round(Math.random()) === 0 ? false : true;
        hasToRepeat ? array.push(array[i - 1]) : array.push(array[i - 1] + add);
    }
    return array;
}