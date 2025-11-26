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
  
  // Atualiza data dinâmica no extrato
  atualizarDataExtrato();
  
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

/**
 * Atualiza a data no extrato para sempre mostrar a data atual
 */
function atualizarDataExtrato() {
  const dataElemento = document.getElementById('data-hoje');
  if (dataElemento) {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    dataElemento.textContent = `Hoje - ${dia}/${mes}/${ano}`;
  }
}

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
