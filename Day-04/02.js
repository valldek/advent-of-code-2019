const fs = require('fs');
const path = require('path');

const {checkDecrease, checkAdjacent, checkLargerGroup} = require('./helpers');

fs.readFile(
    path.join(__dirname, '/input.txt'),
    'utf-8',
    (err, data) => {
        if (err) {
            throw err;
        }

        if (!data) {
            throw new Error('No data to process');
        }
        let output = 0;
        let afterFirst = [];
        let [min, max] = data.split('-').map( (val) => parseInt(val, 10));

        while (min <= max) {
            if (checkDecrease(min) && checkAdjacent(min)) {
                afterFirst.push(min);
            }

            min++
        }

        for (let num of afterFirst) {
            if (checkLargerGroup(num)) {
                output++;
            }
        }

        console.log(output);
    }
);
