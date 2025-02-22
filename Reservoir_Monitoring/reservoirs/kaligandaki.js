document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("waterFlowChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Water Flow (m³/s)",
                data: [110, 125, 140, 160, 190, 230, 290, 310, 280, 250, 170, 130],
                borderColor: "blue",  // ✅ Keeping the color same as Kulekhani
                backgroundColor: "rgba(0, 0, 255, 0.2)",  // ✅ Light blue fill
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
