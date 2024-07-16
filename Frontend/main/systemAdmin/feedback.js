fetch('feedback.php')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('feedbackData');
    data.forEach(row => {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${row.ReviewID}</td>
        <td>${row.Stars}</td>
        <td>${row.Date}</td>
        <td>${row.Description}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  })
  .catch(error => console.error('Error:', error));