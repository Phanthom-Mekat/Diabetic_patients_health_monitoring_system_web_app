document.addEventListener("DOMContentLoaded", function () {
    const medicines = [
        {
            name: "Metformin",
            prescriptionId: "RX003",
            patientName: "Alice Brown",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Glimepiride",
            prescriptionId: "RX004",
            patientName: "Bob White",
            details: "Helps control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Insulin Glargine",
            prescriptionId: "RX005",
            patientName: "Charlie Green",
            details: "A long-acting insulin used to manage blood sugar levels."
        },
        {
            name: "Metformin",
            prescriptionId: "RX006",
            patientName: "David Black",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Sitagliptin",
            prescriptionId: "RX007",
            patientName: "Eve Blue",
            details: "Used to control high blood sugar in patients with type 2 diabetes."
        },
        {
            name: "Pioglitazone",
            prescriptionId: "RX008",
            patientName: "Frank Yellow",
            details: "Helps control blood sugar levels in type 2 diabetes."
        },
        {
            name: "Empagliflozin",
            prescriptionId: "RX009",
            patientName: "Grace Red",
            details: "Used to control blood sugar in patients with type 2 diabetes."
        },
        {
            name: "Dapagliflozin",
            prescriptionId: "RX010",
            patientName: "Hank Orange",
            details: "Helps to control high blood sugar in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX011",
            patientName: "Ivy Purple",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Canagliflozin",
            prescriptionId: "RX012",
            patientName: "Jack Pink",
            details: "Helps to control high blood sugar in type 2 diabetes."
        },
        {
            name: "Liraglutide",
            prescriptionId: "RX013",
            patientName: "Kathy Grey",
            details: "Used to control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX014",
            patientName: "Leo Brown",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Exenatide",
            prescriptionId: "RX015",
            patientName: "Mona White",
            details: "Helps to control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX016",
            patientName: "Nina Black",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Glipizide",
            prescriptionId: "RX017",
            patientName: "Oscar Green",
            details: "Helps control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX018",
            patientName: "Pam Red",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Repaglinide",
            prescriptionId: "RX019",
            patientName: "Quinn Orange",
            details: "Helps control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Saxagliptin",
            prescriptionId: "RX020",
            patientName: "Ron Purple",
            details: "Used to control high blood sugar in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX021",
            patientName: "Sara Pink",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Glyburide",
            prescriptionId: "RX022",
            patientName: "Tom Grey",
            details: "Helps control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX023",
            patientName: "Uma Brown",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Alogliptin",
            prescriptionId: "RX024",
            patientName: "Vic White",
            details: "Helps control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Linagliptin",
            prescriptionId: "RX025",
            patientName: "Wes Black",
            details: "Used to control high blood sugar in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX026",
            patientName: "Xena Green",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Miglitol",
            prescriptionId: "RX027",
            patientName: "Yara Red",
            details: "Helps control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX028",
            patientName: "Zane Orange",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
        {
            name: "Tolbutamide",
            prescriptionId: "RX029",
            patientName: "Amy Purple",
            details: "Helps control blood sugar levels in patients with type 2 diabetes."
        },
        {
            name: "Metformin",
            prescriptionId: "RX030",
            patientName: "Brian Pink",
            details: "Used to control high blood sugar in people with type 2 diabetes."
        },
    ];

    const tableBody = document.querySelector("#medicine-table tbody");

    function displayMedicines(medicines) {
        tableBody.innerHTML = ""; // Clear previous content
        medicines.forEach((medicine) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${medicine.name}</td>
                <td>${medicine.prescriptionId}</td>
                <td>${medicine.patientName}</td>
                <td>${medicine.details}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    const searchBar = document.querySelector("#search-bar");

    searchBar.addEventListener("input", function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMedicines = medicines.filter(medicine => 
            medicine.name.toLowerCase().includes(searchTerm)
        );
        displayMedicines(filteredMedicines);
    });

    displayMedicines(medicines);
});
