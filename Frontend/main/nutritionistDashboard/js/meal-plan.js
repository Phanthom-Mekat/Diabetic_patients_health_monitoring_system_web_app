document.addEventListener('DOMContentLoaded', function() {
    // Sample data for meal plan requests
    const mealPlanRequests = [
        {
            id: '001',
            name: 'Alice Smith',
            age: 30,
            gender: 'Female',
            dailyMetrics: {
                bloodPressure: '120/80 mmHg',
                weight: '65 kg',
                glucoseLevel: '90 mg/dL',
                calorieConsumption: '2000 kcal'
            }
        },
        {
            id: '002',
            name: 'Bob Johnson',
            age: 45,
            gender: 'Male',
            dailyMetrics: {
                bloodPressure: '130/85 mmHg',
                weight: '80 kg',
                glucoseLevel: '110 mg/dL',
                calorieConsumption: '2500 kcal'
            }
        }
    ];

    // Populate the meal plan requests table
    const tableBody = document.getElementById('meal-plan-requests');
    mealPlanRequests.forEach(request => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${request.id}</td>
            <td>${request.name}</td>
            <td>${request.age}</td>
            <td>${request.gender}</td>
            <td>
                BP: ${request.dailyMetrics.bloodPressure}<br>
                Weight: ${request.dailyMetrics.weight}<br>
                Glucose: ${request.dailyMetrics.glucoseLevel}<br>
                Calories: ${request.dailyMetrics.calorieConsumption}
            </td>
            <td><button class="button" onclick="suggestDiet('${request.id}', '${request.name}')">Suggest Diet</button></td>
        `;

        tableBody.appendChild(row);
    });
});

function suggestDiet(id, name) {
    document.getElementById('patient-id').value = id;
    document.getElementById('suggest-diet-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('suggest-diet-popup').style.display = 'none';
}

// Handling the form submission
document.getElementById('diet-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const dietPlan = {
        id: document.getElementById('patient-id').value,
        dietType: document.getElementById('diet-type').value,
        goal: document.getElementById('goal').value,
        calories: document.getElementById('calories').value,
        carbs: document.getElementById('carbs').value,
        proteins: document.getElementById('proteins').value,
        fats: document.getElementById('fats').value,
        startDate: document.getElementById('start-date').value,
        endDate: document.getElementById('end-date').value
    };

    console.log('Suggested Diet Plan:', dietPlan);

    closePopup();
});
