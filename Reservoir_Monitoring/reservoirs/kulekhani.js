document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("waterLevelChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Water Level (m)",
                data: [75, 78, 80, 82, 85, 88, 90, 93, 95, 92, 88, 80],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: "blue",
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: "Water Level (m)"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Month"
                    }
                }
            }
        }
    });
});
