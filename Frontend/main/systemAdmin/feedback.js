document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/feedback')
      .then(response => response.json())
      .then(data => {
          const feedbackData = document.getElementById('feedbackData');
          feedbackData.innerHTML = '';
          data.forEach(review => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${review.ReviewID}</td>
                  <td>${review.Stars}</td>
                  <td>${review.Date}</td>
                  <td>${review.Description}</td>
                  <td><button class="delete-btn" data-id="${review.ReviewID}">Delete</button></td>
              `;
              feedbackData.appendChild(row);
          });

          document.querySelectorAll('.delete-btn').forEach(button => {
              button.addEventListener('click', (event) => {
                  const id = event.target.getAttribute('data-id');
                  fetch(`/api/feedback/${id}`, {
                      method: 'DELETE'
                  })
                  .then(response => response.json())
                  .then(result => {
                      if (result.message) {
                          alert(result.message);
                          event.target.closest('tr').remove();
                      } else {
                          alert(result.error);
                      }
                  });
              });
          });
      });
});
