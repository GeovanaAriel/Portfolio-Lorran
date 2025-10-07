// Seleciona todos os elementos de feedback
const feedbacks = document.querySelectorAll('.feedback');

  // Cria um "observador" que vai ficar olhando quando o elemento entra na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // se o elemento apareceu na tela
        entry.target.classList.add('visible'); // adiciona a classe que ativa o efeito
      } else {
        entry.target.classList.remove('visible'); // Some de novo quando sai da tela
      }
    });
  }, {
    threshold: 0.2 // porcentagem do elemento que precisa estar visível (20%)
  });

  // Aplica o observador em cada feedback
  feedbacks.forEach(fb => observer.observe(fb));



