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
  