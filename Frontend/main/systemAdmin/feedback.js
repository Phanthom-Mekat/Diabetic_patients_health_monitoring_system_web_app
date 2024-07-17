const API_URL = 'http://localhost:5000';

document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    await addUser(name);
});

document.getElementById('searchInput').addEventListener('input', filterUsers);

async function addUser(name) {
    const messageDiv = document.getElementById('message');
    try {
        const response = await fetch(`${API_URL}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();

        if (response.ok) {
            messageDiv.textContent = data.message;
            messageDiv.className = 'success';
            document.getElementById('name').value = '';
            fetchUsers();
        } else {
            throw new Error(data.error || 'Failed to add user');
        }
    } catch (error) {
        messageDiv.textContent = error.message;
        messageDiv.className = 'error';
    }
}

async function fetchUsers() {
    try {
        const response = await fetch(`${API_URL}/api/users`);
        const users = await response.json();
        renderUsers(users);
    } catch (error) {
        console.error('Failed to fetch users:', error);
        document.getElementById('message').textContent = 'Failed to fetch users: ' + error.message;
        document.getElementById('message').className = 'error';
    }
}

function renderUsers(users) {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = user.id;
        row.insertCell(1).textContent = user.name;
        
        const actionsCell = row.insertCell(2);
        actionsCell.className = 'action-buttons';
        
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => updateUser(user.id, user.name);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteUser(user.id);
        
        actionsCell.appendChild(updateButton);
        actionsCell.appendChild(deleteButton);
    });
}

async function updateUser(id, currentName) {
    const newName = prompt('Enter new name:', currentName);
    if (newName && newName !== currentName) {
        try {
            const response = await fetch(`${API_URL}/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newName }),
            });

            if (response.ok) {
                fetchUsers();
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user: ' + error.message);
        }
    }
}

async function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        try {
            const response = await fetch(`${API_URL}/api/users/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchUsers();
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user: ' + error.message);
        }
    }
}

function filterUsers() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const tableBody = document.querySelector('#userTable tbody');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const nameCell = rows[i].getElementsByTagName('td')[1];
        if (nameCell) {
            const name = nameCell.textContent || nameCell.innerText;
            if (name.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}

fetchUsers();