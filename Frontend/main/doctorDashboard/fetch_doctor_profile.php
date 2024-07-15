<?php
include 'db_connect.php';

$doctorID = 3; // Assuming you want to fetch the doctor with ID = 3

// Query to fetch doctor profile data
$sql = "SELECT hcp.ID, hcp.Name, YEAR(CURDATE()) - YEAR(hcp.DOB) AS Age, hcp.Gender, 
               hcp.PhoneNumber, hcp.Email, hcp.NID, hcp.YearsOfExperience, 
               hpa.District, hpa.Sub_District, 
               hpe.Education, 
               hpc.Certifications, 
               hpha.HospitalAffiliation 
        FROM tbl_HEALTHCARE_PROFESSIONALS hcp
        LEFT JOIN tbl_HEALTHCARE_PROFESSIONALS_ADDRESS hpa ON hcp.ID = hpa.ID
        LEFT JOIN tbl_HEALTHCARE_PROFESSIONALS_EDUCATION hpe ON hcp.ID = hpe.ID
        LEFT JOIN tbl_HEALTHCARE_PROFESSIONALS_CERTIFICATIONS hpc ON hcp.ID = hpc.ID
        LEFT JOIN tbl_HEALTHCARE_PROFESSIONALS_HOSPITAL_AFFILIATION hpha ON hcp.ID = hpha.ID
        WHERE hcp.ID = $doctorID";

$result = $conn->query($sql);

if (!$result) {
    die("Query failed: " . $conn->error);
}

$doctorProfile = [];

if ($result->num_rows > 0) {
    $doctorProfile = $result->fetch_assoc();
} else {
    die("No data found for DoctorID = $doctorID");
}

$conn->close();
echo json_encode($doctorProfile);
?>

