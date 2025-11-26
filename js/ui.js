/**
 * Componentes de UI e Interações
 */

export function mostrarToast(mensagem, tipo = 'info') {
  const toastsAntigos = document.querySelectorAll('.toast');
  toastsAntigos.forEach(toast => toast.remove());
  
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  
  const icone = tipo === 'success' ? 'fa-check-circle' : 
                tipo === 'error' ? 'fa-exclamation-circle' : 
                'fa-info-circle';
  
  toast.innerHTML = `
    <i class="fas ${icone}" aria-hidden="true"></i>
    <span>${mensagem}</span>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

export function animarScrollHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

export function marcarNavegacaoAtiva() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  
  // Atualiza apenas footer
  const footerLinks = document.querySelectorAll('footer a');
  footerLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === paginaAtual) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

export function animarCards() {
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

export function melhorarAcessibilidade() {
  const botoesEstilizados = document.querySelectorAll('.pix-btn, .adicionar');
  
  botoesEstilizados.forEach(elemento => {
    if (elemento.tagName === 'A') {
      elemento.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          elemento.click();
        }
      });
    }
  });
  
  const main = document.querySelector('main');
  if (main && !document.getElementById('skip-to-main')) {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.id = 'skip-to-main';
    skipLink.className = 'sr-only';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.style.cssText = `
      position: absolute;
      left: -9999px;
      z-index: 999;
      padding: 1em;
      background: var(--primary-color);
      color: white;
      text-decoration: none;
    `;
    
    skipLink.addEventListener('focus', () => skipLink.style.left = '0');
    skipLink.addEventListener('blur', () => skipLink.style.left = '-9999px');
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    main.id = 'main-content';
  }
}

export function adicionarFeedbackVisual() {
  const botoes = document.querySelectorAll('button, .pix-btn');
  
  botoes.forEach(botao => {
    botao.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      
      if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}
