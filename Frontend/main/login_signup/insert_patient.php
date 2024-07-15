<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = ""; // Default XAMPP password
$dbname = "ediacaredbmain";
$port = 3306;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if all required data is present
$requiredFields = ['fname', 'lname', 'dob', 'gender', 'phone', 'email', 'weight', 'height', 'insulin_status', 'diabetes_type', 'district', 'sub_district', 'other_illness'];
foreach ($requiredFields as $field) {
    if (!isset($_POST[$field])) {
        die(json_encode(["success" => false, "message" => "Missing field: $field"]));
    }
}

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$weight = $_POST['weight'];
$height = $_POST['height'];
$insulin_status = $_POST['insulin_status'];
$diabetes_type = $_POST['diabetes_type'];
$district = $_POST['district'];
$sub_district = $_POST['sub_district'];
$other_illness = $_POST['other_illness'];

// Generate a unique patient ID as an integer
$patient_id = substr(uniqid('PATIENT_'), 0, 8); // Example: PATIENT_


// Start a transaction
$conn->begin_transaction();

try {
    // Insert into tbl_PATIENT
    $stmt = $conn->prepare("INSERT INTO tbl_PATIENT (PatientID, FName, LName, DOB, Gender, PhoneNumber, Email, Weight, Height, InsulinStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        throw new Exception("Prepare statement failed: " . $conn->error);
    }
    $stmt->bind_param("ssssisssis", $patient_id, $fname, $lname, $dob, $gender, $phone, $email, $weight, $height, $insulin_status);
    $stmt->execute();
    if ($stmt->error) {
        throw new Exception("Execute statement failed for tbl_PATIENT: " . $stmt->error);
    }
    echo "Inserted into tbl_PATIENT. ";

    $stmt->close();

    // Insert into tbl_PATIENT_OTHER_ILLNESS
    $stmt = $conn->prepare("INSERT INTO tbl_PATIENT_OTHER_ILLNESS (PatientID, OtherIllness) VALUES (?, ?)");
    if (!$stmt) {
        throw new Exception("Prepare statement failed: " . $conn->error);
    }
    $stmt->bind_param("ss", $patient_id, $other_illness);
    $stmt->execute();
    if ($stmt->error) {
        throw new Exception("Execute statement failed for tbl_PATIENT_OTHER_ILLNESS: " . $stmt->error);
    }
    echo "Inserted into tbl_PATIENT_OTHER_ILLNESS. ";

    $stmt->close();

    // Insert into tbl_PATIENT_ADDRESS
    $stmt = $conn->prepare("INSERT INTO tbl_PATIENT_ADDRESS (PatientID, District, Sub_District) VALUES (?, ?, ?)");
    if (!$stmt) {
        throw new Exception("Prepare statement failed: " . $conn->error);
    }
    $stmt->bind_param("sss", $patient_id, $district, $sub_district);
    $stmt->execute();
    if ($stmt->error) {
        throw new Exception("Execute statement failed for tbl_PATIENT_ADDRESS: " . $stmt->error);
    }
    echo "Inserted into tbl_PATIENT_ADDRESS. ";

    $stmt->close();

    // Insert into tbl_PATIENT_DIABETES_TYPE
    $stmt = $conn->prepare("INSERT INTO tbl_PATIENT_DIABETES_TYPE (PatientID, DiabetesType) VALUES (?, ?)");
    if (!$stmt) {
        throw new Exception("Prepare statement failed: " . $conn->error);
    }
    $stmt->bind_param("ss", $patient_id, $diabetes_type);
    $stmt->execute();
    if ($stmt->error) {
        throw new Exception("Execute statement failed for tbl_PATIENT_DIABETES_TYPE: " . $stmt->error);
    }
    echo "Inserted into tbl_PATIENT_DIABETES_TYPE. ";

    $stmt->close();

    // Commit the transaction
    $conn->commit();

    // Send success response
    echo json_encode(["success" => true]);

} catch (Exception $e) {
    // Rollback the transaction in case of an error
    $conn->rollback();

    // Send failure response
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}

$conn->close();
?>
