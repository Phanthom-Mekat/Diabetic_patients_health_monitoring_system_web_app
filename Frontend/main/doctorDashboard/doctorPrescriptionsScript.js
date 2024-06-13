document.addEventListener('DOMContentLoaded', function() {
    var prescriptions = [
        { appointmentId: 1, prescriptionId: 101, drugName: 'Drug A', dose: '10mg', dosage: 'Once a day', quantity: 30 },
        { appointmentId: 2, prescriptionId: 102, drugName: 'Drug B', dose: '20mg', dosage: 'Twice a day', quantity: 60 }
    ];

    function renderPrescriptions(prescriptions) {
        var tableBody = document.querySelector('#prescriptions-table tbody');
        tableBody.innerHTML = '';

        prescriptions.forEach(function(prescription, index) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${prescription.appointmentId}</td>
                <td>${prescription.prescriptionId}</td>
                <td contenteditable="true">${prescription.drugName}</td>
                <td contenteditable="true">${prescription.dose}</td>
                <td contenteditable="true">${prescription.dosage}</td>
                <td contenteditable="true">${prescription.quantity}</td>
                <td>
                    <button onclick="updatePrescription(${index})">Update</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    window.updatePrescription = function(index) {
        var tableBody = document.querySelector('#prescriptions-table tbody');
        var row = tableBody.children[index];
        var cells = row.children;

        prescriptions[index].drugName = cells[2].innerText;
        prescriptions[index].dose = cells[3].innerText;
        prescriptions[index].dosage = cells[4].innerText;
        prescriptions[index].quantity = cells[5].innerText;

        alert('Prescription updated successfully!');
    };

    document.querySelector('#prescription-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var appointmentId = document.querySelector('#appointment-id').value;
        var prescriptionId = document.querySelector('#prescription-id').value;
        
        if (prescriptions.some(p => p.appointmentId == appointmentId)) {
            alert('AppointmentID already exists, edit it from the table instead!');
            return;
        }

        var drugName = document.querySelector('#drug-name').value;
        var dose = document.querySelector('#dose').value;
        var dosage = document.querySelector('#dosage').value;
        var quantity = document.querySelector('#quantity').value;

        prescriptions.push({
            appointmentId: appointmentId,
            prescriptionId: prescriptionId,
            drugName: drugName,
            dose: dose,
            dosage: dosage,
            quantity: quantity
        });

        renderPrescriptions(prescriptions);

        document.querySelector('#prescription-form').reset();
        alert('Prescription added successfully!');
    });

    document.querySelector('#search-btn').addEventListener('click', function() {
        var searchAppointmentId = document.querySelector('#search-appointment-id').value;
        var filteredPrescriptions = prescriptions.filter(function(prescription) {
            return prescription.appointmentId == searchAppointmentId;
        });

        if (filteredPrescriptions.length > 0) {
            renderPrescriptions(filteredPrescriptions);
        } else {
            alert('No prescriptions found for the given appointment ID');
        }
    });

    renderPrescriptions(prescriptions);
});
