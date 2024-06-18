// Smooth scroll to sections on click
document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('click', event => {
        const link = event.currentTarget.getAttribute('data-link');
        document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.back-to-top').forEach(item => {
    item.addEventListener('click', event => {
        const link = event.currentTarget.getAttribute('data-link');
        document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
    });
});

//  
//  

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const items = container.querySelectorAll('.meal-demo-card');
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        
        let currentIndex = 0;
        const totalItems = items.length;
        const itemWidth = items[0].offsetWidth + 20; // including margin
        
        // Function to update carousel position
        const updateCarousel = () => {
            container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        };
        
        // Event listeners for buttons
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateCarousel();
        });
        
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });
        
        // Automatic slide (updated to slide only once)
        let slideInterval = setInterval(() => {
            if (currentIndex === totalItems - 1) {
                clearInterval(slideInterval); // Stop sliding after one complete cycle
            }
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 1000);
    });
});
