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

function checkLargerGroup (num) {
    const numStr = num.toString();
    const numArr = numStr.split('');

    const numCount = Object.values(
        numArr.reduce( (acc, cur) => {
            acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
            return acc;
        }, {})
    );

    if (numCount.indexOf(2) === -1) {
        return false;
    }

    return true;
}

module.exports = {
    checkDecrease,
    checkAdjacent,
    checkLargerGroup,
}
