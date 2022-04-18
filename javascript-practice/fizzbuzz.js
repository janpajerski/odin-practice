function getNumber() {
    userNum = prompt('Let\'s play FizzBuzz! Please enter a number');
    if (userNum === null){
        return alert('I guess you don\'t want to play :(');
    } else if (userNum === '' || isNaN(userNum * 1)) {
        return alert('Enter a number if you want to play');
    } else {return userNum);}
}

getNumber();e