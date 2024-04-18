export function calculateProbability(numberOfAllPossibilities) {
    if (numberOfAllPossibilities <= 0) {
        throw new Error("numberOfAllPossibilities must be greater than 0");
    }
    const winProbability = 1 / numberOfAllPossibilities;
    const loseProbability = (numberOfAllPossibilities - 1) / numberOfAllPossibilities;
    return winProbability / (1 - Math.pow(loseProbability * loseProbability, numberOfAllPossibilities));
}

export function calculatePossibilities(k) {
    if (k < 6 || k > 99) {
        throw new Error("k must be between 6 and 99");
    }
    let possibilities = []
    for (let i = 6; i <= k; i++) {
        possibilities.push(calculateProbability(i))
    }
    return possibilities
}
