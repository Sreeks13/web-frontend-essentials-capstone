const bookForm = document.getElementById("book-form");
const formMessage = document.getElementById("form-message");
const loadButton = document.getElementById("load-departures");
const departuresList = document.getElementById("departures");

// Local API-style data.
// This allows the page to work without an internet connection.
const departureData = [
    { title: "Route 42 - Riverside Library 08:15" },
    { title: "Route 42 - Riverside Library 09:00" },
    { title: "Route 42 - Riverside Library 10:15" },
    { title: "Route 42 - Riverside Library 11:30" },
    { title: "Route 42 - Riverside Library 12:45" }
];

function loadDepartures() {
    departuresList.innerHTML = "";

    departureData.forEach(function (departure) {
        const item = document.createElement("li");
        item.textContent = departure.title;
        departuresList.appendChild(item);
    });
}

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const book = document.getElementById("book").value.trim();

    if (!name || !email || !book) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    formMessage.textContent = `Book request received for ${book}.`;
    bookForm.reset();
});

loadButton.addEventListener("click", loadDepartures);