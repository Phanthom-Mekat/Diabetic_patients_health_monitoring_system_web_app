document.addEventListener("DOMContentLoaded", function() {
    // Pie Chart
    var ctxPie = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['0-18', '19-35', '36-50', '51-65', '66+'],
            datasets: [{
                data: [150, 300, 200, 100, 50],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        }
    });

    // Line Chart
    var ctxLine = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Average Glucose Level',
                    data: [90, 95, 92, 88, 85, 87, 89, 91, 90, 92, 94, 96],
                    borderColor: '#36A2EB',
                    fill: false
                }
            ]
        }
    });
});
