function changeText() {
    let potentialTexts = ['text1','text2','text3','text4','text5'];
    let randomNumber = getRandomNumber(0, potentialTexts.length - 1);
    let textToChangeTo = potentialTexts[randomNumber];
    document.getElementById('header').innerHTML = textToChangeTo;
}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}