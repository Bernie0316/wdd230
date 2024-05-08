document.querySelector('#year').textContent = new Date().getFullYear();

var lastModifiedDate = document.lastModified;
// Display the last modified date/time in the second paragraph
document.getElementById("lastModified").innerHTML = "Last modified: " + lastModifiedDate;