
// ========================================
//  Working for Responsive navbar
//============================================




// ========================================
//  Working for Portfolio Slider
// ============================================

if (window.matchMedia('(max-width: 800px)').matches) {

  let slideIndex = 0;
  const slides = document.querySelectorAll('.img');
  
  function showSlides() {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });
  
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); 


  }

  showSlides(); 
}



// ========================================
//  Working for Dark Mode
//============================================

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save user preference in local storage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Check for user preference on page load
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (localStorage.getItem('darkMode') === 'true' || userPrefersDark) {
  document.body.classList.add('dark-mode');
}


document.getElementById('navbarToggler').addEventListener('click', function () {
  document.getElementById('navbarMenu').classList.toggle('active');
});
