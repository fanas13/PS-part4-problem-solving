function reverse(str) {
    let reversedText = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
        reversedText += str[i];
    }
    return reversedText;
}
  
const passedString = 'Problem Solving Part3';
const displayElement = document.getElementById('reversedString');
displayElement.innerText = reverse(passedString);