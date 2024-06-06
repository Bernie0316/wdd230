// MakeSure link will goBack homePage when aLink doen't work
const baseURL = "https://Bernie0316.github.io/wdd230/";

// const linksURL = "https://Bernie0316.github.io/wdd230/data/links.json";
// try if able to link with local json file
const linksURL = "../data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

function displayLinks(weeks) {
    const container = document.getElementById("dynamicLinksContainer");
    const list = document.createElement('ul');
    list.classList.add('black'); // 加入class

    weeks.forEach(weekData => {
        const listItem = document.createElement("li");
        listItem.textContent = `${weekData.week}: `;

        weekData.links.forEach((link, index) => {
            const linkElement = document.createElement("a");
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;

            listItem.appendChild(linkElement);

            // Add separator " | " if it's not the last link
            if (index < weekData.links.length - 1) {
                const separator = document.createTextNode(" | ");
                listItem.appendChild(separator);
            }
        });
        list.appendChild(listItem);
    });
    container.appendChild(list);
}

document.addEventListener("DOMContentLoaded", getLinks);
