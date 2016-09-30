var response = prompt("Please enter any word:");

alert("You entered: " + response + "\n" +
 "There are " + response.length + " characters in the word" + "\n" +
 "The third character is: " + response.charAt(2) + "\n" +
 "Lowercase: " + response.toLowerCase() + "\n" +
 "Uppercase: " + response.toUpperCase() + "\n" +
 "Example: During class I always want to stand up and yell out '" + response +"'!" + "\n" +
 "Subword: " + response.substring(1, 4));