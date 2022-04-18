function getNumber() {
    userNum = prompt('Let\'s play FizzBuzz! Please enter a number');
    if (userNum === null){
        return alert('I guess you don\'t want to play :(');
    } else if (userNum === '' || isNaN(userNum * 1)) {
        return alert('Enter a number if you want to play');
    } else {return userNum;}
}


function  fizzBuzz(fizzNum){
    for (i = 1; i <= fizzNum; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz');
        } else if (i % 3 == 0){
            console.log('Fizz');
        } else if (i % 5 == 0){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(getNumber());