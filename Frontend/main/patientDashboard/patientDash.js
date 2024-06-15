document.addEventListener("DOMContentLoaded", function() {
   
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

    var ctxBar1 = document.getElementById('barChart1').getContext('2d');
    var barChart1 = new Chart(ctxBar1, {
        type: 'bar',
        data: {
            labels: ['Saturday','Sunday', 'Monday', 'Tueday', 'Wednesday','Thursday','Friday'],
            datasets: [{
                label: 'K/cal',
                data: [50, 80, 20, 10, 30 , 20 , 10],
                backgroundColor: ['#C731FF']
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