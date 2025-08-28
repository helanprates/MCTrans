document.querySelectorAll('.faq-item').forEach(item => {
    const toggleButton = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
  
    toggleButton.addEventListener('click', () => {
      const isExpanded = answer.style.display === 'block';
      answer.style.display = isExpanded ? 'none' : 'block';
      toggleButton.textContent = isExpanded ? '+' : '-';
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active"); // Alterna a classe 'active' no menu
    });
  });
