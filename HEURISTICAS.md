# 🎯 Heurísticas de Nielsen - IFPay

Este documento detalha onde cada uma das **10 Heurísticas de Usabilidade de Jakob Nielsen** foi implementada no projeto IFPay, com exemplos práticos de código e localização nos arquivos.

---

## 1️⃣ Visibilidade do Status do Sistema

**Princípio:** O sistema deve sempre manter os usuários informados sobre o que está acontecendo através de feedback apropriado e em tempo razoável.

### 📍 Onde está implementado:

#### **Loading States nos Botões**
- **Arquivo:** `js/forms.js` (linhas 73-77, 120-122)
- **Código:**
```javascript
button.disabled = true;
button.innerHTML = '<span class="loading"></span> Enviando...';
// Após processamento...
button.innerHTML = '<i class="fas fa-check-circle"></i> <span>Concluído</span>';
```

#### **Toast Notifications**
- **Arquivo:** `js/ui.js` (linhas 5-30)
- **Código:**
```javascript
export function mostrarToast(mensagem, tipo = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`; // success, error, info
  toast.innerHTML = `<i class="fas ${icone}"></i><span>${mensagem}</span>`;
  // Mostra por 4 segundos
}
```
- **Uso:** Aparece em `pix_enviar.html`, `pix_receber.html`, `pix_copiacola.html`

#### **Estados de Carregamento Visual**
- **Arquivo:** `css/components.css` (linhas 391-401)
- **Código:**
```css
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}
```

#### **Marcação de Navegação Ativa**
- **Arquivo:** `js/ui.js` (linhas 47-61)
- **Função:** `marcarNavegacaoAtiva()` - destaca página atual no menu
- **Visual:** `css/components.css` (linhas 153-160) - barra azul sob item ativo

---

## 2️⃣ Correspondência entre o Sistema e o Mundo Real

**Princípio:** O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares ao usuário, ao invés de termos orientados ao sistema.

### 📍 Onde está implementado:

#### **Linguagem Natural em Todo o Sistema**
- **Exemplo 1:** "Transferir" ao invés de "Send" ou "Execute Transfer"
- **Exemplo 2:** "Últimas Transações" ao invés de "Transaction Log"
- **Exemplo 3:** "Receber" ao invés de "Receive Payment Request"

#### **Formatação Brasileira**
- **Arquivo:** `js/utils.js` (linhas 6-13)
- **Código:**
```javascript
export function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}
```

#### **Ícones Intuitivos**
- **Arquivo:** `html/pix.html` (linhas 26-41)
- **Font Awesome:** `fa-paper-plane` (transferir), `fa-arrow-down` (receber), `fa-clipboard` (copiar), `fa-camera` (QR Code)

#### **Nomes Brasileiros Reais**
- Douglas Kadomoto, Arthur Araújo, Flávia Beatriz
- **Localização:** `html/index.html` (linhas 40-52), `html/pix.html` (linhas 53-65)

---

## 3️⃣ Controle e Liberdade do Usuário

**Princípio:** Usuários frequentemente escolhem funções do sistema por engano e precisarão de uma "saída de emergência" claramente marcada para deixar o estado indesejado.

### 📍 Onde está implementado:

#### **Botão Voltar em Todas as Subpáginas**
- **Arquivos:** `pix_enviar.html`, `pix_receber.html`, `pix_copiacola.html`, `pix_qr.html`, `extrato.html`, `perfil.html`
- **Código (linha 14-16):**
```html
<a href="pix.html" class="voltar" aria-label="Voltar para Pix">
  <i class="fas fa-arrow-left"></i>
