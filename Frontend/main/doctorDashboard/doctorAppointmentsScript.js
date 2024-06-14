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
        { id: 52, appointmentDate: '2024-06-20', appointmentType: 'offline', date: '2024-06-22', time: '5:00 PM', status: 'pending' },
        // Add more dummy data for testing filtering logic
    ];

    var patientProfiles = {
        1: { name: 'John Doe', age: 30, gender: 'Male', phone: '+1234567890', email: 'john.doe@example.com', address: '123 Main St, City, Country' },
        2: { name: 'Jane Smith', age: 28, gender: 'Female', phone: '+1234567891', email: 'jane.smith@example.com', address: '456 Elm St, City, Country' },
        3: { name: 'Alice Johnson', age: 35, gender: 'Female', phone: '+1234567892', email: 'alice.johnson@example.com', address: '789 Oak St, City, Country' },
        4: { name: 'Bob Brown', age: 40, gender: 'Male', phone: '+1234567893', email: 'bob.brown@example.com', address: '101 Pine St, City, Country' },
        5: { name: 'Carol White', age: 32, gender: 'Female', phone: '+1234567894', email: 'carol.white@example.com', address: '202 Maple St, City, Country' }
        // Add more dummy patient profiles for testing
    };

    /**
     * Render appointments table
     * @param {Array} appointments - Array of appointments
     */
    function renderAppointments(appointments) {
        var tableBody = document.querySelector('#appointments-table tbody');
        tableBody.innerHTML = '';

        if (appointments.length === 0) {
            alert('No matching appointments found.');
            return;
        }

        appointments.forEach(function(appointment) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${appointment.id}</td>
                <td>${appointment.appointmentDate}</td>
                <td>${appointment.appointmentType}</td>
                <td>${appointment.time}</td>
                <td>${getActionButtons(appointment)}</td>
                <td>${appointment.status}</td>
                <td><button class="view-profile-btn" data-id="${appointment.id}">View Profile</button></td>
            `;
            tableBody.appendChild(row);
        });

        // Add event listeners for view profile buttons
        document.querySelectorAll('.view-profile-btn').forEach(function(button) {
            button.addEventListener('click', function() {
                var appointmentId = this.getAttribute('data-id');
                showProfileCard(appointmentId);
            });
        });
    }

    /**
     * Get action buttons based on appointment status
     * @param {Object} appointment - Appointment object
     * @returns {string} - HTML for action buttons
     */
    function getActionButtons(appointment) {
        if (appointment.status === 'pending') {
            return `<button onclick="approveAppointment(${appointment.id})">Approve</button>`;
        } else {
            return `<button disabled>Approved</button>`;
        }
    }

    /**
     * Filter appointments based on selected filters
     */
    function filterAppointments() {
        var appointmentType = document.querySelector('#appointment-type').value;
        var appointmentDate = document.querySelector('#appointment-date').value;
        var action = document.querySelector('#action-filter').value;
        var status = document.querySelector('input[name="status-filter"]:checked').value;

        var filteredAppointments = appointments.filter(function(appointment) {
            var meetsCriteria = true;

            if (appointmentType !== 'all' && appointment.appointmentType !== appointmentType) {
                meetsCriteria = false;
            }

            if (appointmentDate && appointment.appointmentDate !== appointmentDate) {
                meetsCriteria = false;
            }

            if (action === 'approve' && appointment.status !== 'pending') {
                meetsCriteria = false;
            }

            if (action === 'reject' && appointment.status !== 'approved') {
                meetsCriteria = false;
            }

            if (status !== 'all' && appointment.status !== status) {
                meetsCriteria = false;
            }

            return meetsCriteria;
        });

        renderAppointments(filteredAppointments);
    }

    // Event listeners for filter change
    document.querySelectorAll('#appointment-type, #appointment-date, #action-filter, input[name="status-filter"]').forEach(function(element) {
        element.addEventListener('change', filterAppointments);
    });

    // Initialize datepicker
    $('#appointment-date').datepicker({ dateFormat: 'yy-mm-dd' });

    // Initial rendering of appointments
    renderAppointments(appointments);

    /**
     * Show profile card
     * @param {number} appointmentId - Appointment ID
     */
    function showProfileCard(appointmentId) {
        var profile = patientProfiles[appointmentId];
        if (!profile) {
            alert('Profile not found.');
            return;
        }

        var profileDetails = `
            <strong>Name:</strong> ${profile.name}<br>
            <strong>Age:</strong> ${profile.age}<br>
            <strong>Gender:</strong> ${profile.gender}<br>
            <strong>Phone:</strong> ${profile.phone}<br>
            <strong>Email:</strong> ${profile.email}<br>
            <strong>Address:</strong> ${profile.address}
        `;

        document.getElementById('profile-details').innerHTML = profileDetails;
        document.getElementById('profile-card').style.display = 'block';
    }

    // Close profile card
    document.getElementById('close-profile-card').addEventListener('click', function() {
        document.getElementById('profile-card').style.display = 'none';
    });
});

/**
 * Handle approving appointments
 * @param {number} id - Appointment ID
 */
function approveAppointment(id) {
    // Dummy logic
    console.log('Appointment with ID ' + id + ' has been approved.');
    // Here you would typically make an API call to update the appointment status in the backend
    alert('Appointment with ID ' + id + ' has been approved.');
}
