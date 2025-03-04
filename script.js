function buttonAko() {
let sentMessage = prompt('Enter the message:');


if ((sentMessage.indexOf('FR') >= 0) && (sentMessage.indexOf('AI') >=0)) {
document.getElementById('result').innerHTML = `The message "${sentMessage}" is legitimate!`;
}
else if (sentMessage.indexOf('AI') >= 0|| sentMessage.indexOf('aI') >= 0 || sentMessage.indexOf('Ai') >= 0) {
document.getElementById('result').innerHTML = `The message "${sentMessage}" is tampered with!`;
}
else if (sentMessage.indexOf('FR') >= 0){
document.getElementById('result').innerHTML = `The message "${sentMessage}" is legitimate!`;
}
else {
document.getElementById('result').innerHTML = `The message "${sentMessage}" is yet to be encoded!`;
}
}
