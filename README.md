# IFPay - Banco Digital 💳

Aplicativo bancário desenvolvido para a disciplina de **Interação Humano-Computador (IHC)**, focando em UX/UI, acessibilidade e usabilidade seguindo as Heurísticas de Nielsen.

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/douglas150206/projeto_flavia_web_2.git
cd projeto_flavia_web_2
```

2. Abra `html/index.html` no navegador

**Recomendado:** Use um servidor local para ES6 modules:
```bash
# Python
python -m http.server 8000
# Acesse: http://localhost:8000/html/index.html

# Node.js
npx http-server
# Acesse: http://localhost:8080/html/index.html
```

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica com ARIA
- **CSS3** - Design system modular com CSS Variables
- **JavaScript ES6+** - Módulos e interatividade
- **Font Awesome 6.4** - Ícones profissionais
- **Google Fonts** - Inter (tipografia moderna)

## 📁 Estrutura do Projeto

```
IFPay/
├── html/                    # 9 páginas HTML
│   ├── index.html          # Dashboard principal
│   ├── pix.html            # Menu Pix
│   ├── pix_enviar.html     # Transferir Pix
│   ├── pix_receber.html    # Receber Pix + QR Code
│   ├── pix_copiacola.html  # Pix Copia e Cola
│   ├── pix_qr.html         # Scanner QR Code
│   ├── cartoes.html        # Gerenciar cartões
│   ├── extrato.html        # Histórico completo
│   └── perfil.html         # Configurações do usuário
├── css/                     # 6 arquivos CSS modularizados
│   ├── reset.css           # Normalização
│   ├── variables.css       # Design tokens (50+ variáveis)
│   ├── components.css      # Componentes reutilizáveis
│   ├── pages.css           # Estilos específicos
│   ├── responsive.css      # 5 breakpoints
│   └── main.css            # Importador
├── js/                      # 5 módulos JavaScript
│   ├── utils.js            # Formatação e máscaras
│   ├── validation.js       # Validadores (CPF, email, Pix)
│   ├── ui.js               # Componentes UI (toast, animações)
│   ├── forms.js            # Gerenciamento de formulários
│   └── main.js             # Inicialização
├── README.md               # Documentação principal
├── HEURISTICAS.md          # Detalhamento de Nielsen
└── ROTEIRO_APRESENTACAO.md # Guia de apresentação
```

## ✨ Funcionalidades

### 🏠 Área Principal (index.html)
- Visualização de saldo e investimentos
- Gráficos de criptomoedas (placeholder)
- Últimas 3 transações com avatares coloridos
- Acesso rápido ao perfil

### ⚡ Pix (pix.html + subpáginas)
- **Transferir:** Validação de chave Pix + máscara monetária
- **Receber:** Geração de QR Code fake SVG realista
- **Copia e Cola:** Validação de código Pix
- **Scanner:** Interface visual de leitura de QR Code
- Histórico de transações com ícones e cores

### 💳 Cartões (cartoes.html)
- Visualização de cartão com animação pulse
- Exibição de saldo e limite
- Botão para adicionar novos cartões

### 📄 Extrato (extrato.html)
- Filtros rápidos (Todos, Recebidos, Enviados, Pix, Cartão)
- Transações organizadas por data
- Avatares coloridos por tipo de transação
- Botão "Carregar Mais"

### 👤 Perfil (perfil.html)
- Dados pessoais editáveis
- Endereço completo
- Gerenciamento de chaves Pix (3 cadastradas)
- Configurações de segurança (senha, biometria, dispositivos)
- Preferências (notificações, aparência, idioma)
- Ajuda e suporte

## ♿ Acessibilidade (WCAG AA)

- ✅ **Navegação por teclado** completa (Tab, Enter, Esc)
- ✅ **ARIA labels e roles** semânticos em todos os elementos interativos
- ✅ **Contraste adequado** 4.5:1 para texto, 3:1 para componentes
- ✅ **Skip links** para pular para conteúdo principal
- ✅ **Suporte a leitores de tela** (NVDA, JAWS testados)
- ✅ **Modo de movimento reduzido** (`prefers-reduced-motion`)
- ✅ **Alto contraste** (`prefers-contrast: high`)
- ✅ **Foco visível** em todos os elementos interativos
- ✅ **Textos alternativos** em todas as imagens
- ✅ **Estados de erro** com `role="alert"`

## 📱 Responsividade (Mobile First)

### Breakpoints Implementados:
- **< 380px:** Celulares pequenos
- **380px - 640px:** Smartphones padrão (base)
- **640px - 768px:** Tablets pequenos
- **768px - 1024px:** Tablets e notebooks
- **1024px - 1440px:** Desktops
- **> 1440px:** Telas grandes (max-width: 1200px)

### Adaptações:
- Menu footer responsivo (5 itens sem quebra)
- Grid de ações Pix: 2 colunas mobile, 4 desktop
- Cards com max-width progressivo
- Tipografia escalável
- Touch targets mínimos de 44x44px

## ✅ Heurísticas de Nielsen

Todas as **10 Heurísticas de Usabilidade de Jakob Nielsen** foram implementadas rigorosamente no projeto.

**Para exemplos detalhados, localizações no código e explicações completas, consulte: [`HEURISTICAS.md`](HEURISTICAS.md)**

## 🎨 Design System

### Cores
```css
--primary-color: #6366F1      /* Azul vibrante */
--success-color: #10B981      /* Verde sucess */
--error-color: #EF4444        /* Vermelho erro */
--text-primary: #0F172A       /* Texto escuro */
--surface: #FFFFFF            /* Fundo cards */
```

### Tipografia
- **Fonte:** Inter (Google Fonts)
- **Pesos:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Escala:** 0.875rem (small) → 1rem (base) → 1.5rem (H1)

### Espaçamentos (4pt grid)
```css
--spacing-xs: 0.25rem  /* 4px  */
--spacing-sm: 0.5rem   /* 8px  */
--spacing-md: 1rem     /* 16px */
--spacing-lg: 1.5rem   /* 24px */
--spacing-xl: 2rem     /* 32px */
```

### Animações
- **Fast:** 150ms - Hover states
- **Base:** 200ms - Transições padrão
- **Slow:** 300ms - Modais e toasts

## 🧪 Validações Implementadas

- **Email:** Regex RFC 5322 simplificado
- **CPF:** Algoritmo com dígitos verificadores
- **Telefone:** (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
- **Chave Pix:** Email, telefone, CPF ou chave aleatória
- **Dinheiro:** Máscara R$ 0,00 com centavos

## 📊 Métricas de Qualidade

- **HTML:** 100% semântico com ARIA
- **CSS:** 0 IDs, apenas classes reutilizáveis
- **JavaScript:** ES6+ modules, 0 variáveis globais
- **Acessibilidade:** WCAG AA compliance
- **Performance:** Lazy loading de imagens
- **SEO:** Meta descriptions em todas as páginas

---

**IFPay** - Banco Digital com foco em IHC e Usabilidade 🚀
