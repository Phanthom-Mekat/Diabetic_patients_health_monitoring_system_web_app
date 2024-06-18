document.addEventListener('DOMContentLoaded', () => {
    const physicianForm = document.getElementById('physicianForm');
    const physicianTableBody = document.getElementById('physicianTableBody');
    const healthcareProfessionalType = document.getElementById('healthcareProfessionalType');
    const doctorFields = document.getElementById('doctorFields');
    const nutritionistFields = document.getElementById('nutritionistFields');
    const searchBar = document.getElementById('searchBar');
    const filters = document.querySelectorAll('input[name="healthcareProfessionalTypeFilter"]');
    const certificationsContainer = document.getElementById('certificationsContainer');
    const educationContainer = document.getElementById('educationContainer');
    const affiliationsContainer = document.getElementById('affiliationsContainer');
    const addCertificationButton = document.getElementById('addCertificationButton');
    const addEducationButton = document.getElementById('addEducationButton');
    const addAffiliationButton = document.getElementById('addAffiliationButton');

    // Dummy data
    const dummyData = [
        {
            id: 'P001',
            name: 'Dr. John Doe',
            age: 45,
            district: 'District A',
            subDistrict: 'Sub-District 1',
            gender: 'Male',
            phoneNumber: '1234567890',
            email: 'john.doe@example.com',
            nid: 'NID001',
            certifications: ['Certification A', 'Certification B'],
            education: ['MBBS', 'MD'],
            experience: 20,
            affiliations: ['Hospital A', 'Hospital B'],
            type: 'Doctor',
            specialty: 'Cardiology',
            nutritionistType: ''
        },
        {
            id: 'P002',
            name: 'Jane Smith',
            age: 39,
            district: 'District B',
            subDistrict: 'Sub-District 2',
            gender: 'Female',
            phoneNumber: '0987654321',
            email: 'jane.smith@example.com',
            nid: 'NID002',
            certifications: ['Certification C'],
            education: ['BSc Nutrition'],
            experience: 15,
            affiliations: ['Hospital C'],
            type: 'Nutritionist',
            specialty: '',
            nutritionistType: 'Clinical Nutritionist'
        },
        // Add  more dummy records as needed
    ];

    // Populate table with dummy data
    dummyData.forEach(addPhysicianToTable);

    // Form submission event
    physicianForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(physicianForm);
        const newPhysician = {};
        formData.forEach((value, key) => {
            if (!newPhysician[key]) {
                newPhysician[key] = value;
            } else if (Array.isArray(newPhysician[key])) {
                newPhysician[key].push(value);
            } else {
                newPhysician[key] = [newPhysician[key], value];
            }
        });
        newPhysician.certifications = formData.getAll('certifications[]');
        newPhysician.education = formData.getAll('education[]');
        newPhysician.affiliations = formData.getAll('affiliations[]');
        addPhysicianToTable(newPhysician);
        physicianForm.reset();
        toggleConditionalFields();
    });

    // Function to add physician to the table
    function addPhysicianToTable(physician) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${physician.id}</td>
            <td>${physician.name}</td>
            <td>${physician.age}</td>
            <td>${physician.district}</td>
            <td>${physician.subDistrict}</td>
            <td>${physician.gender}</td>
            <td>${physician.phoneNumber}</td>
            <td>${physician.email}</td>
            <td>${physician.nid}</td>
            <td>${physician.certifications.length}</td>
            <td>${physician.education.length}</td>
            <td>${physician.experience}</td>
            <td>${physician.affiliations.length}</td>
            <td>${physician.type}</td>
            <td><button class="view-details" data-physician='${JSON.stringify(physician)}'>View Details</button></td>
                        <td class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;
        physicianTableBody.appendChild(row);
    }

    // Event listener for healthcare professional type selection
    healthcareProfessionalType.addEventListener('change', toggleConditionalFields);

    // Toggle display of conditional fields based on professional type
    function toggleConditionalFields() {
        const type = healthcareProfessionalType.value;
        if (type === 'Doctor') {
            doctorFields.style.display = 'flex';
            nutritionistFields.style.display = 'none';
        } else if (type === 'Nutritionist') {
            doctorFields.style.display = 'none';
            nutritionistFields.style.display = 'flex';
        } else {
            doctorFields.style.display = 'none';
            nutritionistFields.style.display = 'none';
        }
    }

    // Add input fields for certifications, education, and affiliations
    addCertificationButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'certifications[]';
        input.placeholder = 'Certification';
        certificationsContainer.insertBefore(input, addCertificationButton);
    });

    addEducationButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'education[]';
        input.placeholder = 'Education';
        educationContainer.insertBefore(input, addEducationButton);
    });

    addAffiliationButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'affiliations[]';
        input.placeholder = 'Hospital Affiliation';
        affiliationsContainer.insertBefore(input, addAffiliationButton);
    });

    // Search and filter functionality
    searchBar.addEventListener('input', filterTable);
    filters.forEach(filter => filter.addEventListener('change', filterTable));

    function filterTable() {
        const searchValue = searchBar.value.toLowerCase();
        const filterValue = document.querySelector('input[name="healthcareProfessionalTypeFilter"]:checked').value;

        Array.from(physicianTableBody.children).forEach(row => {
            const cells = row.children;
            const [id, name, , , , , , , , certifications, education, , , type] = cells;
            const searchText = `${id.textContent} ${name.textContent}`.toLowerCase();
            const typeText = type.textContent.toLowerCase();

            const matchesSearch = searchText.includes(searchValue);
            const matchesFilter = filterValue === 'all' || typeText === filterValue;

            if (matchesSearch && matchesFilter) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Event delegation for view details, edit, and delete actions
    physicianTableBody.addEventListener('click', event => {
        if (event.target.classList.contains('view-details')) {
            const physician = JSON.parse(event.target.dataset.physician);
            showDetailsModal(physician);
        } else if (event.target.classList.contains('edit')) {
            // Edit functionality here
        } else if (event.target.classList.contains('delete')) {
            // Delete functionality here
            event.target.closest('tr').remove();
        }
    });

    // Modal for displaying details
    function showDetailsModal(physician) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Physician Details</h2>
                <p>ID: ${physician.id}</p>
                <p>Name: ${physician.name}</p>
                <p>Age: ${physician.age}</p>
                <p>Address: ${physician.district}, ${physician.subDistrict}</p>
                <p>Gender: ${physician.gender}</p>
                <p>Phone Number: ${physician.phoneNumber}</p>
                <p>Email: ${physician.email}</p>
                <p>NID: ${physician.nid}</p>
                <p>Certifications: ${physician.certifications.join(', ')}</p>
                <p>Education: ${physician.education.join(', ')}</p>
                <p>Years of Experience: ${physician.experience}</p>
                <p>Hospital Affiliations: ${physician.affiliations.join(', ')}</p>
                <p>Type: ${physician.type}</p>
                <p>${physician.type === 'Doctor' ? 'Specialty: ' + physician.specialty : 'Nutritionist Type: ' + physician.nutritionistType}</p>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        };

        modal.querySelector('.close').addEventListener('click', closeModal);
        window.addEventListener('click', event => {
            if (event.target === modal) {
                closeModal();
            }
        });

        modal.style.display = 'block';
    }
});

