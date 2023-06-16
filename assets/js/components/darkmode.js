function toggleDarkMode() {
    const body = document.body;
    const btnMoon = document.querySelector('.btn--moon');
    const btnSun = document.querySelector('.btn--sun');
    
  
    function enableDarkMode() {
      body.classList.add('dark-mode');
      btnMoon.style.display = 'none';
      btnSun.style.display = 'inline-block';
    }
  
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      btnSun.style.display = 'none';
      btnMoon.style.display = 'inline-block';
    }
  
    btnMoon.addEventListener('click', enableDarkMode);
    btnSun.addEventListener('click', disableDarkMode);
  }
    
  export default toggleDarkMode