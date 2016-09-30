function tripleFive() {
    for (var i = 0; i < 3; i++){
        console.log("Five!");
    }
}

function lastLetter(str) {
    return str.slice(-1);
}

function square(num) {
    return num * num;
}

function negate(num) {
    return num * -1;
}

function toArray(arg1, arg2, arg3) {
    var newArray = [arg1, arg2, arg3];
    return newArray;
}

function startsWithA(str) {
    if (str.startsWith('A') || (str.startsWith('a'))) {
        return true;
    } else {
        return false;
    }  
}

function excite(str) {
    return str + "!!!";
}

function sun(str) {
    if (str.indexOf('sun') >= 0){
        return true;
    } else {
        return false;
    }
}

function tiny(num) {
    if (num > 0 && num < 1) {
        return true;
    } else {
        return false;
    }
}

function getSeconds(minAndSec) {
    var min = minAndSec.substring(0, 2) * 60;
    var sec = minAndSec.substring(3, 5) * 1;
    var totalSec = min + sec;
    return totalSec;
}

console.log(tripleFive());
console.log(lastLetter('hello'));
console.log(lastLetter('island'));
console.log(square(3));
console.log(square(5));
console.log(negate(5));
console.log(negate(-8));
console.log(toArray(1, 4, 5));
console.log(toArray(8, 'A', false));
console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));
console.log(excite('yes'));
console.log(excite('go'));
console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));
console.log(tiny(0.3));
console.log(tiny(15));
console.log(tiny(-5));
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));