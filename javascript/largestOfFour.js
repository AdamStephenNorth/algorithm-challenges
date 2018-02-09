function greaterThan( p, c ) {
  return p > c ? p : c;
}

function maxArrayElement( array ) {
  return array.reduce( greaterThan );
}

function largestOfFour( array ) {
  return array.map( maxArrayElement );
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
