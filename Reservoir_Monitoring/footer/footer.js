document.addEventListener("DOMContentLoaded", function () {
    console.log("Footer loaded.");

    document.getElementById("footer").innerHTML = `
        <footer>
            <p>&copy; 2025 Reservoir Monitoring System | Designed for Nepal</p>
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank">
                    <img src="../assets/facebook.png" alt="Facebook">
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <img src="../assets/twitter.png" alt="Twitter">
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <img src="../assets/instagram.png" alt="Instagram">
                </a>
            </div>
        </footer>
    `;
});
