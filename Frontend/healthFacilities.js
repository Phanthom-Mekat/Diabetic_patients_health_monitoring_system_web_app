// healthFacilities.js

document.addEventListener('DOMContentLoaded', function() {
    const facilityForm = document.getElementById('facilityForm');
    const facilityTableBody = document.getElementById('facilityTableBody');
    const facilityTypeFilter = document.getElementsByName('facilityTypeFilter');
    const searchBar = document.getElementById('searchBar');
    const hospitalFields = document.getElementById('hospitalFields');
    const diagCenterFields = document.getElementById('diagCenterFields');

    let facilities = []; // Array to store facilities data

    // Event listener for facility type selection
    document.getElementById('facilityType').addEventListener('change', function() {
        if (this.value === 'Hospital') {
            hospitalFields.style.display = 'block';
            diagCenterFields.style.display = 'none';
        } else if (this.value === 'DiagnosticCenter') {
            hospitalFields.style.display = 'none';
            diagCenterFields.style.display = 'block';
        } else {
            hospitalFields.style.display = 'none';
            diagCenterFields.style.display = 'none';
        }
    });

    // Event listener for facility form submission
    facilityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const facility = {
            facilityID: generateFacilityID(),
            name: facilityForm.facilityName.value,
            district: facilityForm.district.value,
            subDistrict: facilityForm.subDistrict.value,
            department: facilityForm.department.value,
            hotline: facilityForm.hotline.value,
            serviceOffered: facilityForm.serviceOffered.value,
            facilityType: facilityForm.facilityType.value
        };

        if (facility.facilityType === 'Hospital') {
            facility.emergencyService = facilityForm.emergencyService.value;
            facility.icuCapacity = facilityForm.icuCapacity.value;
        } else if (facility.facilityType === 'DiagnosticCenter') {
            facility.diagnosticService = facilityForm.diagnosticService.value;
        }

        // Add facility to the array
        facilities.push(facility);

        // Clear form fields
        facilityForm.reset();

        // Update the table
        updateFacilityTable();
    });

    // Event listener for search bar input
    searchBar.addEventListener('input', function() {
        updateFacilityTable();
    });

    // Event listener for facility type filter
    facilityTypeFilter.forEach(function(radio) {
        radio.addEventListener('change', function() {
            updateFacilityTable();
        });
    });

    // Function to update the facility table based on search and filter
    function updateFacilityTable() {
        const searchString = searchBar.value.toLowerCase();
        const filterType = document.querySelector('input[name="facilityTypeFilter"]:checked').value;

        // Clear previous table rows
        facilityTableBody.innerHTML = '';

        // Filter and display matching facilities
        facilities.forEach(function(facility) {
            if ((filterType === 'all' || facility.facilityType.toLowerCase() === filterType) &&
                (facility.name.toLowerCase().includes(searchString) ||
                 facility.district.toLowerCase().includes(searchString) ||
                 facility.subDistrict.toLowerCase().includes(searchString))) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${facility.facilityID}</td>
                    <td>${facility.name}</td>
                    <td>${facility.district}</td>
                    <td>${facility.subDistrict}</td>
                    <td>${facility.department}</td>
                    <td>${facility.hotline}</td>
                    <td>${facility.serviceOffered}</td>
                    <td>${facility.facilityType}</td>
                    <td class="actions">
                        <button class="edit" onclick="editFacility('${facility.facilityID}')">Edit</button>
                        <button class="delete" onclick="deleteFacility('${facility.facilityID}')">Delete</button>
                    </td>
                `;
                facilityTableBody.appendChild(row);
            }
        });
    }

    // Function to generate a unique facility ID (dummy implementation)
    function generateFacilityID() {
        return 'FAC' + Math.floor(Math.random() * 10000);
    }

    // Dummy data initialization (optional)
    facilities.push({
        facilityID: 'FAC1234',
        name: 'City Hospital',
        district: 'Central',
        subDistrict: 'Downtown',
        department: 'Cardiology',
        hotline: '123456789',
        serviceOffered: 'Cardiac Care',
        facilityType: 'Hospital',
        emergencyService: 'Ambulance, ER',
        icuCapacity: '50'
    });

    facilities.push({
        facilityID: 'FAC5678',
        name: 'Tech Diagnostics',
        district: 'East',
        subDistrict: 'Tech Park',
        department: 'Radiology',
        hotline: '987654321',
        serviceOffered: 'MRI, X-Ray',
        facilityType: 'DiagnosticCenter',
        diagnosticService: 'MRI, X-Ray'
    });

    // Initialize table on page load
    updateFacilityTable();
});

// Function to edit a facility (dummy implementation)
function editFacility(facilityID) {
    alert(`Editing facility with ID: ${facilityID}`);
    // Dummy logic to edit facility data
}

// Function to delete a facility (dummy implementation)
function deleteFacility(facilityID) {
    alert(`Deleting facility with ID: ${facilityID}`);
    // Dummy logic to delete facility data
}
