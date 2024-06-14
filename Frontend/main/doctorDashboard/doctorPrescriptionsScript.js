document.addEventListener('DOMContentLoaded', function() {
    var prescriptions = [];

    function addPrescription(prescription) {
        prescriptions.push(prescription);
        console.log('Prescription added:', prescription);
        console.log('All prescriptions:', prescriptions);
    }

    function resetForm() {
        document.getElementById('prescription-form').reset();
        document.getElementById('custom-diagnosis').style.display = 'none';
        document.getElementById('custom-diagnosis').value = '';
        document.getElementById('custom-dosage-1').style.display = 'none';
        document.getElementById('custom-dosage-1').value = '';
    }

    function updateCustomFields(index) {
        var customDiagnosis = document.getElementById('custom-diagnosis');
        var customDosage = document.getElementById('custom-dosage-' + index);
        
        if (document.getElementById('diagnosis').value === 'Others') {
            customDiagnosis.style.display = 'block';
        } else {
            customDiagnosis.style.display = 'none';
        }

        if (document.getElementById('dosage-' + index).value === 'Other') {
            customDosage.style.display = 'block';
        } else {
            customDosage.style.display = 'none';
        }
    }

    document.getElementById('prescription-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var patientName = document.getElementById('patient-name').value;
        var symptoms = document.getElementById('symptoms').value;
        var diagnosis = document.getElementById('diagnosis').value;
        
        var drugs = document.querySelectorAll('.drug-entry');
        drugs.forEach(function(drug, index) {
            var drugName = drug.querySelector('#drug-name-' + (index + 1)).value;
            var dose = drug.querySelector('#dose-' + (index + 1)).value;
            var dosage = drug.querySelector('#dosage-' + (index + 1)).value;
            var quantity = drug.querySelector('#quantity-' + (index + 1)).value;

            if (diagnosis === 'Others') {
                diagnosis = document.getElementById('custom-diagnosis').value;
            }

            if (dosage === 'Other') {
                dosage = drug.querySelector('#custom-dosage-' + (index + 1)).value;
            }

            var newPrescription = {
                patientName: patientName,
                symptoms: symptoms,
                diagnosis: diagnosis,
                drugName: drugName,
                dose: dose,
                dosage: dosage,
                quantity: quantity,
                prescriptionId: 'RX-' + (prescriptions.length + 1).toString().padStart(4, '0')
            };

            addPrescription(newPrescription);
        });

        resetForm();
    });

    document.getElementById('diagnosis').addEventListener('change', function() {
        var customDiagnosis = document.getElementById('custom-diagnosis');
        if (this.value === 'Others') {
            customDiagnosis.style.display = 'block';
        } else {
            customDiagnosis.style.display = 'none';
        }
    });

    document.getElementById('add-drug-btn').addEventListener('click', function() {
        var drugsContainer = document.getElementById('drugs-container');
        var nextIndex = drugsContainer.querySelectorAll('.drug-entry').length + 1;

        var newDrugEntry = document.createElement('div');
        newDrugEntry.classList.add('drug-entry');
        newDrugEntry.innerHTML = `
            <h3>Drug ${nextIndex}</h3>
            <div class="form-group">
                <label for="drug-name-${nextIndex}">Drug Name:</label>
                <input type="text" id="drug-name-${nextIndex}" name="drug-name" required>
            </div>
            <div class="form-group">
                <label for="dose-${nextIndex}">Dose (e.g., 500mg):</label>
                <input type="text" id="dose-${nextIndex}" name="dose" required>
            </div>
            <div class="form-group">
                <label for="dosage-${nextIndex}">Dosage:</label>
            <select id="dosage-${nextIndex}" name="dosage" required>
                <option value="Once a day">Once a day</option>
                <option value="Twice a day">Twice a day</option>
                <option value="Thrice a day">Thrice a day</option>
                <option value="Four times a day">Four times a day</option>
                <option value="Other">Other</option>
            </select>
            <input type="text" id="custom-dosage-${nextIndex}" name="custom-dosage" style="display: none;" placeholder="Specify dosage">
            <div class="form-group">
                <label for="quantity-${nextIndex}">Quantity:</label>
                <input type="number" id="quantity-${nextIndex}" name="quantity" required min="1" max="100">
            </div>
        `;
        drugsContainer.appendChild(newDrugEntry);

        // Event listener for dosage change
        document.getElementById(`dosage-${nextIndex}`).addEventListener('change', function() {
            var customDosage = document.getElementById(`custom-dosage-${nextIndex}`);
            if (this.value === 'Other') {
                customDosage.style.display = 'block';
            } else {
                customDosage.style.display = 'none';
            }
        });
    });

    // Initial setup for the first drug entry
    document.getElementById('dosage-1').addEventListener('change', function() {
        var customDosage1 = document.getElementById('custom-dosage-1');
        if (this.value === 'Other') {
            customDosage1.style.display = 'block';
        } else {
            customDosage1.style.display = 'none';
        }
    });

    // Form submission handling
    document.getElementById('prescription-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var patientName = document.getElementById('patient-name').value;
        var symptoms = document.getElementById('symptoms').value;
        var diagnosis = document.getElementById('diagnosis').value;

        var drugs = document.querySelectorAll('.drug-entry');
        drugs.forEach(function(drug, index) {
            var drugName = drug.querySelector(`#drug-name-${index + 1}`).value;
            var dose = drug.querySelector(`#dose-${index + 1}`).value;
            var dosage = drug.querySelector(`#dosage-${index + 1}`).value;
            var quantity = drug.querySelector(`#quantity-${index + 1}`).value;

            if (diagnosis === 'Others') {
                diagnosis = document.getElementById('custom-diagnosis').value;
            }

            if (dosage === 'Other') {
                dosage = drug.querySelector(`#custom-dosage-${index + 1}`).value;
            }

            var newPrescription = {
                patientName: patientName,
                symptoms: symptoms,
                diagnosis: diagnosis,
                drugName: drugName,
                dose: dose,
                dosage: dosage,
                quantity: quantity,
                prescriptionId: 'RX-' + (prescriptions.length + 1).toString().padStart(4, '0')
            };

            addPrescription(newPrescription);
        });

        resetForm();
    });

    function addPrescription(prescription) {
        prescriptions.push(prescription);
        console.log('Prescription added:', prescription);
        console.log('All prescriptions:', prescriptions);
        // You can further process or send the prescriptions to the server here
    }

    function resetForm() {
        document.getElementById('prescription-form').reset();
        document.getElementById('custom-diagnosis').style.display = 'none';
        document.getElementById('custom-diagnosis').value = '';
        document.getElementById('custom-dosage-1').style.display = 'none';
        document.getElementById('custom-dosage-1').value = '';
        var drugsContainer = document.getElementById('drugs-container');
        drugsContainer.innerHTML = `
            <div class="drug-entry">
                <h3>Drug 1</h3>
                <div class="form-group">
                    <label for="drug-name-1">Drug Name:</label>
                    <input type="text" id="drug-name-1" name="drug-name" required>
                </div>
                <div class="form-group">
                    <label for="dose-1">Dose (e.g., 500mg):</label>
                    <input type="text" id="dose-1" name="dose" required>
                </div>
                <div class="form-group">
                    <label for="dosage-1">Dosage:</label>
                    <select id="dosage-1" name="dosage" required>
                        <option value="Once a day">Once a day</option>
                        <option value="Twice a day">Twice a day</option>
                        <option value="Thrice a day">Thrice a day</option>
                        <option value="Four times a day">Four times a day</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" id="custom-dosage-1" name="custom-dosage" style="display: none;" placeholder="Specify dosage">
                </div>
                <div class="form-group">
                    <label for="quantity-1">Quantity:</label>
                    <input type="number" id="quantity-1" name="quantity" required min="1" max="100">
                </div>
            </div>
        `;
        // Reset event listeners for the new entry
        document.getElementById('dosage-1').addEventListener('change', function() {
            var customDosage1 = document.getElementById('custom-dosage-1');
            if (this.value === 'Other') {
                customDosage1.style.display = 'block';
            } else {
                customDosage1.style.display = 'none';
            }
        });
    }

    // Initial setup for the custom fields
    document.getElementById('diagnosis').addEventListener('change', function() {
        var customDiagnosis = document.getElementById('custom-diagnosis');
        if (this.value === 'Others') {
            customDiagnosis.style.display = 'block';
        } else {
            customDiagnosis.style.display = 'none';
        }
    });

    document.getElementById('dosage-1').addEventListener('change', function() {
        var customDosage1 = document.getElementById('custom-dosage-1');
        if (this.value === 'Other') {
            customDosage1.style.display = 'block';
        } else {
            customDosage1.style.display = 'none';
        }
    });
});