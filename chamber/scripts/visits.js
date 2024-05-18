// 1️ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️ Get the stored VALUE for the lastVisit key in localStorage if it exists.
let lastVisit = window.localStorage.getItem("LastVisits");

// 3️ Get the current date
const currentDate = new Date();

// 4️ Determine the message to display
if (!lastVisit) {
    // This is the first visit
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the difference in time between visits
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = currentDate - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

    if (hoursDifference < 24) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        visitsDisplay.textContent = "You last visited 1 day ago.";
    } else {
        visitsDisplay.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

// 5️ Store the current date as the new last visit date in localStorage
window.localStorage.setItem("lastVisit", currentDate.toISOString());