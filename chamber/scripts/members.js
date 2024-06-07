const membersURL = "../data/members.json";
const linksURL = "https://Bernie0316.github.io/wdd230/chamber/data/members.json";

async function getmembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displaymembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displaymembers(members) {
    const container = document.getElementById("dynamicLinksContainer");
    const list = document.createElement('ul');

    members.forEach(member => {
        const listItem = document.createElement('li');
         
        // Create member name element
        const nameElement = document.createElement('h3');
        nameElement.textContent = member.name;
        listItem.appendChild(nameElement);
        
        // Create member address element
        const addressElement = document.createElement('p');
        addressElement.textContent = `Address: ${member.addresses}`;
        listItem.appendChild(addressElement);

        // Create member phone number element
        const numberElement = document.createElement('p');
        numberElement.textContent = `Phone: ${member.number}`;
        listItem.appendChild(numberElement);

        // Create member URL element
        if (member.URL) {
            const urlElement = document.createElement('a');
            urlElement.href = member.URL;
            urlElement.textContent = member.URL;
            urlElement.target = "_blank";
            listItem.appendChild(urlElement);
        }

        // Create member image element
        if (member.image_icon_file) {
            const imageElement = document.createElement('img');
            imageElement.src = member.imageFile;
            imageElement.alt = `${member.name} logo`;
            imageElement.style.width = "50px";
            imageElement.style.height = "50px";
            listItem.appendChild(imageElement);
        }

        // Add membership level
        const membershipElement = document.createElement('p');
        membershipElement.textContent = `Membership Level: ${member.membershipLevel}`;
        listItem.appendChild(membershipElement);

        list.appendChild(listItem);
    });
    container.appendChild(list);
}

// getmembers();
document.addEventListener("DOMContentLoaded", getmembers);