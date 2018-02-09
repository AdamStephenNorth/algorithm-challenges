function maxLength( prev, curr ) {
  return curr.length > prev.length ? curr : prev;
}

function findLongestWord( sentence ) {
  return sentence.split( " " ).reduce( maxLength, "" ).length;
}

findLongestWord( "The quick brown fox jumped over the lazy dog" );
