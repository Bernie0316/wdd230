const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=24.83&lon=121.008&units=metric&appid=6e493ed55395a0c02682905b23226106";
// 24.834429403597646, 121.00812368211223

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResult(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    // weatherIcon.setAttribute("src", iconsrc);
    // weatherIcon.setAttribute("alt", desc);
    // captionDesc.textContent = desc.charAt(0).toUperCase() + desc.slice(i);
    captionDesc.innerHTML = `<img src="${iconsrc}" alt="${desc}" style="vertical-align:middle; width:50px; height:50px;" /> ${data.main.temp}&deg;C - ${desc}`;
}