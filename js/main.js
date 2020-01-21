$(document).ready(function() {
// ***************************
var cpuNumberArray = [];
var userNumberArrayTriggered = [];
var seconds = 30;

while (cpuNumberArray.length < 5) {
    var cpuRandomNumber = getRandomIntInclusive(1, 1000);
    if (checkNumberInArray(cpuNumberArray, cpuRandomNumber) == false) {
        cpuNumberArray.push(cpuRandomNumber);
    }
}

alert('NUMERI CPU:\n' + cpuNumberArray);
var timer = setInterval(function() {
    seconds -= 1;
    countdownHtml(seconds);
    if (seconds === 0) {
        clearInterval(timer);
        lostMemoryResponse(cpuNumberArray, userNumberArrayTriggered);
        countdownHtml('Punteggio: ' + userNumberArrayTriggered.length);
    }
}, 1000);
// ***************************
});

// *************************************************************
function checkNumberInArray(array, number) {
    for (var y = 0; y < array.length; y++) {
        if (array[y] === number) {
            return true;
        }
    }
    return false;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lostMemoryResponse(cpuArray, userArrayTriggered) {
    var userNumber;
    var x = 1;
    while (x <= 5) {
        userNumber = parseInt(prompt('[' + x + '] Inserisci i numeri:'))
        if (checkNumberInArray(cpuArray, userNumber) && checkNumberInArray(userArrayTriggered, userNumber) == false) {
            userArrayTriggered.push(userNumber);
        }
    x++;
    }
    alert(
        'Hai ricordato ' +
        userArrayTriggered.length + ' numeri: \n' + userArrayTriggered
        +
        '\nNon hai ricordato: ' + arrayCompare(cpuArray, userArrayTriggered)
    );
}

function arrayCompare(array1, array2) {
    var userNumberArrayUntriggered = [];
    var triggered = false;
    for (var i = 0; i < array1.length; i++) {
        triggered = false;
        for (var e = 0; e < array2.length; e++) {
            if (array1[i] === array2[e]) {
                triggered = true;
            }
        }
        if(!triggered) {
            userNumberArrayUntriggered.push(array1[i]);
        }
    }
    return userNumberArrayUntriggered;
}

function countdownHtml(input) {
    $('.wrapper h1').text(input);
}
