document.addEventListener("DOMContentLoaded", function() {
    const feedbackTable = document.getElementById("feedbackTable").getElementsByTagName('tbody')[0];

    // Dummy data for feedback (you can replace with actual data)
    const feedbackData = [
        { patientId: "P001", rating: 4, feedback: "Good service", goalAchieved: "Yes", suggestions: "None" },
        { patientId: "P002", rating: 3, feedback: "Could improve waiting times", goalAchieved: "No", suggestions: "Improve staff scheduling" },
        { patientId: "P003", rating: 5, feedback: "Excellent care", goalAchieved: "Yes", suggestions: "None" },
        { patientId: "P004", rating: 2, feedback: "Poor communication", goalAchieved: "No", suggestions: "Implement better communication protocols" },
        { patientId: "P005", rating: 4, feedback: "Very satisfied overall", goalAchieved: "Yes", suggestions: "None" }
    ];

    // Function to render feedback data into table rows
    function renderFeedbackTable() {
        feedbackTable.innerHTML = "";
        feedbackData.forEach((feedback, index) => {
            const row = `
                <tr>
                    <td>${feedback.patientId}</td>
                    <td>${feedback.rating}</td>
                    <td>${feedback.feedback}</td>
                    <td>${feedback.goalAchieved}</td>
                    <td>${feedback.suggestions}</td>
                    <td class="actions">
                        <button class="delete" onclick="deleteFeedback(${index})">Delete</button>
                        <button class="addToDashboard">Add to Dashboard</button>
                    </td>
                </tr>
            `;
            feedbackTable.innerHTML += row;
        });
    }

    // Initial rendering of feedback table
    renderFeedbackTable();

    // Function to delete a feedback entry
    window.deleteFeedback = function(index) {
        feedbackData.splice(index, 1);
        renderFeedbackTable();
    };
});
