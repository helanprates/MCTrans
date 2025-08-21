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

// Smooth scroll for voltar ao topo
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");

  // Mostrar ou ocultar a seta ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Voltar ao topo ao clicar na seta
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});