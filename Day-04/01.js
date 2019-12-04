const fs = require('fs');
const path = require('path');

fs.readFile(
    path.join(__dirname, '/input.txt'),
    'utf-8',
    (err, data) => {
        if (err) {
            throw new Error(err);
        }

        if (!data) {
            throw new Error('No data to process');
        }
        let output = 0;
        let [min, max] = data.split('-').map( (val) => parseInt(val, 10));

        while (min <= max) {
            if (checkDecrease(min) && checkAdjacent(min)) {
                output++;
            }

            min++
        }

        console.log(output);
    }
);

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