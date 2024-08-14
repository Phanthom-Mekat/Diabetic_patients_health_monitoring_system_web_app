document.addEventListener('DOMContentLoaded', function () {
    // Sample data for the dashboard
    const dashboardData = {
        totalPatients: 473,
        totalConsultations: 236,
        totalTreated: 105,
        totalSurgeries: 132,
        averageGlucose: "120 mg/dL",
        availablePhysicians: 35,
        totalHospitals: 12,
        totalDiagnosisCenters: 8,
        totalOtherFacilities: 5,
        appointments: [
            { time: "10:00 am - 11:00 am", patient: "Brain Mathew" },
            { time: "11:00 am - 12:00 pm", patient: "Sika Chirag" },
            { time: "2:00 pm - 2:30 pm", patient: "Peter Parker Joel" },
            { time: "3:00 pm - 3:45 pm", patient: "Rebecca Lynn Stone" },
        ],
        recentActivity: [
            "Checked Blood Sugar levels of Brain Mathew.",
            "Prescribed insulin to Sika Chirag.",
            "Performed surgery on Peter Parker Joel.",
            "Scheduled follow-up for Rebecca Lynn Stone.",
        ],
        patientDemographics: [
            ['Age Group', 'Number of Patients'],
            ['0-18', 50],
            ['19-35', 150],
            ['36-50', 200],
            ['51-65', 100],
            ['66+', 73]
        ],
        diagnosisData: [
            ['Diagnosis', 'Number of Patients'],
            ['Type 1 Diabetes', 120],
            ['Type 2 Diabetes', 250],
            ['Gestational Diabetes', 50],
            ['Prediabetes', 53]
        ]
    };

    // Populate statistics
    document.getElementById('total-patients').textContent = dashboardData.totalPatients;
    document.getElementById('total-consultations').textContent = dashboardData.totalConsultations;
    document.getElementById('total-treated').textContent = dashboardData.totalTreated;
    document.getElementById('total-surgeries').textContent = dashboardData.totalSurgeries;
    document.getElementById('average-glucose').textContent = dashboardData.averageGlucose;
    document.getElementById('available-physicians').textContent = dashboardData.availablePhysicians;
    document.getElementById('total-hospitals').textContent = dashboardData.totalHospitals;
    document.getElementById('total-diagnosis-centers').textContent = dashboardData.totalDiagnosisCenters;
    document.getElementById('total-other-facilities').textContent = dashboardData.totalOtherFacilities;

    // Populate appointment list
    const appointmentList = document.getElementById('appointment-list');
    dashboardData.appointments.forEach(appointment => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${appointment.time}</span><span>${appointment.patient}</span>`;
        appointmentList.appendChild(listItem);
    });

    // Populate recent activity list
    const recentActivityList = document.getElementById('recent-activity-list');
    dashboardData.recentActivity.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = activity;
        recentActivityList.appendChild(listItem);
    });

    // Initialize Google Charts
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawDemographicsChart();
        drawDiagnosisChart();
    }

    function drawDemographicsChart() {
        const data = google.visualization.arrayToDataTable(dashboardData.patientDemographics);

        const options = {
            title: 'Patient Demographics (Age Ratio)',
            pieSliceText: 'percentage',
            legend: { position: 'bottom' },
            width: '100%',
            height: '100%',
            backgroundColor: '#f4f4f4'
        };

        const chart = new google.visualization.PieChart(document.getElementById('demographics_chart'));
        chart.draw(data, options);
    }

    function drawDiagnosisChart() {
        const data = google.visualization.arrayToDataTable(dashboardData.diagnosisData);

        const options = {
            title: 'Patient Diagnosis Data',
            hAxis: { title: 'Diagnosis' },
            vAxis: { title: 'Number of Patients' },
            legend: { position: 'none' },
            bar: { groupWidth: '75%' },
            isStacked: true,
            backgroundColor: '#f4f4f4'
        };

        const chart = new google.visualization.ColumnChart(document.getElementById('diagnosis_chart'));
        chart.draw(data, options);
    }

    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: dashboardData.appointments.map(appt => ({
            title: `Appointment with ${appt.patient}`,
            start: `2023-06-14T${appt.time.split(' - ')[0].replace(' am', '').replace(' pm', '')}:00`,
            end: `2023-06-14T${appt.time.split(' - ')[1].replace(' am', '').replace(' pm', '')}:00`
        }))
    });
    calendar.render();
});
