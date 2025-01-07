function filterGames() {
    const filterValue = document.getElementById("filter").value; // Get selected filter value
    const gameCards = document.querySelectorAll(".game-card"); // Select all game cards

    // Loop through all cards and toggle visibility based on the filter
    gameCards.forEach((card) => {
        const genres = card.getAttribute("data-genre").split(" "); // Split genres into an array

        if (filterValue === "all" || genres.includes(filterValue)) {
            card.style.display = "block"; // Show matching cards
        } else {
            card.style.display = "none"; // Hide non-matching cards
        }
    });

    // If no cards match the filter, show a "no results" message
    const visibleCards = Array.from(gameCards).filter((card) => card.style.display === "block");
    const grid = document.querySelector(".games-grid");

    // Remove existing "no results" message
    const noResultsMessage = document.querySelector(".no-results-message");
    if (noResultsMessage) noResultsMessage.remove();

    // Add "no results" message if no cards are visible
    if (visibleCards.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No games found for the selected genre.";
        message.className = "no-results-message";
        message.style.color = "#fff";
        message.style.textAlign = "center";
        grid.appendChild(message);
    }
}

// JavaScript to toggle the hamburger menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

function searchGames() {
    const query = document.getElementById("searchBar").value.toLowerCase(); // Get search input
    const gameCards = document.querySelectorAll(".game-card"); // Select all game cards

    gameCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase(); // Get game title
        const description = card.querySelector("p").textContent.toLowerCase(); // Get game description

        // Toggle visibility based on search query
        if (title.includes(query) || description.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Check if any cards are visible
    const visibleCards = Array.from(gameCards).filter((card) => card.style.display === "block");
    const grid = document.querySelector(".games-grid");

    // Remove existing "no results" message
    const noResultsMessage = document.querySelector(".no-results-message");
    if (noResultsMessage) noResultsMessage.remove();

    // Show "no results" message if no cards are visible
    if (visibleCards.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No games match your search.";
        message.className = "no-results-message";
        message.style.color = "#fff";
        message.style.textAlign = "center";
        grid.appendChild(message);
    }
}