</a>
```

#### **Navegação Inferior Sempre Visível**
- **Arquivo:** `css/components.css` (linhas 108-125)
- **Código:**
```css
footer {
  position: sticky;
  bottom: 0;
  z-index: 100; /* Sempre por cima */
}
```

#### **Cancelamento de Ações**
- Formulários podem ser limpos antes do envio
- Botões desabilitados durante processamento previnem duplo envio
- **Arquivo:** `js/forms.js` - propriedade `button.disabled = true` durante operações

---

## 4️⃣ Consistência e Padrões

**Princípio:** Usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa.

### 📍 Onde está implementado:

#### **Design System com Variáveis CSS**
- **Arquivo:** `css/variables.css` (linhas 1-100)
- **Código:**
```css
:root {
  --primary-color: #6366F1;
  --spacing-md: 1rem;
  --radius-lg: 1rem;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition-base: 0.2s ease;
}
```
- **Uso:** 50+ variáveis usadas em TODOS os componentes

#### **Componentes Reutilizáveis**
- **Arquivo:** `css/components.css`
- **Card Padrão:** Todas as seções usam `.card` (linhas 214-230)
- **Botões Padrão:** `.pix-btn` usado em todas as ações (linhas 256-295)

#### **Layout Consistente**
- Header fixo no topo: `html/index.html`, `html/pix.html`, `html/cartoes.html`, etc.
- Footer fixo na parte inferior: todas as páginas
- Padding consistente: `var(--spacing-lg)` em todos os `main`

#### **Padrão de Formulários**
- **Arquivo:** `css/components.css` (linhas 323-385)
- Todos os inputs têm mesmo estilo, altura, border-radius, transições

---

## 5️⃣ Prevenção de Erros

**Princípio:** Melhor que boas mensagens de erro é um design cuidadoso que previne um problema de ocorrer.

### 📍 Onde está implementado:

#### **Validação em Tempo Real**
- **Arquivo:** `js/validation.js` (linhas 5-85)
- **Validações:**
  - Email: `validarEmail()` verifica formato antes do envio
  - CPF: `validarCPF()` com algoritmo de dígitos verificadores
  - Telefone: `validarTelefone()` aceita só formatos válidos
  - Chave Pix: `validarChavePix()` multiformat

#### **Máscaras de Input**
- **Arquivo:** `js/utils.js` (linhas 15-70)
- **Código:**
```javascript
export function aplicarMascaraDinheiro(input) {
  let valor = input.value.replace(/\D/g, ''); // Só números
  valor = (parseInt(valor) / 100).toFixed(2); // Centavos
  input.value = `R$ ${valor.replace('.', ',')}`;
}
```
- **Efeito:** Impossível digitar valor inválido

#### **Botões Desabilitados Durante Processamento**
- **Arquivo:** `js/forms.js` (múltiplas linhas)
- **Código:**
```javascript
button.disabled = true; // Previne duplo-clique
setTimeout(() => {
  button.disabled = false; // Reabilita após conclusão
}, 2000);
```

#### **Atributos HTML5 de Validação**
- **Arquivo:** `html/pix_enviar.html` (linhas 28-37)
- **Código:**
```html
<input 
  type="text" 
  required
  aria-required="true"
  aria-describedby="destinatario-error">
```

#### **Feedback Visual de Erro**
- **Arquivo:** `js/validation.js` (linhas 92-117)
- **Função:** `exibirErro()` adiciona classe `.error` ao campo e mostra mensagem

---

## 6️⃣ Reconhecimento ao Invés de Memorização

**Princípio:** Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis.

### 📍 Onde está implementado:

#### **Ícones em Todos os Botões e Menus**
- **Arquivo:** `html/pix.html` (linhas 26-41)
- **Exemplo:**
```html
<a href="pix_enviar.html" class="pix-btn">
  <i class="fas fa-paper-plane"></i> <!-- Ícone visual -->
  <span>Transferir</span> <!-- + Texto -->
</a>
```

#### **Navegação com Ícones + Labels**
- **Footer:** Ícone GRANDE (1.25rem) + texto explicativo
- **Arquivo:** `css/components.css` (linhas 122-169)

#### **Histórico de Transações Visível**
- **Arquivo:** `html/index.html` (linhas 40-52)
- Usuário vê últimas transações sem precisar lembrar

#### **Chaves Pix Salvas na Página de Perfil**
- **Arquivo:** `html/perfil.html` (linhas 90-131)
- Lista todas as chaves cadastradas com ícones (telefone, email, CPF)

#### **Dados Pré-preenchidos**
- Saldo sempre visível no topo
- Nome do usuário no header
- **Arquivo:** `html/index.html` (linhas 19-21)

---

## 7️⃣ Flexibilidade e Eficiência de Uso

**Princípio:** Aceleradores — invisíveis para usuários novatos — podem acelerar a interação para usuários experientes.

### 📍 Onde está implementado:

#### **Atalhos de Teclado e Acessibilidade**
- **Arquivo:** `js/ui.js` (linhas 99-137)
- **Função:** `melhorarAcessibilidade()`
- **Código:**
```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement.tagName === 'A') {
    document.activeElement.click(); // Enter = clique
  }
});
```

#### **Skip Links para Navegação Rápida**
- **Arquivo:** `css/components.css` (linhas 1-20)
- **Código:**
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  /* Aparece ao focar com Tab */
}
.skip-link:focus {
  top: 0;
}
```

