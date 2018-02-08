function capitalize( word ) {
  var firstLetterUppered = word[0].toUpperCase();
  var theRest = word.substr(1).toLowerCase();
  return (firstLetterUppered + theRest);
}
function titleCase(str) {
  return str.split(" ").map( capitalize ).join(" ");
}

titleCase("I'm a little tea pot");
