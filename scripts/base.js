// Get the last modified date/time of the document
var lastModifiedDate = document.lastModified;
// Display the last modified date/time in the second paragraph
document.getElementById("lastModified").innerHTML = "Last modified: " + lastModifiedDate;

//////////////////////////////////

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            reverseGeocode(position);
        });
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function reverseGeocode(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var apiURL = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude + "&accept-language=en"; 
    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            var city = data.address.city || data.address.town || data.address.village || data.address.hamlet || data.address.locality; 
            var country = data.address.country;
            var locationInfo = city + ", " + country;
            document.getElementById("location").innerHTML = locationInfo;
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
}

getLocation();