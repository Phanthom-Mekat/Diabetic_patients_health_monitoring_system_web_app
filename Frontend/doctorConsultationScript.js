document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("consultation-form").addEventListener("submit", function(event) {
        // Prevent form submission if validation fails
        event.preventDefault();
        
        // Validate Appointment ID
        var appointmentId = document.getElementById("appointment-id").value.trim();
        if (appointmentId === "") {
            alert("Please enter Appointment ID");
            return;
        }

        // Validate Follow-Up Date
        var followUpDate = document.getElementById("follow-up-date").value.trim();
        if (followUpDate === "") {
            alert("Please enter Follow-Up Date");
            return;
        }
        // Check if the follow-up date is a valid date
        if (!isValidDate(followUpDate)) {
            alert("Invalid Follow-Up Date. Please enter a valid date.");
            return;
        }

        // If all validations pass, you can submit the form
        this.submit();
    });

    // Function to validate if a string is a valid date
    function isValidDate(dateString) {
        var regex = /^\d{4}-\d{2}-\d{2}$/; // Simple regex pattern for yyyy-mm-dd format
        if (!regex.test(dateString)) return false;
        var dateParts = dateString.split("-");
        var year = parseInt(dateParts[0]);
        var month = parseInt(dateParts[1]);
        var day = parseInt(dateParts[2]);
        var date = new Date(year, month - 1, day);
        return (
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day
        );
    }
});
