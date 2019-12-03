let inputOne = 'R8,U5,L5,D3';
let inputTwo = 'U7,R6,D4,L4';

const getWirePoints = ( str ) => {
    return str.split( ',' ).reduce( ( acc, cur, idx ) => {
        let direction = cur.slice( 0, 1 );
        let step = Number( cur.slice( 1 ) );

        if ( direction === 'R' || direction === "L" ) {
            return direction === 'R' ? 
                [ ...acc, [ acc[ idx ][ 0 ] + step, acc[ idx ][ 1 ] ] ] : 
                [ ...acc, [ acc[ idx ][ 0 ] - step, acc[ idx ][ 1 ] ] ];
        } else if ( direction === 'U' || direction === 'D' ) {
            return direction === 'U' ?
                [ ...acc, [ acc[ idx ][ 0 ], acc[ idx ][ 1 ] + step ] ] :
                [ ...acc, [ acc[ idx ][ 0 ], acc[ idx ][ 1 ] - step ] ];
        }
    }, [ [ 0, 0 ] ] );

};

const pointsOne = getWirePoints( inputOne );
const pointsTwo = getWirePoints( inputTwo );

console.log(pointsOne);
console.log(pointsTwo);

