document.addEventListener('DOMContentLoaded', function() {
    // Dummy data representing appointments (replace with actual database interaction)
    var appointments = [
        { id: 1, appointmentDate: '2024-06-18', appointmentType: 'online', date: '2024-06-18', time: '1:00 PM', status: 'approved' },
        { id: 2, appointmentDate: '2024-06-18', appointmentType: 'offline', date: '2024-06-18', time: '2:00 PM', status: 'pending' },
        { id: 3, appointmentDate: '2024-06-19', appointmentType: 'online', date: '2024-06-19', time: '3:00 PM', status: 'approved' },
        { id: 4, appointmentDate: '2024-06-19', appointmentType: 'offline', date: '2024-06-19', time: '4:00 PM', status: 'pending' },
        { id: 5, appointmentDate: '2024-06-20', appointmentType: 'online', date: '2024-06-20', time: '5:00 PM', status: 'approved' },
        // Add more dummy data for testing filtering logic
    ];

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
            `;
            tableBody.appendChild(row);
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
});

/**
 * Handle approving appointments
 * @param {number} id - Appointment ID
 */
function approveAppointment(id) {
    // Dummy logic
    console.log('Appointment with ID ' + id + ' has been approved.');
}
