document.addEventListener("DOMContentLoaded", function () {
    console.log("Main content loaded.");

    // Load header
    fetch('../header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    // Load footer
    fetch('../footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });

    // Add click event listeners to feature cards
    const featureCards = document.querySelectorAll(".card");
    featureCards.forEach(card => {
        card.addEventListener("click", function () {
            const feature = this.getAttribute("data-feature");
            if (feature === "hydropower") {
                window.location.href = "../features/hydropower.html";
            } else if (feature === "irrigation") {
                window.location.href = "../features/irrigation.html";
            } else if (feature === "flood-control") {
                window.location.href = "../features/flood-control.html";
            }
        });
    });
});