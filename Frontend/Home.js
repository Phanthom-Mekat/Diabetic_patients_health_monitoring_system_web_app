var floatingButtonContainer = document.querySelector('.floating-button-div');
var scrollY = window.scrollY;


window.addEventListener('scroll', function() {
  scrollY = window.scrollY;
  floatingButtonContainer.style.top = scrollY + window.innerHeight - 150 + 'px';
});  


