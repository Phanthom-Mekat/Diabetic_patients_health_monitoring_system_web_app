document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= parseInt(rating)) {
                    s.classList.add('filled');
                } else {
                    s.classList.remove('filled');
                }
            });
        });
    });
});
