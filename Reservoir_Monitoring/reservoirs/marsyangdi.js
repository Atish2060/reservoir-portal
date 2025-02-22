document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("waterFlowChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Water Flow (m³/s)",
                data: [40, 45, 50, 60, 75, 100, 130, 140, 120, 90, 70, 50],
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
