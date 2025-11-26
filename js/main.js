/**
 * IFPay - Sistema Bancário Digital
 * Arquivo principal de inicialização
 */

import { 
  animarScrollHeader, 
  marcarNavegacaoAtiva, 
  animarCards, 
  melhorarAcessibilidade, 
  adicionarFeedbackVisual,
  mostrarToast 
} from './ui.js';

import { 
  inicializarFormEnviarPix, 
  inicializarFormReceberPix, 
  inicializarFormCopiaCola 
} from './forms.js';

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa componentes de UI
  animarScrollHeader();
  marcarNavegacaoAtiva();
  animarCards();
  melhorarAcessibilidade();
  adicionarFeedbackVisual();
  
  // Inicializa formulários
  inicializarFormEnviarPix();
  inicializarFormReceberPix();
  inicializarFormCopiaCola();
  
  // Toast de boas-vindas apenas na página inicial
  if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    setTimeout(() => {
      mostrarToast('Bem-vindo ao IFPay! 👋', 'info');
    }, 500);
  }
});

// Lazy Loading de Imagens para performance
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}
