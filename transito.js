
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