/**
 * Utilitários Gerais
 */

export function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

export function aplicarMascaraDinheiro(input) {
  let valor = input.value.replace(/\D/g, '');
  valor = (parseInt(valor) / 100).toFixed(2);
  
  if (valor === 'NaN' || valor === '0.00') {
    input.value = '';
    return;
  }
  
  input.value = 'R$ ' + valor.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function removerFormatacaoMoeda(valorFormatado) {
  return parseFloat(
    valorFormatado
      .replace('R$', '')
      .replace(/\./g, '')
      .replace(',', '.')
      .trim()
  );
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