#### **Navegação Rápida no Extrato**
- **Arquivo:** `html/extrato.html` (linhas 26-32)
- **Filtros de chip:** "Todos", "Recebidos", "Enviados", "Pix", "Cartão"
- **CSS:** `css/pages.css` (linhas 310-338)

#### **Transições Suaves Reduzem Tempo de Resposta Percebido**
- **Arquivo:** `css/variables.css` (linhas 45-48)
```css
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

#### **Hover States em Todos os Elementos Interativos**
- Botões mudam de cor ao passar o mouse
- Links mudam de cor
- Cards "levitam" (translateY)

---

## 8️⃣ Design Estético e Minimalista

**Princípio:** Interfaces não devem conter informação irrelevante ou raramente necessária.

### 📍 Onde está implementado:

#### **Cards com Hierarquia Visual Clara**
- **Arquivo:** `css/components.css` (linhas 214-230)
- Fundo branco, padding generoso, sombra sutil
- Informações organizadas por importância

#### **Tipografia com Hierarquia**
- **Arquivo:** `css/variables.css` (linhas 26-32)
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```
- H1, H2, H3 com tamanhos progressivos
- Texto secundário com opacidade reduzida

#### **Cores com Propósito**
- **Vermelho:** Ações de envio/débito (--error-color)
- **Verde:** Ações de recebimento/crédito (--success-color)
- **Azul:** Ações neutras/principal (--primary-color)
- **Arquivo:** `css/variables.css` (linhas 6-14)

#### **Espaçamento Consistente**
- **Sistema de Spacing:** xs (0.25rem), sm (0.5rem), md (1rem), lg (1.5rem), xl (2rem)
- **Arquivo:** `css/variables.css` (linhas 16-20)
- Reduz poluição visual

#### **Ícones ao Invés de Muito Texto**
- Font Awesome 6.4.0 em TODAS as ações
- **Exemplo:** Ícone de seta ao invés de "Você enviou"

---

## 9️⃣ Ajuda os Usuários a Reconhecer, Diagnosticar e Recuperar de Erros

**Princípio:** Mensagens de erro devem ser expressas em linguagem simples, indicar precisamente o problema e sugerir uma solução.

### 📍 Onde está implementado:

#### **Mensagens de Erro Descritivas**
- **Arquivo:** `js/validation.js` (linhas 92-117)
- **Função:** `exibirErro(campo, mensagem)`
- **Exemplo:**
```javascript
validarCampo(
  inputDestinatario,
  validarChavePix,
  'Chave Pix inválida' // ← Mensagem clara
);
```

#### **Indicadores Visuais de Erro**
- **Arquivo:** `css/components.css` (linhas 379-385)
```css
input.error {
  border-color: var(--error); /* Vermelho */
}
.error-message {
  color: var(--error);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}
```

#### **Validação Campo a Campo**
- Erro aparece abaixo do campo específico
- **Arquivos:** `html/pix_enviar.html` (linhas 35, 45)
```html
<span id="destinatario-error" class="error-message" role="alert"></span>
```

#### **Toast de Erro com Ícone**
- **Arquivo:** `js/ui.js` (linhas 16-18)
```javascript
const icone = tipo === 'error' ? 'fa-exclamation-circle' : ...;
```

#### **Prevenção de Erro com Sugestões**
- Placeholder nos inputs: "Digite o e-mail ou chave Pix"
- Hints: "Opcional: adicione uma mensagem"

---

## 🔟 Ajuda e Documentação

**Princípio:** Embora seja melhor que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação.

### 📍 Onde está implementado:

#### **Cards Informativos em Cada Página**
- **Arquivo:** `html/pix_receber.html` (linhas 66-70)
- **Exemplo:**
```html
<section class="card info" aria-label="Informações sobre como funciona">
  <h3><i class="fas fa-circle-info"></i> Como funciona?</h3>
  <p>Informe o valor e, se desejar, adicione uma descrição...</p>
</section>
```

