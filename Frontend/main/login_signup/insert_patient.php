<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "your_username"; // replace with your MySQL username
$password = "your_password"; // replace with your MySQL password
$dbname = "ediacaremaindb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => "Connection failed: " . $conn->connect_error]));
}

// Debugging: Output received data to server logs
file_put_contents('php://stderr', print_r($data, TRUE));

// Generate unique and random PatientID
$patientID = rand(10000000, 99999999);

// Prepare and bind
$stmt1 = $conn->prepare("INSERT INTO tbl_patient (PatientID, FName, LName, DOB, Gender, PhoneNumber, Email, Weight, Height, InsulinStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
if (!$stmt1) {
    echo json_encode(['success' => false, 'message' => "Prepare statement failed for tbl_patient: " . $conn->error]);
    $conn->close();
    exit();
}
$stmt1->bind_param("issssisiis", $patientID, $data['fname'], $data['lname'], $data['dob'], $data['gender'], $data['phone'], $data['email'], $data['weight'], $data['height'], $data['insulin_status']);

$stmt2 = $conn->prepare("INSERT INTO tbl_patient_address (PatientID, District, Sub_District) VALUES (?, ?, ?)");
if (!$stmt2) {
    echo json_encode(['success' => false, 'message' => "Prepare statement failed for tbl_patient_address: " . $conn->error]);
    $stmt1->close();
    $conn->close();
    exit();
}
$stmt2->bind_param("iss", $patientID, $data['district'], $data['sub_district']);

$stmt3 = $conn->prepare("INSERT INTO tbl_patient_diabetes_type (PatientID, DiabetesType) VALUES (?, ?)");
if (!$stmt3) {
    echo json_encode(['success' => false, 'message' => "Prepare statement failed for tbl_patient_diabetes_type: " . $conn->error]);
    $stmt1->close();
    $stmt2->close();
    $conn->close();
    exit();
}
$stmt3->bind_param("is", $patientID, $data['diabetes_type']);

// Execute queries and check for errors
if (!$stmt1->execute()) {
    echo json_encode(['success' => false, 'message' => "Execution failed for tbl_patient: " . $stmt1->error]);
    $stmt1->close();
    $stmt2->close();
    $stmt3->close();
    $conn->close();
    exit();
}

if (!$stmt2->execute()) {
    echo json_encode(['success' => false, 'message' => "Execution failed for tbl_patient_address: " . $stmt2->error]);
    $stmt1->close();
    $stmt2->close();
    $stmt3->close();
    $conn->close();
    exit();
}

if (!$stmt3->execute()) {
    echo json_encode(['success' => false, 'message' => "Execution failed for tbl_patient_diabetes_type: " . $stmt3->error]);
    $stmt1->close();
    $stmt2->close();
    $stmt3->close();
    $conn->close();
    exit();
}

// Close statements and connection
$stmt1->close();
$stmt2->close();
stmt3->close();
$conn->close();

echo json_encode(['success' => true, 'message' => "Patient data successfully inserted!"]);
?>
