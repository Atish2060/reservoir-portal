async function loadSection(id, url) {
    const response = await fetch(url);
    document.getElementById(id).innerHTML = await response.text();
}

document.addEventListener("DOMContentLoaded", function () {
    loadSection("header", "head/header.html");
    loadSection("main", "body/main.html");
    loadSection("footer", "footer/footer.html");
});