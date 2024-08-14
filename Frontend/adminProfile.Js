document.addEventListener("DOMContentLoaded", function() {
    // Admin profile data
    const adminProfile = {
        name: "Mr. Mekat",
        email: "admin@example.com",
        role: "Administrator",
        tasks: [
            "Manage Health Facilities Database",
            "Oversee Physician Database",
            "Monitor Patient Database",
            "Review Feedback"
        ]
    };

    // Function to render admin profile information
    function renderAdminProfile() {
        const adminInfo = document.querySelector(".admin-info");

        const adminTasks = adminProfile.tasks.map(task => `<li>${task}</li>`).join("");

        const profileHtml = `
            <h2>Admin Information</h2>
            <p><strong>Name:</strong> ${adminProfile.name}</p>
            <p><strong>Email:</strong> ${adminProfile.email}</p>
            <p><strong>Role:</strong> ${adminProfile.role}</p>
            <p><strong>Tasks:</strong></p>
            <ul>${adminTasks}</ul>
        `;

        adminInfo.innerHTML = profileHtml;
    }

    // Call the render function to populate admin profile
    renderAdminProfile();
});
