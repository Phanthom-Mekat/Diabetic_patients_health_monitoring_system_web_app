document.addEventListener('DOMContentLoaded', function() {
    // Dummy data representing prescriptions (replace with actual database interaction)
    var prescriptions = [
        { appointmentId: 'APPT-0001', prescriptionId: 'RX-0001', drugName: 'Drug A', dose: '10mg', dosage: 'Once a day', quantity: 30 },
        { appointmentId: 'APPT-0002', prescriptionId: 'RX-0002', drugName: 'Drug B', dose: '20mg', dosage: 'Twice a day', quantity: 20 },
        { appointmentId: 'APPT-0003', prescriptionId: 'RX-0003', drugName: 'Drug C', dose: '5mg', dosage: 'Thrice a day', quantity: 15 }
        // Add more dummy data for testing
    ];

    // Generate additional dummy data
    for (var i = 4; i <= 20; i++) {
        prescriptions.push({
            appointmentId: 'APPT-' + i.toString().padStart(4, '0'),
            prescriptionId: 'RX-' + i.toString().padStart(4, '0'),
            drugName: 'Drug ' + String.fromCharCode(65 + (i % 26)),
            dose: (i * 5) + 'mg',
            dosage: ['Once a day', 'Twice a day', 'Thrice a day'][i % 3],
            quantity: (i % 10) + 1
        });
    }

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
                    <button class="btn-edit" onclick="editPrescription('${prescription.prescriptionId}')">Edit</button>
                    <button class="btn-delete" onclick="deletePrescription('${prescription.prescriptionId}')">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to search prescriptions by appointment ID
    function searchPrescriptions() {
        var searchAppointmentId = document.getElementById('search-appointment-id').value;
        var filteredPrescriptions = prescriptions.filter(function(prescription) {
            return prescription.appointmentId.includes(searchAppointmentId);
        });
        renderPrescriptions(filteredPrescriptions);
    }

    // Function to edit a prescription
    window.editPrescription = function(prescriptionId) {
        var prescription = prescriptions.find(function(p) { return p.prescriptionId === prescriptionId; });
        if (prescription) {
            var newDrugName = prompt("Enter new drug name:", prescription.drugName);
            var newDose = prompt("Enter new dose:", prescription.dose);
            var newDosage = prompt("Enter new dosage:", prescription.dosage);
            var newQuantity = prompt("Enter new quantity:", prescription.quantity);

            if (newDrugName !== null && newDose !== null && newDosage !== null && newQuantity !== null) {
                prescription.drugName = newDrugName;
                prescription.dose = newDose;
                prescription.dosage = newDosage;
                prescription.quantity = parseInt(newQuantity);
                renderPrescriptions(prescriptions);
            }
        } else {
            alert("Prescription not found!");
        }
    };

    // Function to delete a prescription
    window.deletePrescription = function(prescriptionId) {
        prescriptions = prescriptions.filter(function(prescription) {
            return prescription.prescriptionId !== prescriptionId;
        });
        renderPrescriptions(prescriptions);
    };

    document.getElementById('search-btn').addEventListener('click', searchPrescriptions);

    // Initial rendering of prescriptions
    renderPrescriptions(prescriptions);
});
