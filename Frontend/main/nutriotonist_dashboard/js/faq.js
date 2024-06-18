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
