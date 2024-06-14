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

    // Bar Chart for Diabetes Types
    var ctxBar1 = document.getElementById('barChart1').getContext('2d');
    var barChart1 = new Chart(ctxBar1, {
        type: 'bar',
        data: {
            labels: ['Type 1', 'Type 2', 'Gestational', 'Other'],
            datasets: [{
                label: 'Diabetes Types',
                data: [50, 80, 20, 10],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Bar Chart for Diabetes with Kidney Disease
    var ctxBar2 = document.getElementById('barChart2').getContext('2d');
    var barChart2 = new Chart(ctxBar2, {
        type: 'bar',
        data: {
            labels: ['Without Kidney Disease', 'With Kidney Disease'],
            datasets: [{
                label: 'Diabetes Patients with Kidney Disease',
                data: [90, 10],
                backgroundColor: ['#36A2EB', '#FF6384']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
