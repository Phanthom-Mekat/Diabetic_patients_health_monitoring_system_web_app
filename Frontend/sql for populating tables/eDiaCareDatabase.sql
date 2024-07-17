-- Active: 1720849317085@@127.0.0.1@3306@ediacaredatabase
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 17, 2024 at 11:02 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insertion_work_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_appointment`
--

CREATE TABLE `tbl_appointment` (
  `AppointmentID` int(8) NOT NULL,
  `Date` date NOT NULL,
  `Online` char(1) DEFAULT NULL CHECK (`Online` in ('Y','N')),
  `Offline` char(1) DEFAULT NULL CHECK (`Offline` in ('Y','N')),
  `Time` date NOT NULL,
  `PatientID` int(8) NOT NULL,
  `DoctorID` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_appointment`
--

INSERT INTO `tbl_appointment` (`AppointmentID`, `Date`, `Online`, `Offline`, `Time`, `PatientID`, `DoctorID`) VALUES
(1001, '2024-07-15', 'N', 'Y', '0000-00-00', 20000001, 1),
(1002, '2024-07-18', 'Y', 'N', '0000-00-00', 20000002, 2),
(1003, '2024-07-20', 'N', 'Y', '0000-00-00', 20000003, 3),
(1004, '2024-07-22', 'Y', 'N', '0000-00-00', 20000004, 4),
(1005, '2024-07-25', 'N', 'Y', '0000-00-00', 20000005, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_consultation`
--

CREATE TABLE `tbl_consultation` (
  `ConsultationID` int(8) NOT NULL,
  `Instruction` varchar(250) NOT NULL,
  `FollowUpDate` date DEFAULT NULL,
  `AppointmentID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_consultation`
--

INSERT INTO `tbl_consultation` (`ConsultationID`, `Instruction`, `FollowUpDate`, `AppointmentID`) VALUES
(2001, 'Prescribed medication and advised rest', '2024-07-15', 1001),
(2002, 'Recommended physical therapy exercises', '2024-07-18', 1002),
(2003, 'Dietary changes for better glucose control', '2024-07-20', 1003),
(2004, 'Suggested lifestyle modifications for stress management', '2024-07-22', 1004),
(2005, 'Discussed treatment options and scheduled follow-up', '2024-07-25', 1005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_consultation_suggested_action`
--

CREATE TABLE `tbl_consultation_suggested_action` (
  `ConsultationID` int(8) NOT NULL,
  `SuggestedAdvice` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_consultation_suggested_action`
--

INSERT INTO `tbl_consultation_suggested_action` (`ConsultationID`, `SuggestedAdvice`) VALUES
(2001, 'Increase water intake and monitor blood pressure daily'),
(2002, 'Start a daily walking routine and track steps using a pedometer'),
(2003, 'Reduce caffeine intake and practice relaxation techniques'),
(2004, 'Follow a low-sodium diet and monitor weight regularly'),
(2005, 'Keep a food diary and note any allergic reactions');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_daily_health_metrics`
--

CREATE TABLE `tbl_daily_health_metrics` (
  `MetricID` int(8) NOT NULL,
  `BPDiastolic` char(1) DEFAULT NULL CHECK (`BPDiastolic` in ('Y','N')),
  `BPSystolic` char(1) DEFAULT NULL CHECK (`BPSystolic` in ('Y','N')),
  `Weight` int(3) DEFAULT NULL,
  `GlucoseLevel` int(3) DEFAULT NULL,
  `DailyCaloricConsumption` int(5) DEFAULT NULL,
  `Date` date NOT NULL,
  `CalorieBurned` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_daily_health_metrics`
--

INSERT INTO `tbl_daily_health_metrics` (`MetricID`, `BPDiastolic`, `BPSystolic`, `Weight`, `GlucoseLevel`, `DailyCaloricConsumption`, `Date`, `CalorieBurned`) VALUES
(20001, 'Y', 'Y', 70, 90, 2000, '2024-07-10', 500),
(20002, 'N', 'Y', 75, 100, 2500, '2024-07-11', 600),
(20003, 'Y', 'N', 68, 95, 1800, '2024-07-12', 550),
(20004, 'N', 'N', 80, 105, 2200, '2024-07-13', 650),
(20005, 'Y', 'Y', 65, 85, 2100, '2024-07-14', 700);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosed_symptom`
--

CREATE TABLE `tbl_diagnosed_symptom` (
  `DiagnosedSymptomID` int(7) NOT NULL,
  `Duration` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosed_symptom`
--

INSERT INTO `tbl_diagnosed_symptom` (`DiagnosedSymptomID`, `Duration`) VALUES
(5000001, 7),
(5000002, 14),
(5000003, 21),
(5000004, 28),
(5000005, 35);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosed_symptom_name`
--

CREATE TABLE `tbl_diagnosed_symptom_name` (
  `DiagnosedSymptomID` int(7) NOT NULL,
  `Name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosed_symptom_name`
--

INSERT INTO `tbl_diagnosed_symptom_name` (`DiagnosedSymptomID`, `Name`) VALUES
(5000001, 'Headache'),
(5000002, 'Fever'),
(5000003, 'Cough'),
(5000004, 'Fatigue'),
(5000005, 'Nausea');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_center`
--

CREATE TABLE `tbl_diagnosis_center` (
  `dFacilityID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_center`
--

INSERT INTO `tbl_diagnosis_center` (`dFacilityID`) VALUES
(100002),
(100004);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_center_diagnostic_service`
--

CREATE TABLE `tbl_diagnosis_center_diagnostic_service` (
  `dFacilityID` int(11) NOT NULL,
  `DiagnosticService` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_center_diagnostic_service`
--

INSERT INTO `tbl_diagnosis_center_diagnostic_service` (`dFacilityID`, `DiagnosticService`) VALUES
(100002, 'X-ray'),
(100004, 'MRI');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_record`
--

CREATE TABLE `tbl_diagnosis_record` (
  `DiagnosisID` int(7) NOT NULL,
  `ResultSummary` varchar(300) NOT NULL,
  `Date` date NOT NULL,
  `PatientID` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_record`
--

INSERT INTO `tbl_diagnosis_record` (`DiagnosisID`, `ResultSummary`, `Date`, `PatientID`) VALUES
(3000001, 'Normal', '2024-01-01', 20000001),
(3000002, 'Abnormal', '2024-02-02', 20000002),
(3000003, 'Critical', '2024-03-03', 20000003),
(3000004, 'Normal', '2024-04-04', 20000004),
(3000005, 'Abnormal', '2024-05-05', 20000005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_record_indicates_symptoms`
--

CREATE TABLE `tbl_diagnosis_record_indicates_symptoms` (
  `DiagnosisID` int(7) NOT NULL,
  `DiagnosedSymptomID` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_record_indicates_symptoms`
--

INSERT INTO `tbl_diagnosis_record_indicates_symptoms` (`DiagnosisID`, `DiagnosedSymptomID`) VALUES
(3000001, 5000001),
(3000002, 5000002),
(3000003, 5000003),
(3000004, 5000004),
(3000005, 5000005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_record_observation`
--

CREATE TABLE `tbl_diagnosis_record_observation` (
  `DiagnosisID` int(7) NOT NULL,
  `Observation` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_record_observation`
--

INSERT INTO `tbl_diagnosis_record_observation` (`DiagnosisID`, `Observation`) VALUES
(3000001, 'No issues detected'),
(3000002, 'Requires further analysis'),
(3000003, 'Immediate attention needed'),
(3000004, 'Routine check-up'),
(3000005, 'Minor issues found');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_record_reference_value`
--

CREATE TABLE `tbl_diagnosis_record_reference_value` (
  `DiagnosisID` int(7) NOT NULL,
  `Min_Value` varchar(11) NOT NULL,
  `Max_Value` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_record_reference_value`
--

INSERT INTO `tbl_diagnosis_record_reference_value` (`DiagnosisID`, `Min_Value`, `Max_Value`) VALUES
(3000001, '60', '80'),
(3000002, '100', '200'),
(3000003, '70', '120'),
(3000004, '60', '100'),
(3000005, '40', '60');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_record_result`
--

CREATE TABLE `tbl_diagnosis_record_result` (
  `DiagnosisID` int(7) NOT NULL,
  `TestResult` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_record_result`
--

INSERT INTO `tbl_diagnosis_record_result` (`DiagnosisID`, `TestResult`) VALUES
(3000001, 'Blood Pressure Normal'),
(3000002, 'High Cholesterol'),
(3000003, 'Diabetes Detected'),
(3000004, 'Heart Rate Normal'),
(3000005, 'Vitamin Deficiency');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_record_test_item`
--

CREATE TABLE `tbl_diagnosis_record_test_item` (
  `DiagnosisID` int(7) NOT NULL,
  `TestItem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_record_test_item`
--

INSERT INTO `tbl_diagnosis_record_test_item` (`DiagnosisID`, `TestItem`) VALUES
(3000001, 'Blood Test'),
(3000002, 'Cholesterol Test'),
(3000003, 'Glucose Test'),
(3000004, 'ECG'),
(3000005, 'Vitamin Test');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_test`
--

CREATE TABLE `tbl_diagnosis_test` (
  `DiagnosisTestID` int(7) NOT NULL,
  `TestSample` varchar(25) DEFAULT NULL,
  `DiagnosisBill` int(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_test`
--

INSERT INTO `tbl_diagnosis_test` (`DiagnosisTestID`, `TestSample`, `DiagnosisBill`) VALUES
(4000001, 'Blood', 200),
(4000002, 'Urine', 150),
(4000003, 'Saliva', 100),
(4000004, 'Tissue', 250),
(4000005, 'Hair', 300);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_test_test_name`
--

CREATE TABLE `tbl_diagnosis_test_test_name` (
  `DiagnosisTestID` int(7) NOT NULL,
  `TestName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_test_test_name`
--

INSERT INTO `tbl_diagnosis_test_test_name` (`DiagnosisTestID`, `TestName`) VALUES
(4000001, 'Complete Blood Count'),
(4000002, 'Urine Analysis'),
(4000003, 'Saliva Hormone Test'),
(4000004, 'Tissue Biopsy'),
(4000005, 'Hair Mineral Analysis');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnosis_test_test_type`
--

CREATE TABLE `tbl_diagnosis_test_test_type` (
  `DiagnosisTestID` int(7) NOT NULL,
  `TestType` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnosis_test_test_type`
--

INSERT INTO `tbl_diagnosis_test_test_type` (`DiagnosisTestID`, `TestType`) VALUES
(4000001, 'Hematology'),
(4000002, 'Biochemistry'),
(4000003, 'Endocrinology'),
(4000004, 'Pathology'),
(4000005, 'Toxicology');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diagnostic_tests_under_center`
--

CREATE TABLE `tbl_diagnostic_tests_under_center` (
  `dFacilityID` int(11) NOT NULL,
  `DiagnosisTestID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diagnostic_tests_under_center`
--

INSERT INTO `tbl_diagnostic_tests_under_center` (`dFacilityID`, `DiagnosisTestID`) VALUES
(100002, 4000001),
(100004, 4000002);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diet`
--

CREATE TABLE `tbl_diet` (
  `DietID` int(8) NOT NULL,
  `Date` date NOT NULL,
  `WeightLoss` char(1) DEFAULT NULL CHECK (`WeightLoss` in ('Y','N')),
  `MuscleGain` char(1) DEFAULT NULL CHECK (`MuscleGain` in ('Y','N')),
  `Maintenance` char(1) DEFAULT NULL CHECK (`Maintenance` in ('Y','N')),
  `Time` date NOT NULL,
  `NumberOfMeals` int(3) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `StartingTime` date NOT NULL,
  `EndingTime` date NOT NULL,
  `MetricID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diet`
--

INSERT INTO `tbl_diet` (`DietID`, `Date`, `WeightLoss`, `MuscleGain`, `Maintenance`, `Time`, `NumberOfMeals`, `Description`, `StartingTime`, `EndingTime`, `MetricID`) VALUES
(1, '2024-01-01', 'Y', 'N', 'N', '2024-01-01', 3, 'Low carb diet for weight loss', '2024-01-01', '2024-01-01', 20001),
(2, '2024-02-01', 'N', 'Y', 'N', '2024-02-01', 5, 'High protein diet for muscle gain', '2024-02-01', '2024-02-01', 20002),
(3, '2024-03-01', 'N', 'N', 'Y', '2024-03-01', 4, 'Balanced diet for maintenance', '2024-03-01', '2024-03-01', 20003),
(4, '2024-04-01', 'Y', 'Y', 'N', '2024-04-01', 6, 'Combined diet for weight loss and muscle gain', '2024-04-01', '2024-04-01', 20004),
(5, '2024-05-01', 'N', 'N', 'Y', '2024-05-01', 3, 'Maintenance diet with moderate protein', '2024-05-01', '2024-05-01', 20005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diet_meal_type`
--

CREATE TABLE `tbl_diet_meal_type` (
  `DietID` int(8) NOT NULL,
  `Breakfast` varchar(50) DEFAULT NULL,
  `Lunch` varchar(50) DEFAULT NULL,
  `Dinner` varchar(50) DEFAULT NULL,
  `Snack` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diet_meal_type`
--

INSERT INTO `tbl_diet_meal_type` (`DietID`, `Breakfast`, `Lunch`, `Dinner`, `Snack`) VALUES
(1, 'Scrambled eggs with spinach', 'Grilled chicken salad', 'Salmon with quinoa', 'Greek yogurt with berries'),
(2, 'Oatmeal with fruits', 'Quinoa with vegetables', 'Grilled tofu with rice', 'Mixed nuts'),
(3, 'Whole wheat toast with avocado', 'Vegetable stir-fry', 'Bean soup', 'Fruit smoothie'),
(4, 'Protein shake', 'Baked fish with vegetables', 'Brown rice with lentils', 'Cottage cheese with pineapple'),
(5, 'Granola with almond milk', 'Mixed green salad', 'Grilled vegetables', 'Hummus with carrots');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diet_plan`
--

CREATE TABLE `tbl_diet_plan` (
  `PatientID` int(8) NOT NULL,
  `DietID` int(8) NOT NULL,
  `NutritionistID` int(7) NOT NULL,
  `DietPlan` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diet_plan`
--

INSERT INTO `tbl_diet_plan` (`PatientID`, `DietID`, `NutritionistID`, `DietPlan`) VALUES
(20000001, 1, 1, 'Low carb diet with increased protein intake'),
(20000002, 2, 2, 'High protein diet with moderate carbs'),
(20000003, 3, 3, 'Balanced diet with emphasis on vitamins and minerals'),
(20000004, 4, 4, 'Customized diet plan for weight loss and muscle gain'),
(20000005, 5, 5, 'Maintenance diet with focus on calorie control and nutrients');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diet_recommendation_suggest_food`
--

CREATE TABLE `tbl_diet_recommendation_suggest_food` (
  `FoodID` int(3) NOT NULL,
  `DietID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diet_recommendation_suggest_food`
--

INSERT INTO `tbl_diet_recommendation_suggest_food` (`FoodID`, `DietID`) VALUES
(101, 1),
(102, 1),
(103, 2),
(104, 2),
(105, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diet_recommendation_uses_diagnosis`
--

CREATE TABLE `tbl_diet_recommendation_uses_diagnosis` (
  `DietID` int(8) NOT NULL,
  `DiagnosisID` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diet_recommendation_uses_diagnosis`
--

INSERT INTO `tbl_diet_recommendation_uses_diagnosis` (`DietID`, `DiagnosisID`) VALUES
(1, 3000001),
(2, 3000002),
(3, 3000003),
(4, 3000004),
(5, 3000005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_diet_type`
--

CREATE TABLE `tbl_diet_type` (
  `DietID` int(8) NOT NULL,
  `DietType` int(25) NOT NULL,
  `Name` int(25) NOT NULL,
  `Calories` int(4) NOT NULL,
  `Mineral` int(4) NOT NULL,
  `Carbohydrates` int(4) NOT NULL,
  `Proteins` int(4) NOT NULL,
  `Fats` int(4) NOT NULL,
  `Unit` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_diet_type`
--

INSERT INTO `tbl_diet_type` (`DietID`, `DietType`, `Name`, `Calories`, `Mineral`, `Carbohydrates`, `Proteins`, `Fats`, `Unit`) VALUES
(1, 101, 0, 500, 10, 50, 30, 20, 'Grams'),
(1, 102, 0, 600, 15, 40, 40, 20, 'Grams'),
(3, 101, 0, 400, 8, 60, 20, 15, 'Grams'),
(4, 102, 0, 350, 5, 55, 15, 15, 'Grams'),
(5, 101, 0, 450, 12, 45, 25, 20, 'Grams');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_doctor`
--

CREATE TABLE `tbl_doctor` (
  `DoctorID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_doctor`
--

INSERT INTO `tbl_doctor` (`DoctorID`) VALUES
(1),
(2),
(3),
(4),
(5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_doctor_affiliation`
--

CREATE TABLE `tbl_doctor_affiliation` (
  `DoctorID` int(7) NOT NULL,
  `hFacilityID` int(7) NOT NULL,
  `StartTime` date NOT NULL,
  `EndTime` date NOT NULL,
  `ScDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_doctor_affiliation`
--

INSERT INTO `tbl_doctor_affiliation` (`DoctorID`, `hFacilityID`, `StartTime`, `EndTime`, `ScDate`) VALUES
(1, 100001, '2024-01-01', '2024-12-31', '2024-01-01'),
(3, 100003, '2024-01-01', '2024-12-31', '2024-01-01'),
(5, 100005, '2024-01-01', '2024-12-31', '2024-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_doctor_speciality`
--

CREATE TABLE `tbl_doctor_speciality` (
  `DoctorID` int(4) NOT NULL,
  `Speciality` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_doctor_speciality`
--

INSERT INTO `tbl_doctor_speciality` (`DoctorID`, `Speciality`) VALUES
(1, 'Cardiology'),
(2, 'Orthopedics'),
(3, 'Pediatrics'),
(4, 'Dermatology'),
(5, 'Oncology');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_food`
--

CREATE TABLE `tbl_food` (
  `FoodID` int(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Carbohydrates` int(4) NOT NULL,
  `Fats` int(3) NOT NULL,
  `Vitamins` int(5) NOT NULL,
  `Protein` int(5) NOT NULL,
  `Minerals` int(5) NOT NULL,
  `Unit` varchar(15) NOT NULL,
  `MinCalorie` int(4) NOT NULL,
  `MaxCalorie` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_food`
--

INSERT INTO `tbl_food` (`FoodID`, `Name`, `Carbohydrates`, `Fats`, `Vitamins`, `Protein`, `Minerals`, `Unit`, `MinCalorie`, `MaxCalorie`) VALUES
(101, 'Apple', 14, 0, 1, 0, 1, 'Piece', 52, 95),
(102, 'Banana', 27, 0, 1, 1, 1, 'Piece', 89, 105),
(103, 'Chicken Breast', 0, 3, 0, 31, 1, '100 grams', 165, 200),
(104, 'Broccoli', 7, 0, 1, 3, 1, '100 grams', 34, 55),
(105, 'Almonds', 22, 49, 1, 21, 3, '100 grams', 575, 650);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_food_other_vitals`
--

CREATE TABLE `tbl_food_other_vitals` (
  `FoodID` int(3) NOT NULL,
  `VitalName` varchar(50) NOT NULL,
  `Unit` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_food_other_vitals`
--

INSERT INTO `tbl_food_other_vitals` (`FoodID`, `VitalName`, `Unit`) VALUES
(101, 'Fiber', 'grams'),
(101, 'Sugar', 'grams'),
(102, 'Fiber', 'grams'),
(102, 'Sugar', 'grams'),
(103, 'Sodium', 'milligrams');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_facility`
--

CREATE TABLE `tbl_healthcare_facility` (
  `FacilityID` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Hotline` bigint(20) DEFAULT NULL,
  `DiagnosisCenter` char(1) DEFAULT NULL,
  `Hospital` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_facility`
--

INSERT INTO `tbl_healthcare_facility` (`FacilityID`, `Name`, `Hotline`, `DiagnosisCenter`, `Hospital`) VALUES
(100001, 'Central Hospital', 1234567890, 'N', 'Y'),
(100002, 'Westside Clinic', 2345678901, 'Y', 'N'),
(100003, 'Eastside Hospital', 3456789012, 'N', 'Y'),
(100004, 'North Health Center', 4567890123, 'Y', 'N'),
(100005, 'South Medical Hub', 5678901234, 'N', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_facility_dept`
--

CREATE TABLE `tbl_healthcare_facility_dept` (
  `FacilityID` int(11) NOT NULL,
  `Department` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_facility_dept`
--

INSERT INTO `tbl_healthcare_facility_dept` (`FacilityID`, `Department`) VALUES
(100001, 'Cardiology'),
(100001, 'Neurology'),
(100001, 'Orthopedics'),
(100002, 'Dermatology'),
(100002, 'Pediatrics'),
(100003, 'Emergency'),
(100003, 'Radiology'),
(100004, 'Outpatient'),
(100004, 'Surgery'),
(100005, 'Inpatient');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_facility_location`
--

CREATE TABLE `tbl_healthcare_facility_location` (
  `FacilityID` int(11) NOT NULL,
  `District` varchar(100) NOT NULL,
  `Sub_District` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_facility_location`
--

INSERT INTO `tbl_healthcare_facility_location` (`FacilityID`, `District`, `Sub_District`) VALUES
(100001, 'District A', 'SubA1'),
(100002, 'District B', 'SubB1'),
(100003, 'District C', 'SubC1'),
(100004, 'District D', 'SubD1'),
(100005, 'District E', 'SubE1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_facility_service`
--

CREATE TABLE `tbl_healthcare_facility_service` (
  `FacilityID` int(11) NOT NULL,
  `Service` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_facility_service`
--

INSERT INTO `tbl_healthcare_facility_service` (`FacilityID`, `Service`) VALUES
(100001, 'Emergency'),
(100002, 'Radiology'),
(100003, 'Surgery'),
(100004, 'Outpatient'),
(100005, 'Inpatient');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_professionals`
--

CREATE TABLE `tbl_healthcare_professionals` (
  `ID` int(4) NOT NULL,
  `Name` varchar(35) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` char(1) DEFAULT NULL CHECK (`Gender` in ('M','F')),
  `PhoneNumber` int(11) NOT NULL,
  `Email` varchar(30) DEFAULT NULL,
  `NID` int(10) DEFAULT NULL,
  `YearsOfExperience` int(2) DEFAULT NULL,
  `Doctors` char(1) DEFAULT NULL CHECK (`Doctors` in ('Y','N')),
  `Nutritionist` char(1) DEFAULT NULL CHECK (`Nutritionist` in ('Y','N'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_professionals`
--

INSERT INTO `tbl_healthcare_professionals` (`ID`, `Name`, `DOB`, `Gender`, `PhoneNumber`, `Email`, `NID`, `YearsOfExperience`, `Doctors`, `Nutritionist`) VALUES
(1, 'John Doe', '1980-01-15', 'M', 2147483647, 'johndoe@example.com', 1234567890, 10, 'Y', 'N'),
(2, 'Jane Smith', '1985-02-20', 'F', 2147483647, 'janesmith@example.com', 2147483647, 8, 'N', 'Y'),
(3, 'Robert Brown', '1975-03-25', 'M', 2147483647, 'robertbrown@example.com', 2147483647, 15, 'Y', 'N'),
(4, 'Emily Davis', '1990-04-30', 'F', 2147483647, 'emilydavis@example.com', 2147483647, 5, 'N', 'Y'),
(5, 'Michael Johnson', '1982-05-05', 'M', 2147483647, 'michaeljohnson@example.com', 2147483647, 12, 'Y', 'N');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_professionals_address`
--

CREATE TABLE `tbl_healthcare_professionals_address` (
  `ID` int(4) NOT NULL,
  `District` varchar(20) NOT NULL,
  `Sub_District` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_professionals_address`
--

INSERT INTO `tbl_healthcare_professionals_address` (`ID`, `District`, `Sub_District`) VALUES
(1, 'District A', 'Sub_District 1'),
(2, 'District B', 'Sub_District 2'),
(3, 'District C', 'Sub_District 3'),
(4, 'District D', 'Sub_District 4'),
(5, 'District E', 'Sub_District 5');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_professionals_certifications`
--

CREATE TABLE `tbl_healthcare_professionals_certifications` (
  `ID` int(4) NOT NULL,
  `Certifications` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_professionals_certifications`
--

INSERT INTO `tbl_healthcare_professionals_certifications` (`ID`, `Certifications`) VALUES
(1, 'Certification 1'),
(2, 'Certification 2'),
(3, 'Certification 3'),
(4, 'Certification 4'),
(5, 'Certification 5');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_professionals_education`
--

CREATE TABLE `tbl_healthcare_professionals_education` (
  `ID` int(4) NOT NULL,
  `Education` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_professionals_education`
--

INSERT INTO `tbl_healthcare_professionals_education` (`ID`, `Education`) VALUES
(1, 'Education 1'),
(2, 'Education 2'),
(3, 'Education 3'),
(4, 'Education 4'),
(5, 'Education 5');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_healthcare_professionals_hospital_affiliation`
--

CREATE TABLE `tbl_healthcare_professionals_hospital_affiliation` (
  `ID` int(4) NOT NULL,
  `HospitalAffiliation` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_healthcare_professionals_hospital_affiliation`
--

INSERT INTO `tbl_healthcare_professionals_hospital_affiliation` (`ID`, `HospitalAffiliation`) VALUES
(1, 'Hospital 1'),
(2, 'Hospital 2'),
(3, 'Hospital 3'),
(4, 'Hospital 4'),
(5, 'Hospital 5');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hospital`
--

CREATE TABLE `tbl_hospital` (
  `hFacilityID` int(11) NOT NULL,
  `ICUCapacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_hospital`
--

INSERT INTO `tbl_hospital` (`hFacilityID`, `ICUCapacity`) VALUES
(100001, 50),
(100003, 30),
(100005, 40);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hospital_emergency_service`
--

CREATE TABLE `tbl_hospital_emergency_service` (
  `hFacilityID` int(11) NOT NULL,
  `EmergencyService` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_hospital_emergency_service`
--

INSERT INTO `tbl_hospital_emergency_service` (`hFacilityID`, `EmergencyService`) VALUES
(100001, 'Trauma Care'),
(100003, 'Burn Unit'),
(100005, 'Cardiac Emergency');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_medicine`
--

CREATE TABLE `tbl_medicine` (
  `MedicineID` int(7) NOT NULL,
  `DrugName` varchar(35) NOT NULL,
  `Indications` varchar(50) NOT NULL,
  `Interaction` varchar(35) DEFAULT NULL,
  `SideEffects` varchar(35) DEFAULT NULL,
  `PrecautionsWarnings` varchar(35) DEFAULT NULL,
  `DosageInstructions` varchar(35) DEFAULT NULL,
  `MetricID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_medicine`
--

INSERT INTO `tbl_medicine` (`MedicineID`, `DrugName`, `Indications`, `Interaction`, `SideEffects`, `PrecautionsWarnings`, `DosageInstructions`, `MetricID`) VALUES
(100001, 'Aspirin', 'Pain relief', 'Anticoagulants', 'Nausea', 'Avoid in case of allergy', 'Take with food', 20001),
(100002, 'Metformin', 'Diabetes', 'Alcohol', 'Diarrhea', 'Monitor blood sugar', 'Take with meals', 20002),
(100003, 'Atorvastatin', 'Cholesterol', 'Grapefruit juice', 'Muscle pain', 'Liver function tests', 'Take at bedtime', 20003),
(100004, 'Lisinopril', 'Hypertension', 'Potassium supplements', 'Cough', 'Monitor blood pressure', 'Take at the same time daily', 20004),
(100005, 'Omeprazole', 'GERD', 'Clopidogrel', 'Headache', 'Avoid prolonged use', 'Take before meals', 20005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_nutritionist`
--

CREATE TABLE `tbl_nutritionist` (
  `NutritionistID` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_nutritionist`
--

INSERT INTO `tbl_nutritionist` (`NutritionistID`) VALUES
(1),
(2),
(3),
(4),
(5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_nutritionist_type`
--

CREATE TABLE `tbl_nutritionist_type` (
  `NutritionistID` int(4) NOT NULL,
  `NutritionistType` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_nutritionist_type`
--

INSERT INTO `tbl_nutritionist_type` (`NutritionistID`, `NutritionistType`) VALUES
(1, 'Dietit'),
(2, 'Coach'),
(3, 'Consul'),
(4, 'Dietit'),
(5, 'Coach');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient`
--

CREATE TABLE `tbl_patient` (
  `PatientID` int(8) NOT NULL,
  `FName` varchar(40) NOT NULL,
  `LName` varchar(40) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` char(1) DEFAULT NULL CHECK (`Gender` in ('M','F')),
  `PhoneNumber` int(11) NOT NULL,
  `Email` varchar(25) DEFAULT NULL,
  `Weight` int(3) DEFAULT NULL,
  `Height` int(3) DEFAULT NULL,
  `InsulinStatus` char(1) DEFAULT NULL CHECK (`InsulinStatus` in ('Y','N'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient`
--

INSERT INTO `tbl_patient` (`PatientID`, `FName`, `LName`, `DOB`, `Gender`, `PhoneNumber`, `Email`, `Weight`, `Height`, `InsulinStatus`) VALUES
(20000001, 'John', 'Doe', '1980-01-01', 'M', 1234567890, 'john.doe@example.com', 70, 175, 'N'),
(20000002, 'Jane', 'Smith', '1990-02-02', 'F', 2147483647, 'jane.smith@example.com', 60, 165, 'N'),
(20000003, 'Robert', 'Brown', '1975-03-03', 'M', 2147483647, 'robert.brown@example.com', 80, 180, 'Y'),
(20000004, 'Emily', 'Clark', '1985-04-04', 'F', 2147483647, 'emily.clark@example.com', 55, 160, 'N'),
(20000005, 'Michael', 'Davis', '2000-05-05', 'M', 2147483647, 'michael.davis@example.com', 90, 185, 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient_address`
--

CREATE TABLE `tbl_patient_address` (
  `PatientID` int(8) NOT NULL,
  `District` varchar(20) NOT NULL,
  `Sub_District` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient_address`
--

INSERT INTO `tbl_patient_address` (`PatientID`, `District`, `Sub_District`) VALUES
(20000001, 'Central', 'Downtown'),
(20000002, 'North', 'Uptown'),
(20000003, 'West', 'Midtown'),
(20000004, 'East', 'Eastside'),
(20000005, 'South', 'Southend');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient_diabetes_type`
--

CREATE TABLE `tbl_patient_diabetes_type` (
  `PatientID` int(8) NOT NULL,
  `DiabetesType` char(6) DEFAULT NULL CHECK (`DiabetesType` in ('1','2','others','nil'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient_diabetes_type`
--

INSERT INTO `tbl_patient_diabetes_type` (`PatientID`, `DiabetesType`) VALUES
(20000001, '1'),
(20000002, '2'),
(20000003, 'others'),
(20000004, 'nil'),
(20000005, '1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient_diet_recommendations`
--

CREATE TABLE `tbl_patient_diet_recommendations` (
  `PatientID` int(8) NOT NULL,
  `DietID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient_diet_recommendations`
--

INSERT INTO `tbl_patient_diet_recommendations` (`PatientID`, `DietID`) VALUES
(20000001, 1),
(20000002, 2),
(20000003, 3),
(20000004, 4),
(20000005, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient_feedback`
--

CREATE TABLE `tbl_patient_feedback` (
  `PatientID` int(8) NOT NULL,
  `ReviewID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient_feedback`
--

INSERT INTO `tbl_patient_feedback` (`PatientID`, `ReviewID`) VALUES
(20000001, 60000001),
(20000002, 60000002),
(20000003, 60000003),
(20000004, 60000004),
(20000005, 60000005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient_health_data`
--

CREATE TABLE `tbl_patient_health_data` (
  `PatientID` int(8) NOT NULL,
  `MetricID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient_health_data`
--

INSERT INTO `tbl_patient_health_data` (`PatientID`, `MetricID`) VALUES
(20000001, 20001),
(20000002, 20002),
(20000003, 20003),
(20000004, 20004),
(20000005, 20005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient_other_illness`
--

CREATE TABLE `tbl_patient_other_illness` (
  `PatientID` int(8) NOT NULL,
  `OtherIllness` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_patient_other_illness`
--

INSERT INTO `tbl_patient_other_illness` (`PatientID`, `OtherIllness`) VALUES
(20000001, 'Hypertension'),
(20000002, 'Asthma'),
(20000003, 'Arthritis'),
(20000004, 'Diabetes'),
(20000005, 'Chronic Migraine');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_prescription`
--

CREATE TABLE `tbl_prescription` (
  `PrescriptionID` int(8) NOT NULL,
  `Date` date NOT NULL,
  `UpdatedDate` date DEFAULT NULL,
  `ConsultationID` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_prescription`
--

INSERT INTO `tbl_prescription` (`PrescriptionID`, `Date`, `UpdatedDate`, `ConsultationID`) VALUES
(10000001, '2024-07-01', '2024-07-10', 2001),
(10000002, '2024-07-02', NULL, 2002),
(10000003, '2024-07-03', '2024-07-11', 2003),
(10000004, '2024-07-04', NULL, 2004),
(10000005, '2024-07-05', '2024-07-12', 2005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_prescription_medicine_dosage`
--

CREATE TABLE `tbl_prescription_medicine_dosage` (
  `MedicineID` int(8) NOT NULL,
  `PrescriptionID` int(7) NOT NULL,
  `Frequency` varchar(150) NOT NULL,
  `Duration` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_prescription_medicine_dosage`
--

INSERT INTO `tbl_prescription_medicine_dosage` (`MedicineID`, `PrescriptionID`, `Frequency`, `Duration`) VALUES
(100001, 10000001, 'Twice a day', 7),
(100002, 10000002, 'Once a day', 10),
(100003, 10000003, 'Three times a day', 5),
(100004, 10000004, 'Twice a day', 14),
(100005, 10000005, 'Once a day', 7);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_prescription_test_recommend`
--

CREATE TABLE `tbl_prescription_test_recommend` (
  `PrescriptionID` int(8) NOT NULL,
  `TestRecommend` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_prescription_test_recommend`
--

INSERT INTO `tbl_prescription_test_recommend` (`PrescriptionID`, `TestRecommend`) VALUES
(10000001, 'Blood Test'),
(10000002, 'X-Ray'),
(10000003, 'MRI Scan'),
(10000004, 'Urine Test'),
(10000005, 'CT Scan');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_prescription_treat_symptom`
--

CREATE TABLE `tbl_prescription_treat_symptom` (
  `PrescriptionID` int(8) NOT NULL,
  `DiagnosedSymptomID` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_prescription_treat_symptom`
--

INSERT INTO `tbl_prescription_treat_symptom` (`PrescriptionID`, `DiagnosedSymptomID`) VALUES
(10000001, 5000001),
(10000002, 5000002),
(10000003, 5000003),
(10000004, 5000004),
(10000005, 5000005);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE `tbl_review` (
  `ReviewID` int(8) NOT NULL,
  `Stars` char(1) DEFAULT NULL CHECK (`Stars` in ('Y','N')),
  `Date` date NOT NULL,
  `Description` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_review`
--

INSERT INTO `tbl_review` (`ReviewID`, `Stars`, `Date`, `Description`) VALUES

(60000001, 'Y', '2024-01-01', 'Excellent service'),
(60000002, 'N', '2024-02-02', 'Needs improvement'),
(60000003, 'Y', '2024-03-03', 'Very satisfied'),
(60000004, 'N', '2024-04-04', 'Average experience'),
(60000005, 'Y', '2024-05-05', 'Highly recommended');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_appointment`
--
ALTER TABLE `tbl_appointment`
  ADD PRIMARY KEY (`AppointmentID`),
  ADD KEY `Appointment_FK1` (`PatientID`),
  ADD KEY `Appointment_FK2` (`DoctorID`);

--
-- Indexes for table `tbl_consultation`
--
ALTER TABLE `tbl_consultation`
  ADD PRIMARY KEY (`ConsultationID`),
  ADD KEY `Consultation_FK` (`AppointmentID`);

--
-- Indexes for table `tbl_consultation_suggested_action`
--
ALTER TABLE `tbl_consultation_suggested_action`
  ADD PRIMARY KEY (`ConsultationID`,`SuggestedAdvice`);

--
-- Indexes for table `tbl_daily_health_metrics`
--
ALTER TABLE `tbl_daily_health_metrics`
  ADD PRIMARY KEY (`MetricID`);

--
-- Indexes for table `tbl_diagnosed_symptom`
--
ALTER TABLE `tbl_diagnosed_symptom`
  ADD PRIMARY KEY (`DiagnosedSymptomID`);

--
-- Indexes for table `tbl_diagnosed_symptom_name`
--
ALTER TABLE `tbl_diagnosed_symptom_name`
  ADD PRIMARY KEY (`DiagnosedSymptomID`,`Name`);

--
-- Indexes for table `tbl_diagnosis_center`
--
ALTER TABLE `tbl_diagnosis_center`
  ADD PRIMARY KEY (`dFacilityID`);

--
-- Indexes for table `tbl_diagnosis_center_diagnostic_service`
--
ALTER TABLE `tbl_diagnosis_center_diagnostic_service`
  ADD PRIMARY KEY (`dFacilityID`,`DiagnosticService`);

--
-- Indexes for table `tbl_diagnosis_record`
--
ALTER TABLE `tbl_diagnosis_record`
  ADD PRIMARY KEY (`DiagnosisID`),
  ADD KEY `fk_PatientID` (`PatientID`);

--
-- Indexes for table `tbl_diagnosis_record_indicates_symptoms`
--
ALTER TABLE `tbl_diagnosis_record_indicates_symptoms`
  ADD PRIMARY KEY (`DiagnosisID`,`DiagnosedSymptomID`),
  ADD KEY `DiagnosisRecordIndicatesSymptoms_FK2` (`DiagnosedSymptomID`);

--
-- Indexes for table `tbl_diagnosis_record_observation`
--
ALTER TABLE `tbl_diagnosis_record_observation`
  ADD PRIMARY KEY (`DiagnosisID`);

--
-- Indexes for table `tbl_diagnosis_record_reference_value`
--
ALTER TABLE `tbl_diagnosis_record_reference_value`
  ADD PRIMARY KEY (`DiagnosisID`,`Min_Value`,`Max_Value`);

--
-- Indexes for table `tbl_diagnosis_record_result`
--
ALTER TABLE `tbl_diagnosis_record_result`
  ADD PRIMARY KEY (`DiagnosisID`,`TestResult`);

--
-- Indexes for table `tbl_diagnosis_record_test_item`
--
ALTER TABLE `tbl_diagnosis_record_test_item`
  ADD PRIMARY KEY (`DiagnosisID`,`TestItem`);

--
-- Indexes for table `tbl_diagnosis_test`
--
ALTER TABLE `tbl_diagnosis_test`
  ADD PRIMARY KEY (`DiagnosisTestID`);

--
-- Indexes for table `tbl_diagnosis_test_test_name`
--
ALTER TABLE `tbl_diagnosis_test_test_name`
  ADD PRIMARY KEY (`DiagnosisTestID`,`TestName`);

--
-- Indexes for table `tbl_diagnosis_test_test_type`
--
ALTER TABLE `tbl_diagnosis_test_test_type`
  ADD PRIMARY KEY (`DiagnosisTestID`,`TestType`);

--
-- Indexes for table `tbl_diagnostic_tests_under_center`
--
ALTER TABLE `tbl_diagnostic_tests_under_center`
  ADD PRIMARY KEY (`dFacilityID`,`DiagnosisTestID`);

--
-- Indexes for table `tbl_diet`
--
ALTER TABLE `tbl_diet`
  ADD PRIMARY KEY (`DietID`),
  ADD KEY `Diet_FK` (`MetricID`);

--
-- Indexes for table `tbl_diet_meal_type`
--
ALTER TABLE `tbl_diet_meal_type`
  ADD PRIMARY KEY (`DietID`);

--
-- Indexes for table `tbl_diet_plan`
--
ALTER TABLE `tbl_diet_plan`
  ADD PRIMARY KEY (`PatientID`,`DietID`,`NutritionistID`),
  ADD KEY `DietPlan_FK2` (`DietID`),
  ADD KEY `DietPlan_FK3` (`NutritionistID`);

--
-- Indexes for table `tbl_diet_recommendation_suggest_food`
--
ALTER TABLE `tbl_diet_recommendation_suggest_food`
  ADD PRIMARY KEY (`FoodID`,`DietID`),
  ADD KEY `DietRecommendationSuggestFood_FK2` (`DietID`);

--
-- Indexes for table `tbl_diet_recommendation_uses_diagnosis`
--
ALTER TABLE `tbl_diet_recommendation_uses_diagnosis`
  ADD PRIMARY KEY (`DietID`,`DiagnosisID`),
  ADD KEY `DietRecommendationUsesDiagnosis_FK2` (`DiagnosisID`);

--
-- Indexes for table `tbl_diet_type`
--
ALTER TABLE `tbl_diet_type`
  ADD PRIMARY KEY (`DietID`,`DietType`);

--
-- Indexes for table `tbl_doctor`
--
ALTER TABLE `tbl_doctor`
  ADD PRIMARY KEY (`DoctorID`);

--
-- Indexes for table `tbl_doctor_affiliation`
--
ALTER TABLE `tbl_doctor_affiliation`
  ADD PRIMARY KEY (`DoctorID`,`hFacilityID`,`StartTime`,`EndTime`,`ScDate`),
  ADD KEY `DoctorAffiliation_FK2` (`hFacilityID`);

--
-- Indexes for table `tbl_doctor_speciality`
--
ALTER TABLE `tbl_doctor_speciality`
  ADD PRIMARY KEY (`DoctorID`,`Speciality`);

--
-- Indexes for table `tbl_food`
--
ALTER TABLE `tbl_food`
  ADD PRIMARY KEY (`FoodID`);

--
-- Indexes for table `tbl_food_other_vitals`
--
ALTER TABLE `tbl_food_other_vitals`
  ADD PRIMARY KEY (`FoodID`,`VitalName`);

--
-- Indexes for table `tbl_healthcare_facility`
--
ALTER TABLE `tbl_healthcare_facility`
  ADD PRIMARY KEY (`FacilityID`);

--
-- Indexes for table `tbl_healthcare_facility_dept`
--
ALTER TABLE `tbl_healthcare_facility_dept`
  ADD PRIMARY KEY (`FacilityID`,`Department`);

--
-- Indexes for table `tbl_healthcare_facility_location`
--
ALTER TABLE `tbl_healthcare_facility_location`
  ADD PRIMARY KEY (`FacilityID`,`District`,`Sub_District`);

--
-- Indexes for table `tbl_healthcare_facility_service`
--
ALTER TABLE `tbl_healthcare_facility_service`
  ADD PRIMARY KEY (`FacilityID`,`Service`);

--
-- Indexes for table `tbl_healthcare_professionals`
--
ALTER TABLE `tbl_healthcare_professionals`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_healthcare_professionals_address`
--
ALTER TABLE `tbl_healthcare_professionals_address`
  ADD PRIMARY KEY (`ID`,`District`,`Sub_District`);

--
-- Indexes for table `tbl_healthcare_professionals_certifications`
--
ALTER TABLE `tbl_healthcare_professionals_certifications`
  ADD PRIMARY KEY (`ID`,`Certifications`);

--
-- Indexes for table `tbl_healthcare_professionals_education`
--
ALTER TABLE `tbl_healthcare_professionals_education`
  ADD PRIMARY KEY (`ID`,`Education`);

--
-- Indexes for table `tbl_healthcare_professionals_hospital_affiliation`
--
ALTER TABLE `tbl_healthcare_professionals_hospital_affiliation`
  ADD PRIMARY KEY (`ID`,`HospitalAffiliation`);

--
-- Indexes for table `tbl_hospital`
--
ALTER TABLE `tbl_hospital`
  ADD PRIMARY KEY (`hFacilityID`);

--
-- Indexes for table `tbl_hospital_emergency_service`
--
ALTER TABLE `tbl_hospital_emergency_service`
  ADD PRIMARY KEY (`hFacilityID`,`EmergencyService`);

--
-- Indexes for table `tbl_medicine`
--
ALTER TABLE `tbl_medicine`
  ADD PRIMARY KEY (`MedicineID`),
  ADD KEY `Medicine_FK` (`MetricID`);

--
-- Indexes for table `tbl_nutritionist`
--
ALTER TABLE `tbl_nutritionist`
  ADD PRIMARY KEY (`NutritionistID`);

--
-- Indexes for table `tbl_nutritionist_type`
--
ALTER TABLE `tbl_nutritionist_type`
  ADD PRIMARY KEY (`NutritionistID`,`NutritionistType`);

--
-- Indexes for table `tbl_patient`
--
ALTER TABLE `tbl_patient`
  ADD PRIMARY KEY (`PatientID`);

--
-- Indexes for table `tbl_patient_address`
--
ALTER TABLE `tbl_patient_address`
  ADD PRIMARY KEY (`PatientID`,`District`,`Sub_District`);

--
-- Indexes for table `tbl_patient_diabetes_type`
--
ALTER TABLE `tbl_patient_diabetes_type`
  ADD PRIMARY KEY (`PatientID`);

--
-- Indexes for table `tbl_patient_diet_recommendations`
--
ALTER TABLE `tbl_patient_diet_recommendations`
  ADD PRIMARY KEY (`PatientID`,`DietID`),
  ADD KEY `PatientDietRecommendations_FK2` (`DietID`);

--
-- Indexes for table `tbl_patient_feedback`
--
ALTER TABLE `tbl_patient_feedback`
  ADD PRIMARY KEY (`PatientID`,`ReviewID`),
  ADD KEY `PatientFeedback_FK2` (`ReviewID`);

--
-- Indexes for table `tbl_patient_health_data`
--
ALTER TABLE `tbl_patient_health_data`
  ADD PRIMARY KEY (`PatientID`,`MetricID`),
  ADD KEY `PatientHealthData_FK2` (`MetricID`);

--
-- Indexes for table `tbl_patient_other_illness`
--
ALTER TABLE `tbl_patient_other_illness`
  ADD PRIMARY KEY (`PatientID`,`OtherIllness`);

--
-- Indexes for table `tbl_prescription`
--
ALTER TABLE `tbl_prescription`
  ADD PRIMARY KEY (`PrescriptionID`),
  ADD KEY `Prescription_FK` (`ConsultationID`);

--
-- Indexes for table `tbl_prescription_medicine_dosage`
--
ALTER TABLE `tbl_prescription_medicine_dosage`
  ADD PRIMARY KEY (`MedicineID`,`PrescriptionID`),
  ADD KEY `PrescriptionMedicineDosage_FK2` (`PrescriptionID`);

--
-- Indexes for table `tbl_prescription_test_recommend`
--
ALTER TABLE `tbl_prescription_test_recommend`
  ADD PRIMARY KEY (`PrescriptionID`,`TestRecommend`);

--
-- Indexes for table `tbl_prescription_treat_symptom`
--
ALTER TABLE `tbl_prescription_treat_symptom`
  ADD PRIMARY KEY (`PrescriptionID`,`DiagnosedSymptomID`),
  ADD KEY `PrescriptionTreatSymptom_FK2` (`DiagnosedSymptomID`);

--
-- Indexes for table `tbl_review`
--
ALTER TABLE `tbl_review`
  ADD PRIMARY KEY (`ReviewID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_appointment`
--
ALTER TABLE `tbl_appointment`
  ADD CONSTRAINT `Appointment_FK1` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`),
  ADD CONSTRAINT `Appointment_FK2` FOREIGN KEY (`DoctorID`) REFERENCES `tbl_doctor` (`DoctorID`);

--
-- Constraints for table `tbl_consultation`
--
ALTER TABLE `tbl_consultation`
  ADD CONSTRAINT `Consultation_FK` FOREIGN KEY (`AppointmentID`) REFERENCES `tbl_appointment` (`AppointmentID`);

--
-- Constraints for table `tbl_consultation_suggested_action`
--
ALTER TABLE `tbl_consultation_suggested_action`
  ADD CONSTRAINT `ConsultationSuggestedAction_FK` FOREIGN KEY (`ConsultationID`) REFERENCES `tbl_consultation` (`ConsultationID`);

--
-- Constraints for table `tbl_diagnosed_symptom_name`
--
ALTER TABLE `tbl_diagnosed_symptom_name`
  ADD CONSTRAINT `DiagnosedSymptomName_FK` FOREIGN KEY (`DiagnosedSymptomID`) REFERENCES `tbl_diagnosed_symptom` (`DiagnosedSymptomID`);

--
-- Constraints for table `tbl_diagnosis_center`
--
ALTER TABLE `tbl_diagnosis_center`
  ADD CONSTRAINT `tbl_diagnosis_center_ibfk_1` FOREIGN KEY (`dFacilityID`) REFERENCES `tbl_healthcare_facility` (`FacilityID`);

--
-- Constraints for table `tbl_diagnosis_center_diagnostic_service`
--
ALTER TABLE `tbl_diagnosis_center_diagnostic_service`
  ADD CONSTRAINT `tbl_diagnosis_center_diagnostic_service_ibfk_1` FOREIGN KEY (`dFacilityID`) REFERENCES `tbl_diagnosis_center` (`dFacilityID`);

--
-- Constraints for table `tbl_diagnosis_record`
--
ALTER TABLE `tbl_diagnosis_record`
  ADD CONSTRAINT `fk_PatientID` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`);

--
-- Constraints for table `tbl_diagnosis_record_indicates_symptoms`
--
ALTER TABLE `tbl_diagnosis_record_indicates_symptoms`
  ADD CONSTRAINT `DiagnosisRecordIndicatesSymptoms_FK1` FOREIGN KEY (`DiagnosisID`) REFERENCES `tbl_diagnosis_record` (`DiagnosisID`),
  ADD CONSTRAINT `DiagnosisRecordIndicatesSymptoms_FK2` FOREIGN KEY (`DiagnosedSymptomID`) REFERENCES `tbl_diagnosed_symptom` (`DiagnosedSymptomID`);

--
-- Constraints for table `tbl_diagnosis_record_observation`
--
ALTER TABLE `tbl_diagnosis_record_observation`
  ADD CONSTRAINT `DiagnosisRecordObservation_FK` FOREIGN KEY (`DiagnosisID`) REFERENCES `tbl_diagnosis_record` (`DiagnosisID`);

--
-- Constraints for table `tbl_diagnosis_record_reference_value`
--
ALTER TABLE `tbl_diagnosis_record_reference_value`
  ADD CONSTRAINT `DiagnosisRecordReferenceValue_FK` FOREIGN KEY (`DiagnosisID`) REFERENCES `tbl_diagnosis_record` (`DiagnosisID`);

--
-- Constraints for table `tbl_diagnosis_record_result`
--
ALTER TABLE `tbl_diagnosis_record_result`
  ADD CONSTRAINT `DiagnosisRecordResult_FK` FOREIGN KEY (`DiagnosisID`) REFERENCES `tbl_diagnosis_record` (`DiagnosisID`);

--
-- Constraints for table `tbl_diagnosis_record_test_item`
--
ALTER TABLE `tbl_diagnosis_record_test_item`
  ADD CONSTRAINT `DiagnosisRecordTestItem_FK` FOREIGN KEY (`DiagnosisID`) REFERENCES `tbl_diagnosis_record` (`DiagnosisID`);

--
-- Constraints for table `tbl_diagnosis_test_test_name`
--
ALTER TABLE `tbl_diagnosis_test_test_name`
  ADD CONSTRAINT `DiagnosisTestTestName_FK` FOREIGN KEY (`DiagnosisTestID`) REFERENCES `tbl_diagnosis_test` (`DiagnosisTestID`);

--
-- Constraints for table `tbl_diagnosis_test_test_type`
--
ALTER TABLE `tbl_diagnosis_test_test_type`
  ADD CONSTRAINT `DiagnosisTestTestType_FK` FOREIGN KEY (`DiagnosisTestID`) REFERENCES `tbl_diagnosis_test` (`DiagnosisTestID`);

--
-- Constraints for table `tbl_diagnostic_tests_under_center`
--
ALTER TABLE `tbl_diagnostic_tests_under_center`
  ADD CONSTRAINT `tbl_diagnostic_tests_under_center_ibfk_1` FOREIGN KEY (`dFacilityID`) REFERENCES `tbl_diagnosis_center` (`dFacilityID`);

--
-- Constraints for table `tbl_diet`
--
ALTER TABLE `tbl_diet`
  ADD CONSTRAINT `Diet_FK` FOREIGN KEY (`MetricID`) REFERENCES `tbl_daily_health_metrics` (`MetricID`);

--
-- Constraints for table `tbl_diet_meal_type`
--
ALTER TABLE `tbl_diet_meal_type`
  ADD CONSTRAINT `DietMealType_FK` FOREIGN KEY (`DietID`) REFERENCES `tbl_diet` (`DietID`);

--
-- Constraints for table `tbl_diet_plan`
--
ALTER TABLE `tbl_diet_plan`
  ADD CONSTRAINT `DietPlan_FK1` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`),
  ADD CONSTRAINT `DietPlan_FK2` FOREIGN KEY (`DietID`) REFERENCES `tbl_diet` (`DietID`),
  ADD CONSTRAINT `DietPlan_FK3` FOREIGN KEY (`NutritionistID`) REFERENCES `tbl_nutritionist` (`NutritionistID`);

--
-- Constraints for table `tbl_diet_recommendation_suggest_food`
--
ALTER TABLE `tbl_diet_recommendation_suggest_food`
  ADD CONSTRAINT `DietRecommendationSuggestFood_FK1` FOREIGN KEY (`FoodID`) REFERENCES `tbl_food` (`FoodID`),
  ADD CONSTRAINT `DietRecommendationSuggestFood_FK2` FOREIGN KEY (`DietID`) REFERENCES `tbl_diet` (`DietID`);

--
-- Constraints for table `tbl_diet_recommendation_uses_diagnosis`
--
ALTER TABLE `tbl_diet_recommendation_uses_diagnosis`
  ADD CONSTRAINT `DietRecommendationUsesDiagnosis_FK1` FOREIGN KEY (`DietID`) REFERENCES `tbl_diet` (`DietID`),
  ADD CONSTRAINT `DietRecommendationUsesDiagnosis_FK2` FOREIGN KEY (`DiagnosisID`) REFERENCES `tbl_diagnosis_record` (`DiagnosisID`);

--
-- Constraints for table `tbl_diet_type`
--
ALTER TABLE `tbl_diet_type`
  ADD CONSTRAINT `DietType_FK` FOREIGN KEY (`DietID`) REFERENCES `tbl_diet` (`DietID`);

--
-- Constraints for table `tbl_doctor`
--
ALTER TABLE `tbl_doctor`
  ADD CONSTRAINT `Doctor_FK` FOREIGN KEY (`DoctorID`) REFERENCES `tbl_healthcare_professionals` (`ID`);

--
-- Constraints for table `tbl_doctor_affiliation`
--
ALTER TABLE `tbl_doctor_affiliation`
  ADD CONSTRAINT `DoctorAffiliation_FK1` FOREIGN KEY (`DoctorID`) REFERENCES `tbl_doctor` (`DoctorID`),
  ADD CONSTRAINT `DoctorAffiliation_FK2` FOREIGN KEY (`hFacilityID`) REFERENCES `tbl_hospital` (`hFacilityID`);

--
-- Constraints for table `tbl_doctor_speciality`
--
ALTER TABLE `tbl_doctor_speciality`
  ADD CONSTRAINT `DoctorSpeciality_FK` FOREIGN KEY (`DoctorID`) REFERENCES `tbl_doctor` (`DoctorID`);

--
-- Constraints for table `tbl_food_other_vitals`
--
ALTER TABLE `tbl_food_other_vitals`
  ADD CONSTRAINT `FoodOtherVitals_FK` FOREIGN KEY (`FoodID`) REFERENCES `tbl_food` (`FoodID`);

--
-- Constraints for table `tbl_healthcare_facility_dept`
--
ALTER TABLE `tbl_healthcare_facility_dept`
  ADD CONSTRAINT `tbl_healthcare_facility_dept_ibfk_1` FOREIGN KEY (`FacilityID`) REFERENCES `tbl_healthcare_facility` (`FacilityID`);

--
-- Constraints for table `tbl_healthcare_facility_location`
--
ALTER TABLE `tbl_healthcare_facility_location`
  ADD CONSTRAINT `tbl_healthcare_facility_location_ibfk_1` FOREIGN KEY (`FacilityID`) REFERENCES `tbl_healthcare_facility` (`FacilityID`);

--
-- Constraints for table `tbl_healthcare_facility_service`
--
ALTER TABLE `tbl_healthcare_facility_service`
  ADD CONSTRAINT `tbl_healthcare_facility_service_ibfk_1` FOREIGN KEY (`FacilityID`) REFERENCES `tbl_healthcare_facility` (`FacilityID`);

--
-- Constraints for table `tbl_healthcare_professionals_address`
--
ALTER TABLE `tbl_healthcare_professionals_address`
  ADD CONSTRAINT `HealthcareProfessionalsAddress_FK` FOREIGN KEY (`ID`) REFERENCES `tbl_healthcare_professionals` (`ID`);

--
-- Constraints for table `tbl_healthcare_professionals_certifications`
--
ALTER TABLE `tbl_healthcare_professionals_certifications`
  ADD CONSTRAINT `HealthcareProfessionalsCertifications_FK` FOREIGN KEY (`ID`) REFERENCES `tbl_healthcare_professionals` (`ID`);

--
-- Constraints for table `tbl_healthcare_professionals_education`
--
ALTER TABLE `tbl_healthcare_professionals_education`
  ADD CONSTRAINT `HealthcareProfessionalsEducation_FK` FOREIGN KEY (`ID`) REFERENCES `tbl_healthcare_professionals` (`ID`);

--
-- Constraints for table `tbl_healthcare_professionals_hospital_affiliation`
--
ALTER TABLE `tbl_healthcare_professionals_hospital_affiliation`
  ADD CONSTRAINT `HealthcareProfessionalsHospitalAffiliation_FK` FOREIGN KEY (`ID`) REFERENCES `tbl_healthcare_professionals` (`ID`);

--
-- Constraints for table `tbl_hospital`
--
ALTER TABLE `tbl_hospital`
  ADD CONSTRAINT `tbl_hospital_ibfk_1` FOREIGN KEY (`hFacilityID`) REFERENCES `tbl_healthcare_facility` (`FacilityID`);

--
-- Constraints for table `tbl_hospital_emergency_service`
--
ALTER TABLE `tbl_hospital_emergency_service`
  ADD CONSTRAINT `tbl_hospital_emergency_service_ibfk_1` FOREIGN KEY (`hFacilityID`) REFERENCES `tbl_hospital` (`hFacilityID`);

--
-- Constraints for table `tbl_medicine`
--
ALTER TABLE `tbl_medicine`
  ADD CONSTRAINT `Medicine_FK` FOREIGN KEY (`MetricID`) REFERENCES `tbl_daily_health_metrics` (`MetricID`);

--
-- Constraints for table `tbl_nutritionist`
--
ALTER TABLE `tbl_nutritionist`
  ADD CONSTRAINT `Nutritionist_FK` FOREIGN KEY (`NutritionistID`) REFERENCES `tbl_healthcare_professionals` (`ID`);

--
-- Constraints for table `tbl_nutritionist_type`
--
ALTER TABLE `tbl_nutritionist_type`
  ADD CONSTRAINT `NutritionistType_FK` FOREIGN KEY (`NutritionistID`) REFERENCES `tbl_nutritionist` (`NutritionistID`);

--
-- Constraints for table `tbl_patient_address`
--
ALTER TABLE `tbl_patient_address`
  ADD CONSTRAINT `PatientAddress_FK` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`);

--
-- Constraints for table `tbl_patient_diabetes_type`
--
ALTER TABLE `tbl_patient_diabetes_type`
  ADD CONSTRAINT `PatientDiabetesType_FK` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`);

--
-- Constraints for table `tbl_patient_diet_recommendations`
--
ALTER TABLE `tbl_patient_diet_recommendations`
  ADD CONSTRAINT `PatientDietRecommendations_FK1` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`),
  ADD CONSTRAINT `PatientDietRecommendations_FK2` FOREIGN KEY (`DietID`) REFERENCES `tbl_diet` (`DietID`);

--
-- Constraints for table `tbl_patient_feedback`
--
ALTER TABLE `tbl_patient_feedback`
  ADD CONSTRAINT `PatientFeedback_FK1` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`),
  ADD CONSTRAINT `PatientFeedback_FK2` FOREIGN KEY (`ReviewID`) REFERENCES `tbl_review` (`ReviewID`);

--
-- Constraints for table `tbl_patient_health_data`
--
ALTER TABLE `tbl_patient_health_data`
  ADD CONSTRAINT `PatientHealthData_FK1` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`),
  ADD CONSTRAINT `PatientHealthData_FK2` FOREIGN KEY (`MetricID`) REFERENCES `tbl_daily_health_metrics` (`MetricID`);

--
-- Constraints for table `tbl_patient_other_illness`
--
ALTER TABLE `tbl_patient_other_illness`
  ADD CONSTRAINT `PatientOtherIllness_FK` FOREIGN KEY (`PatientID`) REFERENCES `tbl_patient` (`PatientID`);

--
-- Constraints for table `tbl_prescription`
--
ALTER TABLE `tbl_prescription`
  ADD CONSTRAINT `Prescription_FK` FOREIGN KEY (`ConsultationID`) REFERENCES `tbl_consultation` (`ConsultationID`);

--
-- Constraints for table `tbl_prescription_medicine_dosage`
--
ALTER TABLE `tbl_prescription_medicine_dosage`
  ADD CONSTRAINT `PrescriptionMedicineDosage_FK1` FOREIGN KEY (`MedicineID`) REFERENCES `tbl_medicine` (`MedicineID`),
  ADD CONSTRAINT `PrescriptionMedicineDosage_FK2` FOREIGN KEY (`PrescriptionID`) REFERENCES `tbl_prescription` (`PrescriptionID`);

--
-- Constraints for table `tbl_prescription_test_recommend`
--
ALTER TABLE `tbl_prescription_test_recommend`
  ADD CONSTRAINT `PrescriptionTestRecommend_FK` FOREIGN KEY (`PrescriptionID`) REFERENCES `tbl_prescription` (`PrescriptionID`);

--
-- Constraints for table `tbl_prescription_treat_symptom`
--
ALTER TABLE `tbl_prescription_treat_symptom`
  ADD CONSTRAINT `PrescriptionTreatSymptom_FK1` FOREIGN KEY (`PrescriptionID`) REFERENCES `tbl_prescription` (`PrescriptionID`),
  ADD CONSTRAINT `PrescriptionTreatSymptom_FK2` FOREIGN KEY (`DiagnosedSymptomID`) REFERENCES `tbl_diagnosed_symptom` (`DiagnosedSymptomID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
