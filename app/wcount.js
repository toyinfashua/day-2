function words(string, cutOff) {
  var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
      words = cleanString.split(' '),
      frequencies = {},
      word, frequency, i;

  for( i=0; i<words.length; i++ ) {
    if ( word[i] == frequencies ) {
      count++;
    }
    frequencies[word] = frequencies[word] || 0;
    frequencies[word]++;
  }
  
  words ( "asdf asdf asdf", 'a');

  return words.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0,cutOff).toString();
}
module.exports = cleanString;