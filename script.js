function buttonAko() {
let message = prompt('Enter the message:');


if ((message.indexOf('FR') >= 0) && (message.indexOf('AI') >=0)) {
document.getElementById('result').innerHTML = `The message "${message}" is legitimate!`;
}
else if (message.indexOf('AI') >= 0|| message.indexOf('aI') >= 0 || message.indexOf('Ai') >= 0) {
document.getElementById('result').innerHTML = `The message "${message}" is tampered with!`;
}
else if (message.indexOf('FR') >= 0){
document.getElementById('result').innerHTML = `The message "${message}" is legitimate!`;
}
else {
document.getElementById('result').innerHTML = `The message "${message}" is yet to be encoded!`;
}
}