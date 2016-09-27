// Variable Declarations

var numOfVictims = 0;
var numOfVols = 0;
var victims = [];
var moreEntries;
var response;
var vols = [];

// Function to ask for initial or additional victims. Adds to total number of victims if reponded with the affirmative
function askForVics() {
    response = prompt("Do you have a victim to enter? (y or n)");
    if (response.toLowerCase() === 'y') {
    moreEntries  = true;
    numOfVictims++;
    } else {
        moreEntries = false;
    }
}

// Function to ask for initial or additional volunteers. Adds to total number of volunteers if reponded with the affirmative
function askForVols() {
    response = prompt("Do you have a volunteer to enter? (y or n)");
    if (response.toLowerCase() === 'y') {
    moreEntries  = true;
    numOfVols++;
    } else {
        moreEntries = false;
    }
}
// Ask for victims
askForVics();
// Start loop as long as there are victim entries to be had
while (moreEntries) {
    // Adding a new object with 3 properties to the end of the victims array
    victims.push({
        name: prompt("Enter victim name here:"),
        num: prompt("Enter victim phone number:"),
        str: prompt("Enter victim street:")
    });
    askForVics();
}
// 
askForVols();
// Starting loop for volunteers
while (moreEntries) {
    // Adding a new object with 3 properties to the end of the vols array
    vols.push({
        name: prompt("Enter volunteer name here:"),
        num: prompt("Enter volunteer phone number:"),
        str: prompt("Enter volunteer street:")
    });
    askForVols();
}

// Window alert
alert("The current disaster has " + numOfVictims + " victims." + "\n" +
"We currently have " + numOfVols + " volunteers on hand." + "\n" +
"Here is a list of people in need: " + victims.map(function(e){
    return e.name;
}) + "\n" +
"And a list of all volunteers: " + vols.map(function(e){ // the paramater of the callback function represents each object in the array
    return e.name;
}) + "\n");

var vicInNeed = prompt("Please enter a victim to find out which volunteer's are available to help:");

var vicStr;
// Looping through victims array checking if the name matches, then assign the victim's street to the vicStr variable
for (var i = 0; i < victims.length; i++) {
    if (victims[i].name === vicInNeed) {
        vicStr = victims[i].str;
    }
}
var volsOnStreet = [];
// Looping through vols array checking if the street name matches, then add the volunteer name to a new array called volsOnStreet
for (var i = 0; i < vols.length; i++) {
    if (vols[i].str === vicStr) {
        volsOnStreet.push(vols[i].name);
    }
}

alert(`The victim named ${vicInNeed} lives on ${vicStr}. \n
The following volunteers also live on ${vicStr}: \n ${volsOnStreet}`);