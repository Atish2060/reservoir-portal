document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("waterFlowChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Water Flow (m³/s)",
                data: [30, 35, 40, 50, 65, 90, 120, 130, 110, 80, 55, 40],
                borderColor: "green",
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
                        text: "Water Flow (m³/s)"
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
