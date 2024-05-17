// Get the last modified date/time of the document
var lastModifiedDate = document.lastModified;
// Display the last modified date/time in the second paragraph
document.getElementById("lastModified").innerHTML = "Last modified: " + lastModifiedDate;

//////////////////////////////////
// hambergur menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});