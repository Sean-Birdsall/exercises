var phone = prompt("Please enter your phone number: (xxx-xxx-xxxx)");

alert(phone.charAt(3) === '-' && phone.charAt(7) === '-' && phone.length === 12);

var dob = prompt("When is your birthdate? (xx/xx/xx)");

alert(dob.charAt(2) === '/' && dob.charAt(5) === '/' && dob.length === 8);

var zip = prompt("Enter your postal code:(xxxxx OR xxxxx-xxxx)");

alert(zip.length === 5 || zip.length === 10 && zip.charAt(5) === '-');

var st = prompt("Enter two digit abbreviation for your state (ex. CO, TX, FL)");
var state = st.toUpperCase();
alert(st.length === 2 && state === st);

var mar = prompt("Are you married: (Yes or No)");
var married = mar.toLowerCase();

alert(married === 'yes' || married === 'no');
