document.addEventListener('DOMContentLoaded', () => {
    const patientTable = document.getElementById('patientTable').getElementsByTagName('tbody')[0];
    const searchBar = document.getElementById('searchBar');

    const patients = [
        {
            PatientID: 1,
            Name: { fName: 'John', lName: 'Doe' },
            Age: 35,
            Address: { district: 'District A', subDistrict: 'Sub-District A1' },
            Gender: 'Male',
            PhoneNumber: '123-456-7890',
            Email: 'john.doe@example.com'
        },
        {
            PatientID: 2,
            Name: { fName: 'Jane', lName: 'Smith' },
            Age: 28,
            Address: { district: 'District B', subDistrict: 'Sub-District B1' },
            Gender: 'Female',
            PhoneNumber: '098-765-4321',
            Email: 'jane.smith@example.com'
        }
    ];

    function renderTable(filteredPatients = patients) {
        patientTable.innerHTML = '';
        filteredPatients.forEach((patient, index) => {
            const row = patientTable.insertRow();
            row.insertCell(0).textContent = patient.PatientID;
            row.insertCell(1).textContent = `${patient.Name.fName} ${patient.Name.lName}`;
            row.insertCell(2).textContent = patient.Age;
            row.insertCell(3).textContent = patient.Address.district;
            row.insertCell(4).textContent = patient.Address.subDistrict;
            row.insertCell(5).textContent = patient.Gender;
            row.insertCell(6).textContent = patient.PhoneNumber;
            row.insertCell(7).textContent = patient.Email;
            const actionsCell = row.insertCell(8);
            actionsCell.classList.add('actions');
            actionsCell.innerHTML = `
                <button class="edit" onclick="editPatient(${index})">Edit</button>
                <button class="delete" onclick="deletePatient(${index})">Delete</button>
            `;
        });
    }

    window.editPatient = (index) => {
        const patient = patients[index];
        const newName = prompt('Enter new name', `${patient.Name.fName} ${patient.Name.lName}`);
        if (newName) {
            const [fName, lName] = newName.split(' ');
            patient.Name.fName = fName;
            patient.Name.lName = lName;
            renderTable();
        }
    };

    window.deletePatient = (index) => {
        if (confirm('Are you sure you want to delete this patient?')) {
            patients.splice(index, 1);
            renderTable();
        }
    };

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPatients = patients.filter(patient => 
            patient.Name.fName.toLowerCase().includes(searchTerm) || 
            patient.Name.lName.toLowerCase().includes(searchTerm) ||
            patient.PatientID.toString().includes(searchTerm) ||
            patient.Age.toString().includes(searchTerm) ||
            patient.Address.district.toLowerCase().includes(searchTerm) ||
            patient.Address.subDistrict.toLowerCase().includes(searchTerm) ||
            patient.Gender.toLowerCase().includes(searchTerm) ||
            patient.PhoneNumber.includes(searchTerm) ||
            patient.Email.toLowerCase().includes(searchTerm)
        );
        renderTable(filteredPatients);
    });

    renderTable();
});
