document.addEventListener('DOMContentLoaded', function () {
    // Doctor Database
    const doctorDatabaseChart = new Chart(document.getElementById('doctorDatabaseChart'), {
        type: 'bar',
        data: {
            labels: ['Doctors in Hospital A', 'Doctors in Hospital B', 'Doctors in Hospital C'],
            datasets: [{
                label: 'Number of Doctors',
                data: [50, 30, 40],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Patients with Diabetes Types
    const diabetesTypesChart = new Chart(document.getElementById('diabetesTypesChart'), {
        type: 'pie',
        data: {
            labels: ['Type 1', 'Type 2', 'Gestational'],
            datasets: [{
                data: [40, 45, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Doctors Affiliated with More than One Hospital
    const multipleAffiliationsChart = new Chart(document.getElementById('multipleAffiliationsChart'), {
        type: 'doughnut',
        data: {
            labels: ['Doctors with 1 Hospital', 'Doctors with 2 Hospitals', 'Doctors with 3+ Hospitals'],
            datasets: [{
                data: [80, 15, 5],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Real-time Tracking and Dietary Management
    const trackingDietaryChart = new Chart(document.getElementById('trackingDietaryChart'), {
        type: 'polarArea',
        data: {
            labels: ['Real-time Tracking', 'Dietary Management', 'Personalized Recommendations'],
            datasets: [{
                data: [30, 50, 20],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
