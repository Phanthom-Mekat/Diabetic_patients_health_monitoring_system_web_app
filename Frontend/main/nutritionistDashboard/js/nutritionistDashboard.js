document.addEventListener('DOMContentLoaded', function() {
    const totalClients = 150;
    const newClients = 20;
    const mealPlans = 35;
    const recipes = 75;

    document.getElementById('total-clients').textContent = totalClients;
    document.getElementById('new-clients').textContent = newClients;
    document.getElementById('meal-plans').textContent = mealPlans;
    document.getElementById('recipes').textContent = recipes;

    const clientChart = new Chart(document.getElementById('clientChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Clients',
                data: [50, 55, 60, 75, 80, 90, 100],
                borderColor: '#1abc9c',
                backgroundColor: 'rgba(26, 188, 156, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    const targetChart = new Chart(document.getElementById('targetChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Target', 'Reality'],
            datasets: [{
                label: 'Performance',
                data: [100, 85],
                backgroundColor: ['#3498db', '#e74c3c'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    const salesChart = new Chart(document.getElementById('salesChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['USA', 'Canada', 'UK', 'Australia'],
            datasets: [{
                label: 'Sales by Country',
                data: [40, 25, 20, 15],
                backgroundColor: ['#3498db', '#1abc9c', '#9b59b6', '#f1c40f']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });

    const volumeChart = new Chart(document.getElementById('volumeChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Volume',
                data: [30, 50, 70, 60, 90, 100],
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Service Level',
                data: [20, 40, 60, 80, 70, 95],
                borderColor: '#2980b9',
                backgroundColor: 'rgba(41, 128, 185, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});
