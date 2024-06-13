document.addEventListener('DOMContentLoaded', function () {
    // Initialize Google Charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawLineChart();
        drawPieChart();
    }

    function drawLineChart() {
        var data = google.visualization.arrayToDataTable([
            ['Day', 'Today', 'Yesterday'],
            ['Mon',  50,  30],
            ['Tue',  100, 80],
            ['Wed',  90, 150],
            ['Thu',  65,  75],
            ['Fri',  80,  56],
            ['Sat',  75, 100]
        ]);

        var options = {
            title: 'Appointments Over the Week',
            curveType: 'function',
            legend: { position: 'bottom' },
            width: '100%',
            height: '100%'
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Men', 'Women'],
        ['Male Patient',     350],
        ['Female Patient',      305]
        
      ]);

      var options = {
        title: 'Daily Male vs Female patient'
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    }
    });
    

    // Initialize the calendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Appointment with Brain Mathew',
                start: '2023-06-14T10:00:00',
                end: '2023-06-14T11:00:00'
            },
            {
                title: 'Consultation with Sika Chirag',
                start: '2023-06-14T13:00:00',
                end: '2023-06-14T14:00:00'
            },
            {
                title: 'Surgery with Peter Parker Joel',
                start: '2023-06-15T14:00:00',
                end: '2023-06-15T15:30:00'
            },
            {
                title: 'Check-up with Rebecca Lynn Stone',
                start: '2023-06-16T15:00:00',
                end: '2023-06-16T16:00:00'
            }
        ]
    });

    calendar.render();


