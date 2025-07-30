document.querySelectorAll('.faq-item').forEach(item => {
    const toggleButton = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
  
    toggleButton.addEventListener('click', () => {
      const isExpanded = answer.style.display === 'block';
      answer.style.display = isExpanded ? 'none' : 'block';
      toggleButton.textContent = isExpanded ? '+' : '-';
    });
  });

  function agendamento () {
    let agenda = document.querySelector(".agendamento-container");
   agenda.removeAttribute ("hidden");
  }

 function fechar () {
    let agenda = document.querySelector(".agendamento-container");
   agenda.setAttribute ("hidden", true);
  }

  function areazul () {
    let areazul = document.querySelector("#vendas_Areazul");
   areazul.removeAttribute ("hidden");
  }

  function fecharAreaazul () {
    let agenda = document.querySelector("#vendas_Areazul");
   agenda.setAttribute ("hidden", true);
  }