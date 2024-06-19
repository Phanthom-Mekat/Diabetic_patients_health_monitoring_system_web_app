document.addEventListener('DOMContentLoaded', (event) => {
    const recipeCard = document.getElementById('card3');

    recipeCard.addEventListener('click', () => {
        window.location.href = 'recipes.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const mealPlanCard = document.getElementById('card4');

    mealPlanCard.addEventListener('click', () => {
        window.location.href = 'meal-plan.html';
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const patientListCard = document.getElementById('card1');

    patientListCard.addEventListener('click', () => {
        window.location.href = 'patient-list.html';
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const reportCard = document.getElementById('card2');

    reportCard.addEventListener('click', () => {
        window.location.href = 'report.html';
    });
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     const reportCard = document.getElementById('card6');

//     reportCard.addEventListener('click', () => {
//         window.location.href = 'faq.html';
//     });
// });


// faq faq faq 
// faq faq faq

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

//scrolling smooth
document.addEventListener('DOMContentLoaded', function() {
    const card6 = document.getElementById('card6');
    const faqSection = document.getElementById('faq-body');

    card6.addEventListener('click', function() {
        faqSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const card5 = document.getElementById('card5');
    const manageqstn = document.getElementById('questions-body');

    card5.addEventListener('click', function() {
        manageqstn .scrollIntoView({ behavior: 'smooth' });
    });
});




// faq faq faq ends 
// faq faq faq ends 


// Manage Qstns
// Manage Qstns

document.addEventListener('DOMContentLoaded', function() {
    const questionsList = document.querySelector('.questions-list');
    const answerForm = document.getElementById('answer-form');
    const questionIdField = document.getElementById('question-id');
    const questionTextField = document.getElementById('question-text');
    const answerTextField = document.getElementById('answer-text');

    // Sample data - in a real application, this would be fetched from a server
    const questions = [
        { id: 1, text: 'What are the health benefits of a balanced diet?' },
        { id: 2, text: 'How often should I exercise?' },
        { id: 3, text: 'What is the best way to lose weight?' }
    ];

    function renderQuestions() {
        questionsList.innerHTML = '';
        questions.forEach(question => {
            const questionItem = document.createElement('div');
            questionItem.classList.add('question-item');
            questionItem.textContent = question.text;
            questionItem.dataset.id = question.id;
            questionItem.addEventListener('click', () => {
                questionIdField.value = question.id;
                questionTextField.value = question.text;
                answerTextField.value = '';
            });
            questionsList.appendChild(questionItem);
        });
    }

    answerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const answer = answerTextField.value.trim();
        if (answer === '') {
            alert('Please provide an answer before submitting.');
            return;
        }

        const questionId = questionIdField.value;
        console.log(`Answer submitted for question ID ${questionId}: ${answer}`);

        // Here, you would typically send the answer to the server
        alert('Answer submitted successfully!');
        answerForm.reset();
    });

    renderQuestions();
});


// Manage Qstns Ends 
// Manage Qstns Ends

// Analytics
// Analytics
// Analytics

document.addEventListener('DOMContentLoaded', function() {
    // Fetch data or define your dataset (replace with real data)
    const data = {
        labels: ['High Sugar', 'Low Sugar', 'Balanced Diet', 'Exercise', 'Medication'],
        datasets: [{
            label: 'Diabetes Management',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [15, 25, 30, 10, 20], // Replace with actual data points
        }]
    };

    const config = {
        type: 'bar', // You can change to 'line', 'pie', etc., depending on your chart type
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    var myChart = new Chart(
        document.getElementById('diabetesChart'),
        config
    );
});


// pie chart 
// pie chart 
// pie chart 

document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('dietPlanChart').getContext('2d');
    
    const dietPlanData = {
        labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [{
            label: 'Diet Plan Development',
            data: [50, 30, 20], // Example data values
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    const dietPlanChart = new Chart(ctx, {
        type: 'pie',
        data: dietPlanData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                        }
                    }
                }
            }
        }
    });
});

