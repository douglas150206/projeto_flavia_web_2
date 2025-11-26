/**
 * Gerenciamento de Formulários
 */

import { aplicarMascaraDinheiro, removerFormatacaoMoeda, formatarMoeda } from './utils.js';
import { validarCampo, validarChavePix, limparErros } from './validation.js';
import { mostrarToast } from './ui.js';

export function inicializarFormEnviarPix() {
  const form = document.getElementById('formEnviarPix');
  if (!form) return;
  
  const inputDestinatario = document.getElementById('destinatario');
  const inputValor = document.getElementById('valor');
  
  if (inputValor) {
    inputValor.addEventListener('input', (e) => aplicarMascaraDinheiro(e.target));
    inputValor.addEventListener('blur', (e) => {
      if (e.target.value) {
        validarCampo(
          e.target,
          (valor) => {
            const valorNumerico = removerFormatacaoMoeda(valor);
            return valorNumerico > 0;
          },
          'Informe um valor válido'
        );
      }
    });
  }
  
  if (inputDestinatario) {
    inputDestinatario.addEventListener('blur', (e) => {
      if (e.target.value) {
        validarCampo(e.target, validarChavePix, 'Chave Pix inválida');
      }
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros(form);
    
    const destinatarioValido = validarCampo(
      inputDestinatario,
      validarChavePix,
      'Chave Pix inválida'
    );
    
    const valorValido = validarCampo(
      inputValor,
      (valor) => {
        const valorNumerico = removerFormatacaoMoeda(valor);
        return valorNumerico > 0;
      },
      'Informe um valor válido'
    );
    
    if (destinatarioValido && valorValido) {
      const valorNumerico = removerFormatacaoMoeda(inputValor.value);
      const button = form.querySelector('button[type="submit"]');
      
      button.disabled = true;
      button.innerHTML = '<span class="loading"></span> Enviando...';
      
      setTimeout(() => {
        mostrarToast(
          `Pix de ${formatarMoeda(valorNumerico)} enviado com sucesso!`,
          'success'
        );
        
        setTimeout(() => window.location.href = 'pix.html', 1500);
      }, 2000);
    }
  });
}

export function inicializarFormReceberPix() {
  const form = document.getElementById('formReceberPix');
  if (!form) return;
  
  const inputValor = document.getElementById('valorReceber');
  const qrCodeSection = document.getElementById('qrCodeSection');
  const qrCodeDisplay = document.getElementById('qrCodeDisplay');
  
  if (inputValor) {
    inputValor.addEventListener('input', (e) => aplicarMascaraDinheiro(e.target));
    inputValor.addEventListener('blur', (e) => {
      if (e.target.value) {
        validarCampo(
          e.target,
          (valor) => {
            const valorNumerico = removerFormatacaoMoeda(valor);
            return valorNumerico > 0;
          },
          'Informe um valor válido'
        );
      }
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros(form);
    
    const valorValido = validarCampo(
      inputValor,
      (valor) => {
        const valorNumerico = removerFormatacaoMoeda(valor);
        return valorNumerico > 0;
      },
      'Informe um valor válido'
    );
    
    if (valorValido) {
      const valorNumerico = removerFormatacaoMoeda(inputValor.value);
      const button = form.querySelector('button[type="submit"]');
      
      button.disabled = true;
      button.innerHTML = '<span class="loading"></span> Gerando...';
      
      setTimeout(() => {
        // Gera QR Code fake
        if (qrCodeDisplay) {
          qrCodeDisplay.innerHTML = gerarQRCodeFake();
        }
        
        // Mostra seção do QR Code
        if (qrCodeSection) {
          qrCodeSection.style.display = 'block';
          qrCodeSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        mostrarToast(
          `QR Code para ${formatarMoeda(valorNumerico)} gerado!`,
          'success'
        );
        
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-qrcode"></i> <span>Gerar Novo QR Code</span>';
      }, 2000);
    }
  });
}

function gerarQRCodeFake() {
  // Gera um QR Code visual fake usando SVG
  const size = 200;
  const moduleSize = 10;
  const modules = 21; // QR Code típico tem 21x21 módulos
  
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<rect width="${size}" height="${size}" fill="white"/>`;
  
  // Padrão aleatório mas consistente de módulos pretos
  const pattern = [
    [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0],
    [0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0],
    [0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0],
    [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0],
    [1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1]
  ];
  
  for (let y = 0; y < modules; y++) {
    for (let x = 0; x < modules; x++) {
      if (pattern[y][x] === 1) {
        const px = x * moduleSize;
        const py = y * moduleSize;
        svg += `<rect x="${px}" y="${py}" width="${moduleSize}" height="${moduleSize}" fill="black"/>`;
      }
    }
  }
  
  svg += '</svg>';
  return svg;
}

// Funções globais para os botões
window.compartilharQRCode = async function() {
  const { mostrarToast } = await import('./ui.js');
  if (navigator.share) {
    navigator.share({
      title: 'Meu QR Code Pix',
      text: 'Escaneie este QR Code para me enviar um Pix'
    }).then(() => {
      mostrarToast('QR Code compartilhado!', 'success');
    }).catch(() => {});
  } else {
    mostrarToast('Compartilhamento não disponível neste navegador', 'info');
  }
};

window.baixarQRCode = function() {
  import('./ui.js').then(({ mostrarToast }) => {
    mostrarToast('QR Code salvo na galeria!', 'success');
  });
};

export function inicializarFormCopiaCola() {
  const form = document.getElementById('formCopiaCola');
  if (!form) return;
  
  const inputChave = document.getElementById('chavePix');
  
  if (inputChave) {
    inputChave.addEventListener('blur', (e) => {
      if (e.target.value) {
        validarCampo(
          e.target,
          (valor) => valor.trim().length > 20,
          'Cole um código Pix válido'
        );
      }
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros(form);
    
    const chaveValida = validarCampo(
      inputChave,
      (valor) => valor.trim().length > 20,
      'Cole um código Pix válido'
    );
    
    if (chaveValida) {
      const button = form.querySelector('button[type="submit"]');
      
      button.disabled = true;
      button.innerHTML = '<span class="loading"></span> Validando...';
      
      setTimeout(() => {
        mostrarToast('Código Pix validado! Confirme os dados para pagar.', 'success');
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-check-circle"></i> <span>Validar e Pagar</span>';
      }, 2000);
    }
  });
}
