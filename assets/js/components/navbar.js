function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    
    if (window.innerWidth > 768) {
      if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  export default handleScroll 
  