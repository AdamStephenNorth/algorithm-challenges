var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperChars = alphabet.split( "" );
var lowerChars = alphabet.toLowerCase().split( "" );
var alphaChars = lowerChars.concat( upperChars );

function isAlpha( inputChar ) {
  return alphaChars.includes( inputChar );
}

function toLowerCase( inputString ) {
  return inputString.toLowerCase();
}

function cleanString( inputString ){
  return inputString.split( "" )
                    .filter( isAlpha )
                    .map( toLowerCase )
                    .join("");
}

function stringReverse( inputString ) {
  return inputString.split( "" )
                    .reverse()
                    .join( "" );
}

function palindrome( inputString ) {
  var cleanedString = cleanString( inputString );
  return cleanedString === stringReverse( cleanedString );
}
