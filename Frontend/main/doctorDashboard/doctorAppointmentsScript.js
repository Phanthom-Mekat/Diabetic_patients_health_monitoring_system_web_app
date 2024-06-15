document.addEventListener('DOMContentLoaded', function() {
    // Dummy data representing appointments (replace with actual database interaction)
    var appointments = [
        { id: 1, appointmentDate: '2024-06-18', appointmentType: 'online', date: '2024-06-18', time: '1:00 PM', status: 'approved' },
        { id: 2, appointmentDate: '2024-06-18', appointmentType: 'offline', date: '2024-06-18', time: '2:00 PM', status: 'pending' },
        { id: 3, appointmentDate: '2024-06-19', appointmentType: 'online', date: '2024-06-19', time: '3:00 PM', status: 'approved' },
        { id: 4, appointmentDate: '2024-06-19', appointmentType: 'offline', date: '2024-06-19', time: '4:00 PM', status: 'pending' },
        { id: 5, appointmentDate: '2024-06-20', appointmentType: 'online', date: '2024-06-21', time: '5:00 PM', status: 'pending' },
        { id: 9, appointmentDate: '2024-06-18', appointmentType: 'offline', date: '2024-06-18', time: '1:00 PM', status: 'approved' },
        { id: 10, appointmentDate: '2024-06-18', appointmentType: 'offline', date: '2024-06-18', time: '2:00 PM', status: 'pending' },
        { id: 13, appointmentDate: '2024-06-19', appointmentType: 'online', date: '2024-06-19', time: '3:00 PM', status: 'approved' },
        { id: 14, appointmentDate: '2024-06-19', appointmentType: 'offline', date: '2024-06-19', time: '4:00 PM', status: 'pending' },
        { id: 15, appointmentDate: '2024-06-20', appointmentType: 'online', date: '2024-06-20', time: '5:00 PM', status: 'approved' },
        { id: 11, appointmentDate: '2024-06-18', appointmentType: 'offline', date: '2024-06-18', time: '1:00 PM', status: 'approved' },
        { id: 12, appointmentDate: '2024-06-18', appointmentType: 'offline', date: '2024-06-18', time: '2:00 PM', status: 'pending' },
        { id: 31, appointmentDate: '2024-06-19', appointmentType: 'online', date: '2024-06-19', time: '3:00 PM', status: 'approved' },
        { id: 41, appointmentDate: '2024-06-19', appointmentType: 'offline', date: '2024-06-19', time: '4:00 PM', status: 'pending' },
        { id: 51, appointmentDate: '2024-06-20', appointmentType: 'online', date: '2024-06-20', time: '5:00 PM', status: 'approved' },
        { id: 19, appointmentDate: '2024-06-18', appointmentType: 'online', date: '2024-06-18', time: '1:00 PM', status: 'approved' },
        { id: 22, appointmentDate: '2024-06-18', appointmentType: 'offline', date: '2024-06-08', time: '2:00 PM', status: 'pending' },
        { id: 32, appointmentDate: '2024-06-19', appointmentType: 'online', date: '2024-06-19', time: '3:00 PM', status: 'approved' },
        { id: 43, appointmentDate: '2024-06-19', appointmentType: 'offline', date: '2024-06-19', time: '4:00 PM', status: 'pending' },
        { id: 52, appointmentDate: '2024-06-20', appointmentType: 'offline', date: '2024-06-22', time: '5:00 PM', status: 'pending' }
        // Add more dummy data for testing filtering logic
    ];

    var patientProfiles = {
        1: { name: 'John Doe', age: 30, gender: 'Male', phone: '+1234567890', email: 'john.doe@example.com', address: '123 Main St, City, Country' },
        2: { name: 'Jane Smith', age: 28, gender: 'Female', phone: '+1234567891', email: 'jane.smith@example.com', address: '456 Elm St, City, Country' },
        3: { name: 'Alice Johnson', age: 35, gender: 'Female', phone: '+1234567892', email: 'alice.johnson@example.com', address: '789 Maple St, City, Country' },
        4: { name: 'Bob Brown', age: 40, gender: 'Male', phone: '+1234567893', email: 'bob.brown@example.com', address: '321 Oak St, City, Country' },
        5: { name: 'Carol White', age: 32, gender: 'Female', phone: '+1234567894', email: 'carol.white@example.com', address: '654 Pine St, City, Country' },
        9: { name: 'Ali White', age: 30, gender: 'Male', phone: '+1234567890', email: 'john.doe@example.com', address: '123 Main St, City, Country' },
        10: { name: 'Rahul Smith', age: 28, gender: 'Female', phone: '+1234567891', email: 'jane.smith@example.com', address: '456 Elm St, City, Country' },
        13: { name: 'Don Johnson', age: 35, gender: 'Female', phone: '+1234567892', email: 'alice.johnson@example.com', address: '789 Maple St, City, Country' },
        14: { name: 'Surat Brown', age: 40, gender: 'Male', phone: '+1234567893', email: 'bob.brown@example.com', address: '321 Oak St, City, Country' },
        15: { name: 'Ansh White', age: 32, gender: 'Female', phone: '+1234567894', email: 'carol.white@example.com', address: '654 Pine St, City, Country' },
        11: { name: 'Dhruv White', age: 30, gender: 'Male', phone: '+1234567890', email: 'john.doe@example.com', address: '123 Main St, City, Country' },
        12: { name: 'Akash Smith', age: 28, gender: 'Female', phone: '+1234567891', email: 'jane.smith@example.com', address: '456 Elm St, City, Country' },
        31: { name: 'Aayush Johnson', age: 35, gender: 'Female', phone: '+1234567892', email: 'alice.johnson@example.com', address: '789 Maple St, City, Country' },
        41: { name: 'Parth Brown', age: 40, gender: 'Male', phone: '+1234567893', email: 'bob.brown@example.com', address: '321 Oak St, City, Country' },
        51: { name: 'Nimit White', age: 32, gender: 'Female', phone: '+1234567894', email: 'carol.white@example.com', address: '654 Pine St, City, Country' },
        19: { name: 'Ajit White', age: 30, gender: 'Male', phone: '+1234567890', email: 'john.doe@example.com', address: '123 Main St, City, Country' },
        22: { name: 'Akash Smith', age: 28, gender: 'Female', phone: '+1234567891', email: 'jane.smith@example.com', address: '456 Elm St, City, Country' },
        32: { name: 'Akshay Johnson', age: 35, gender: 'Female', phone: '+1234567892', email: 'alice.johnson@example.com', address: '789 Maple St, City, Country' },
        43: { name: 'Rahul Brown', age: 40, gender: 'Male', phone: '+1234567893', email: 'bob.brown@example.com', address: '321 Oak St, City, Country' },
        52: { name: 'Vivek White', age: 32, gender: 'Female', phone: '+1234567894', email: 'carol.white@example.com', address: '654 Pine St, City, Country' }
    };

    function populateAppointmentsTable() {
        var tableBody = $('#appointments-table tbody');
        tableBody.empty();

        appointments.forEach(function(appointment) {
            var row = $('<tr>');
            row.append($('<td>').text(appointment.id));
            row.append($('<td>').text(appointment.appointmentDate));
            row.append($('<td>').text(appointment.appointmentType));
            row.append($('<td>').text(appointment.time));

            var actionCell = $('<td>');
            if (appointment.status === 'pending') {
                var approveButton = $('<button>').text('Approve').click(function() {
                    updateAppointmentStatus(appointment.id, 'approved');
                });
                var rejectButton = $('<button>').text('Reject').click(function() {
                    updateAppointmentStatus(appointment.id, 'rejected');
                });
                actionCell.append(approveButton).append(rejectButton);
            }
            row.append(actionCell);

            var statusCell = $('<td>').text(appointment.status);
            row.append(statusCell);

            var profileButton = $('<button>').text('View Profile').click(function() {
                showPatientProfile(appointment.id);
            });
            row.append($('<td>').append(profileButton));

            // Conditional Treatment button
            var treatmentCell = $('<td>');
            if (appointment.status === 'approved') {
                var treatmentButton = $('<button>').text('Treatment').click(function() {
                    redirectToTreatmentScene(appointment.id);
                });
                treatmentCell.append(treatmentButton);
            } else if (appointment.status === 'rejected') {
                treatmentCell.text('Appointment cancelled');
            }
            row.append(treatmentCell);

            tableBody.append(row);
        });
    }

    function updateAppointmentStatus(appointmentId, status) {
        var appointment = appointments.find(function(a) { return a.id === appointmentId; });
        if (appointment) {
            appointment.status = status;
            populateAppointmentsTable();
        }
    }

    function showPatientProfile(appointmentId) {
        var profile = patientProfiles[appointmentId];
        if (profile) {
            $('#profile-details').html(`
                <p><strong>Name:</strong> ${profile.name}</p>
                <p><strong>Age:</strong> ${profile.age}</p>
                <p><strong>Gender:</strong> ${profile.gender}</p>
                <p><strong>Phone:</strong> ${profile.phone}</p>
                <p><strong>Email:</strong> ${profile.email}</p>
                <p><strong>Address:</strong> ${profile.address}</p>
            `);
            $('#profile-card').show();
        }
    }

    function redirectToTreatmentScene(appointmentId) {
        window.location.href = `doctorTreatment.html?appointmentId=${appointmentId}`;
    }

    $('#close-profile-card').click(function() {
        $('#profile-card').hide();
    });

    // Filter logic
    $('#appointment-type').change(function() {
        filterAppointments();
    });

    $('#appointment-date').datepicker({
        onSelect: function() {
            filterAppointments();
        }
    });

    $('#action-filter').change(function() {
        filterAppointments();
    });

    $('input[name="status-filter"]').change(function() {
        filterAppointments();
    });

    function filterAppointments() {
        var typeFilter = $('#appointment-type').val();
        var dateFilter = $('#appointment-date').val();
        var actionFilter = $('#action-filter').val();
        var statusFilter = $('input[name="status-filter"]:checked').val();

        var filteredAppointments = appointments.filter(function(appointment) {
            var typeMatch = (typeFilter === 'all' || appointment.appointmentType === typeFilter);
            var dateMatch = (!dateFilter || appointment.appointmentDate === dateFilter);
            var actionMatch = (actionFilter === 'all' || appointment.status === actionFilter);
            var statusMatch = (statusFilter === 'all' || appointment.status === statusFilter);
            return typeMatch && dateMatch && actionMatch && statusMatch;
        });

        var tableBody = $('#appointments-table tbody');
        tableBody.empty();

        filteredAppointments.forEach(function(appointment) {
            var row = $('<tr>');
            row.append($('<td>').text(appointment.id));
            row.append($('<td>').text(appointment.appointmentDate));
            row.append($('<td>').text(appointment.appointmentType));
            row.append($('<td>').text(appointment.time));

            var actionCell = $('<td>');
            if (appointment.status === 'pending') {
                var approveButton = $('<button>').text('Approve').click(function() {
                    updateAppointmentStatus(appointment.id, 'approved');
                });
                var rejectButton = $('<button>').text('Reject').click(function() {
                    updateAppointmentStatus(appointment.id, 'rejected');
                });
                actionCell.append(approveButton).append(rejectButton);
            }
            row.append(actionCell);

            var statusCell = $('<td>').text(appointment.status);
            row.append(statusCell);

            var profileButton = $('<button>').text('View Profile').click(function() {
                showPatientProfile(appointment.id);
            });
            row.append($('<td>').append(profileButton));

            // Conditional Treatment button
            var treatmentCell = $('<td>');
            if (appointment.status === 'approved') {
                var treatmentButton = $('<button>').text('Treatment').click(function() {
                    redirectToTreatmentScene(appointment.id);
                });
                treatmentCell.append(treatmentButton);
            } else if (appointment.status === 'rejected') {
                treatmentCell.text('Appointment cancelled');
            }
            row.append(treatmentCell);

            tableBody.append(row);
        });
    }

    // Initialize table with all appointments
    populateAppointmentsTable();
});
