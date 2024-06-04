const baseURL = "https://Bernie0316.github.io/wdd230/";
const linksURL = "https://Bernie0316.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}
  
getLinks();

function displayLinks(weeks) {
    const container = document.getElementById("dynamicLinksContainer");

    weeks.forEach(weekData => {
        const weekTitle = document.createElement("h3");
        weekTitle.textContent = weekData.week;

        container.appendChild(weekTitle);

        const list = document.createElement("ul");

        weekData.links.forEach(link => {
            const linkElement = document.createElement("a");
            linkElement.href = baseURL + link.url; 
            linkElement.textContent = link.title;

            const listItem = document.createElement("li");
            listItem.appendChild(linkElement);

            list.appendChild(listItem);
        });

        container.appendChild(list);
    });
}