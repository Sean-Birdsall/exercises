
// Write a function called letterCapitalize which takes a 
// single string parameter and capitalizes the first letter 
// of each word in the string. You can assume that words in 
// the input string will be separated by only one space.

function letterCapitalize(str) {
   if (str.indexOf(" ") >= 0) {
       var splitStr = str.split(" ");
       for (var i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        var newWords = splitStr.join(" ");
       }
       return newWords;
   } else {
       str.charAt(0).toUpperCase();
       return str.charAt(0).toUpperCase() + str.substring(1);
   }
}

// Write a function called wordCount which takes a single string 
// parameter and returns the number of words the string contains 
// (ie. "Never eat shredded wheat" would return 4). You can 
// assume that words in the input string will be separated by 
// only one space.

function wordCount(str) {
    var wordArray = str.split(" ");
    return wordArray.length;
}

// Bonus: Write a function called primeTime that takes a single 
// number parameter and returns true if the parameter is a prime 
// number, otherwise false. The range will be between 1 and 216.

function primeTime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num <= 2){
            return false;
        } else if (num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(primeTime(13));
console.log(wordCount('Hello my name is the Sean'));
console.log(letterCapitalize('difficult'));