#### **README.md Completo**
- **Arquivo:** `README.md`
- **Conteúdo:**
  - Como executar o projeto
  - Tecnologias utilizadas
  - Estrutura de pastas
  - Funcionalidades
  - Checklist de heurísticas

#### **ARIA Labels Descritivos**
- **Arquivo:** Todos os HTMLs
- **Exemplo:** `html/index.html` (linha 34)
```html
<h2 aria-label="Saldo de quarenta e cinco mil, seiscentos e setenta e oito reais e noventa centavos">
  R$ 45.678,90
</h2>
```

#### **Seção de Ajuda no Perfil**
- **Arquivo:** `html/perfil.html` (linhas 190-213)
- Links para:
  - Termos de Uso
  - Política de Privacidade
  - Fale Conosco

#### **Tooltips Visuais**
- Hover nos botões mostra estado interativo
- Icons têm `aria-hidden="true"` para não confundir leitores de tela
- Texto sempre acompanha ícones

---

## 📊 Resumo da Implementação

| Heurística | Arquivos Principais | Técnicas Usadas |
|------------|-------------------|-----------------|
| 1. Visibilidade do Status | `ui.js`, `forms.js`, `components.css` | Loading states, toasts, animações |
| 2. Linguagem do Mundo Real | `utils.js`, todos os HTMLs | Formatação BR, nomes reais, ícones |
| 3. Controle do Usuário | Todos os HTMLs, `components.css` | Botão voltar, navegação fixa |
| 4. Consistência | `variables.css`, `components.css` | Design system, variáveis CSS |
| 5. Prevenção de Erros | `validation.js`, `utils.js` | Validações, máscaras, disabled states |
| 6. Reconhecimento | Todos os HTMLs, Font Awesome | Ícones + texto, dados visíveis |
| 7. Flexibilidade | `ui.js`, `pages.css` | Atalhos de teclado, filtros rápidos |
| 8. Minimalismo | `variables.css`, `components.css` | Hierarquia visual, cores propositais |
| 9. Recuperação de Erros | `validation.js`, `ui.js` | Mensagens claras, indicadores visuais |
| 10. Ajuda | `README.md`, cards informativos | Documentação, hints contextuais |

---

## 🎨 Exemplos Visuais de Feedback

### Loading State (Heurística #1)
```
┌─────────────────────────┐
│  ⏳ Enviando...         │  ← Spinner + texto
└─────────────────────────┘
```

### Toast Success (Heurística #1, #9)
```
┌─────────────────────────────┐
│ ✓ Pix de R$ 150 enviado!   │  ← Ícone + mensagem clara
└─────────────────────────────┘
```

### Erro no Campo (Heurística #5, #9)
```
┌──────────────────────────┐
│ destinatario@email.com   │  ← Campo com borda vermelha
├──────────────────────────┤
│ ⚠ Chave Pix inválida     │  ← Mensagem de erro
└──────────────────────────┘
```

### Navegação Ativa (Heurística #1, #6)
```
🏠 Início  ⚡ Pix  💳 Cartões  📄 Extrato  👤 Perfil
   ═══     (atual)
```

---

## ✅ Melhorias Implementadas (26/11/2025)

### 🔧 Correções Técnicas
1. **Variáveis CSS Faltantes:** Adicionadas `--background-secondary`, `--success-color`, `--error-color`
2. **Import Duplicado:** Removido import duplicado em `main.js` que quebrava feedback visual
3. **Favicon:** Emoji 💳 adicionado em todas as 9 páginas HTML

### 🎨 Melhorias de Design
1. **Headers Padronizados:** 
   - `index.html`: Logo + foto (único)
   - `pix.html`, `cartoes.html`: Voltar + título + perfil
   - `extrato.html`: Voltar + título + filtros
   - `perfil.html`: Voltar + título

2. **Transações Unificadas:** 
   - Mesmo formato em `index.html`, `pix.html` e `extrato.html`
   - Avatares coloridos por tipo
   - Dados consistentes (Flávia R$ 85, Arthur R$ 150, Magazine R$ 249,90)

3. **Foto de Perfil Clicável:** Link para `perfil.html` em 3 páginas principais

### 📄 Novas Páginas Criadas
1. **perfil.html:** Configurações completas do usuário
2. **extrato.html:** Histórico detalhado com filtros

---

**✅ Todas as 10 heurísticas foram implementadas com exemplos concretos e localizações específicas no código!**
