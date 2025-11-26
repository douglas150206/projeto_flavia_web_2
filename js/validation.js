/**
 * Validações de Formulário
 */

export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  return cpf.length === 11;
}

export function validarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, '');
  return telefone.length === 10 || telefone.length === 11;
}

export function validarChavePix(chave) {
  chave = chave.trim();
  
  if (validarEmail(chave)) return true;
  if (validarCPF(chave)) return true;
  if (validarTelefone(chave)) return true;
  
  const regexUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (regexUUID.test(chave)) return true;
  
  return false;
}

export function validarCampo(input, validacao, mensagemErro) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  
  if (!validacao(input.value)) {
    input.classList.add('error');
    input.classList.remove('success');
    input.setAttribute('aria-invalid', 'true');
    
    if (errorSpan) {
      errorSpan.innerHTML = `<i class="fas fa-exclamation-circle" aria-hidden="true"></i> ${mensagemErro}`;
    }
    
    return false;
  } else {
    input.classList.remove('error');
    input.classList.add('success');
    input.setAttribute('aria-invalid', 'false');
    
    if (errorSpan) {
      errorSpan.textContent = '';
    }
    
    return true;
  }
}

export function limparErros(form) {
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.classList.remove('error', 'success');
    input.removeAttribute('aria-invalid');
  });
  
  const errorSpans = form.querySelectorAll('.error-message');
  errorSpans.forEach(span => span.textContent = '');
}
