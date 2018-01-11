function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() {
  setUserName();
}

