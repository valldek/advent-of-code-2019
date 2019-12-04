function checkDecrease (num) {
    const numStr = num.toString();
    for (let i = 1; i < numStr.length; i++) {
        if (parseInt(numStr[i], 10) < parseInt(numStr[i-1], 10)) {
            return false;
        }
    }
    return true;
}

function checkAdjacent (num) {
    const numStr = num.toString();
    for (let i = 1; i < numStr.length; i++) {
        if (parseInt(numStr[i], 10) === parseInt(numStr[i-1], 10)) {
            return true;
        }
    }
    return false;
}

module.exports = {
    checkDecrease,
    checkAdjacent,
}
