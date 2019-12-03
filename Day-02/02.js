// const input = [ 1, 1, 1, 4, 99, 5, 6, 0, 99 ];
const input = [ 1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 13, 1, 19, 1, 19, 10, 23, 2, 10, 23, 27, 1, 27, 6, 31, 1, 13, 31, 35, 1, 13, 35, 39, 1, 39, 10, 43, 2, 43, 13, 47, 1, 47, 9, 51, 2, 51, 13, 55, 1, 5, 55, 59, 2, 59, 9, 63, 1, 13, 63, 67, 2, 13, 67, 71, 1, 71, 5, 75, 2, 75, 13, 79, 1, 79, 6, 83, 1, 83, 5, 87, 2, 87, 6, 91, 1, 5, 91, 95, 1, 95, 13, 99, 2, 99, 6, 103, 1, 5, 103, 107, 1, 107, 9, 111, 2, 6, 111, 115, 1, 5, 115, 119, 1, 119, 2, 123, 1, 6, 123, 0, 99, 2, 14, 0, 0 ];

const intCodeComputer = ( arr ) => {
    let intCode = [ ...arr ];

    for( let i = 0; i <= intCode.length; i += 4 ) {
        let opCode = intCode[ i ];

        if ( opCode === 1 ) {
            intCode[ intCode[ i + 3 ] ] = addition( intCode, intCode[ i + 1 ], intCode[ i + 2 ] );
        } else if ( opCode === 2 ) {
            intCode[ intCode[ i + 3] ] = multiplication( intCode, intCode[ i + 1], intCode[ i + 2] );
        } else if ( opCode === 99 ) {
            return intCode;
        } else {
            return 'Something went wrong';
        };
    };
};

const addition = ( arr, idx1, idx2 ) => {
    return arr[ idx1 ] + arr[ idx2 ];
};

const multiplication = ( arr, idx1, idx2 ) => {
    return arr[ idx1 ] * arr[ idx2 ];
};

const runProgram = ( arr, str = '', noun = 0, verb = 0 ) => {
    let intCode = [ ...arr ];
    if ( str === '1202 program alert' ) {
        noun = 12;
        verb = 2;
    }
    intCode[ 1 ] = noun;
    intCode[ 2 ] = verb;
    return intCodeComputer( intCode );
}

const nounVerbSerach = () => {
    for ( let noun = 0; noun < 100; noun++ ) {
        for ( let verb = 0; verb < 100; verb++ ) {
            if ( runProgram( input, '', noun, verb )[0] === 19690720 )
                return {
                    noun,
                    verb,
                }
        }
    }
    return {
        noun: null,
        verb: null,
    } 
}

const output = nounVerbSerach();

console.log(output);

