document.addEventListener('DOMContentLoaded', function() {
    // Dummy data representing prescriptions (replace with actual database interaction)
    var prescriptions = [
        { appointmentId: 1, prescriptionId: 101, drugName: 'Drug A', dose: '10mg', dosage: 'Once a day', quantity: 30 },
        { appointmentId: 2, prescriptionId: 102, drugName: 'Drug B', dose: '20mg', dosage: 'Twice a day', quantity: 20 },
        { appointmentId: 3, prescriptionId: 103, drugName: 'Drug C', dose: '5mg', dosage: 'Thrice a day', quantity: 15 }
        // Add more dummy data for testing
    ];

    // Function to render prescriptions table
    function renderPrescriptions(prescriptions) {
        var tableBody = document.querySelector('#prescriptions-table tbody');
        tableBody.innerHTML = '';

        if (prescriptions.length === 0) {
            var noDataRow = document.createElement('tr');
            noDataRow.innerHTML = '<td colspan="7">No prescriptions found.</td>';
            tableBody.appendChild(noDataRow);
            return;
        }

        prescriptions.forEach(function(prescription) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${prescription.appointmentId}</td>
                <td>${prescription.prescriptionId}</td>
                <td>${prescription.drugName}</td>
                <td>${prescription.dose}</td>
                <td>${prescription.dosage}</td>
                <td>${prescription.quantity}</td>
                <td class="actions">
                    <button class="btn-edit" onclick="editPrescription(${prescription.prescriptionId})">Edit</button>
                    <button class="btn-delete" onclick="deletePrescription(${prescription.prescriptionId})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to add new prescription
    function addPrescription(event) {
        event.preventDefault();

        var appointmentId = document.getElementById('appointment-id').value;
        var prescriptionId = document.getElementById('prescription-id').value;
        var drugName = document.getElementById('drug-name').value;
        var dose = document.getElementById('dose').value;
        var dosage = document.getElementById('dosage').value;
        var customDosage = document.getElementById('customDosage').value;
        var quantity = document.getElementById('quantity').value;

        if (dosage === 'Other') {
            dosage = customDosage;
        }

        var newPrescription = {
            appointmentId: appointmentId,
            prescriptionId: prescriptionId,
            drugName: drugName,
            dose: dose,
            dosage: dosage,
            quantity: quantity
        };

        prescriptions.push(newPrescription);
        renderPrescriptions(prescriptions);
        document.getElementById('prescription-form').reset();
    }

    // Function to search prescriptions by appointment ID
    function searchPrescriptions() {
        var searchAppointmentId = document.getElementById('search-appointment-id').value;
        var filteredPrescriptions = prescriptions.filter(function(prescription) {
            return prescription.appointmentId == searchAppointmentId;
        });
        renderPrescriptions(filteredPrescriptions);
    }

    // Function to edit a prescription
    window.editPrescription = function(prescriptionId) {
        // Dummy logic for editing a prescription
        alert('Edit functionality for prescription ID ' + prescriptionId + ' is not implemented yet.');
    };

    // Function to delete a prescription
    window.deletePrescription = function(prescriptionId) {
        prescriptions = prescriptions.filter(function(prescription) {
            return prescription.prescriptionId !== prescriptionId;
        });
        renderPrescriptions(prescriptions);
    };

    // Event listeners
    document.getElementById('prescription-form').addEventListener('submit', addPrescription);
    document.getElementById('search-btn').addEventListener('click', searchPrescriptions);

    // Initial rendering of prescriptions
    renderPrescriptions(prescriptions);
});
