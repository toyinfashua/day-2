var words = {
  words: function wordCount(str) 
  {
  var count = {}; // this would create an object to store the result of the computation
  var wCheck = str.replace(/[\n\t]/gi, ' ')
             .replace(/ {2,}/g, " ").split(' '); // usedto replace special characters with a single space
  wCheck.forEach (function (word) 
  {
  if (count.hasOwnProperty(word)) // method to check the property of the object
    {
      count[word]+=1; //if it does have the property 'word', the count increases by 1
    } 
  else 
    {
      count[word]=1 // if it does not the count remains 1 or is equal to 1
    }
  });

  return count; 
    }   //returns new object
  }

module.exports = words;