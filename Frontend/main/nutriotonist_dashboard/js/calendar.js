document.addEventListener('DOMContentLoaded', function() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const daysElement = document.getElementById('calendar-days');
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');

    let current = new Date();
    let currentMonth = current.getMonth();
    let currentYear = current.getFullYear();

    function renderCalendar(month, year) {
        daysElement.innerHTML = '';
        monthElement.textContent = monthNames[month];
        yearElement.textContent = year;

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            daysElement.appendChild(emptyCell);
        }

        for (let i = 1; i <= lastDate; i++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = i;

            if (
                i === current.getDate() &&
                month === current.getMonth() &&
                year === current.getFullYear()
            ) {
                dayCell.classList.add('current-day');
            }

            daysElement.appendChild(dayCell);
        }
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});
