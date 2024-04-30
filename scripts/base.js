// getting location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(reverseGeocode);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function reverseGeocode(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var apiURL = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude;
    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            var city = data.address.city;
            var country = data.address.country;
            var locationInfo = city + ", " + country;
            document.getElementById("location").innerHTML = locationInfo;
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
}

getLocation();