<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "ediacaredb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the query was successful
$sql = "SELECT ReviewID, Stars, Date, Description FROM tbl_REVIEW";
$result = $conn->query($sql);
if (!$result) {
    die("Query failed: " . $conn->error);
}

// Store the data in an array
$data = array();
while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Close connection
$conn->close();

// Output the data in JSON format
echo json_encode($data);
?>