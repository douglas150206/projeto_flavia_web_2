# 🎤 Roteiro de Apresentação - IFPay

**Disciplina:** Interação Humano-Computador (IHC)  
**Projeto:** IFPay - Banco Digital  
**Apresentadores:** Arthur Araújo e Douglas Kadomoto  
**Tempo:** 6-8 minutos  
**Data:** 26 de novembro de 2025

---

## 📋 Estrutura da Apresentação

### ⏱️ Distribuição do Tempo
- **Introdução:** 1 min (Douglas)
- **Demonstração ao Vivo:** 4 min (Arthur)
- **Heurísticas de Nielsen:** 2 min (Douglas)
- **Conclusão:** 1 min (Arthur)

---

## 🎯 PARTE 1: Introdução (1 min) - DOUGLAS

### O que falar:

> "Boa tarde! Somos Arthur Araújo e Douglas Kadomoto, e vamos apresentar o **IFPay**, um aplicativo de banco digital desenvolvido com foco total em **Interação Humano-Computador**."

**[Slide ou abrir index.html no navegador]**

> "Nosso objetivo foi criar uma interface que não apenas funcione, mas que seja **intuitiva, acessível e agradável de usar**. Para isso, aplicamos rigorosamente as **10 Heurísticas de Usabilidade de Jakob Nielsen**."

> "O IFPay possui 9 páginas funcionais, incluindo dashboard, Pix, cartões, extrato e perfil. Tudo desenvolvido do zero com **HTML5, CSS3 modular e JavaScript ES6+**."

**Passar para Arthur:**

> "Agora vou passar para o Arthur, que vai demonstrar as principais funcionalidades do sistema."

---

## 💻 PARTE 2: Demonstração ao Vivo (4 min) - ARTHUR

### 🎬 Roteiro de Navegação

#### 1. Dashboard Inicial (30 seg)
**[Abrir `html/index.html` no navegador]**

> "Aqui temos o **dashboard principal**. Reparem alguns detalhes de usabilidade:"

**Apontar no navegador:**
- ✅ "Favicon 💳 personalizado na aba"
- ✅ "Saldo e investimentos com destaque visual"
- ✅ "Últimas 3 transações com **avatares coloridos** - verde para recebido, vermelho para enviado"
- ✅ "Menu fixo no rodapé - sempre acessível"
- ✅ "Página ativa marcada com barra azul embaixo"

**Interagir:**
- Passar o mouse sobre os cards → "Efeito de elevação no hover"
- Clicar na **foto de perfil** → "Leva direto para o perfil"

---

#### 2. Página Pix (1 min)
**[Clicar em "Pix" no menu]**

> "Entramos na área de **Pix**. Notem:"

**Mostrar:**
- ✅ "Header mudou - agora temos **botão voltar** no padrão mobile"
- ✅ "4 ações principais com ícones claros"
- ✅ "Mesmo histórico de transações - **dados consistentes** em todo o app"

**Clicar em "Transferir":**

---

#### 3. Transferir Pix - Validações (1 min)
**[Na página pix_enviar.html]**

> "Aqui demonstramos **prevenção de erros** - Heurística #5:"

**Testar ao vivo:**
1. **Campo Destinatário:** Digitar "teste" → Enter
   - "Validação em tempo real - 'Chave Pix inválida'"
   - "Borda vermelha + mensagem de erro abaixo do campo"

2. **Campo Valor:** Digitar "100" 
   - "Máscara automática transforma em 'R$ 1,00'"
   - "Impossível digitar valor inválido"

3. **Clicar em Transferir:**
   - "Botão desabilita durante processamento"
   - "Loading spinner aparece"
   - "Toast verde: '✓ Pix de R$ 1,00 enviado com sucesso!'"
   - "Feedback visual claro - **Heurística #1**"

**[Voltar para Pix]**

---

#### 4. Receber Pix - QR Code (1 min)
**[Clicar em "Receber"]**

> "Vou gerar um **QR Code** para receber Pix:"

**Demonstrar:**
1. Digitar valor: "50" → transforma em "R$ 0,50"
2. Clicar em "Gerar QR Code"
   - "Loading de 2 segundos"
   - "QR Code SVG fake aparece"
   - "Botões de compartilhar e baixar"

> "Reparem no **feedback constante** - sempre sabemos o que está acontecendo no sistema."

**[Voltar para Home]**

---

#### 5. Extrato e Perfil (30 seg)
**[Clicar em "Extrato" no menu]**

> "No **extrato** temos:"

**Mostrar rapidamente:**
- ✅ "Filtros rápidos no topo"
- ✅ "Transações organizadas por data"
- ✅ "Scroll infinito com 'Carregar Mais'"

**[Clicar em "Perfil"]**

> "E no **perfil**, configurações completas:"

**Scroll rápido:**
- ✅ "Dados pessoais editáveis"
- ✅ "Chaves Pix cadastradas"
- ✅ "Segurança, preferências, ajuda"

---

## 🎯 PARTE 3: Heurísticas de Nielsen (2 min) - DOUGLAS

### O que falar:

**[Pode usar `HEURISTICAS.md` como apoio ou slides]**

> "Agora vou destacar como aplicamos as **10 Heurísticas de Nielsen** no IFPay:"

### Listar rapidamente:

#### ✅ **1. Visibilidade do Status**
> "Todos os botões têm loading states, toasts coloridos, menu marca página ativa."

#### ✅ **2. Linguagem do Mundo Real**
> "100% em português brasileiro, valores em R$, nomes brasileiros reais."

#### ✅ **3. Controle do Usuário**
> "Botão voltar em toda subpágina, menu sempre visível, fácil cancelar ações."

#### ✅ **4. Consistência**
> "Design system com mais de 50 variáveis CSS - mesmos espaçamentos, cores, bordas em todo o site."

#### ✅ **5. Prevenção de Erros**
> "Como vocês viram: validações em tempo real, máscaras automáticas, botões desabilitados durante processamento."

#### ✅ **6. Reconhecimento vs Memorização**
> "Ícones + texto em todos os botões, dados sempre visíveis, não precisa lembrar de nada."

#### ✅ **7. Flexibilidade**
> "Navegação por teclado completa, filtros rápidos, atalhos com Tab e Enter."

#### ✅ **8. Minimalismo**
> "Interface limpa, só o essencial, hierarquia visual clara com cores propositais."

#### ✅ **9. Recuperação de Erros**
> "Mensagens específicas como 'Chave Pix inválida', bordas vermelhas, sugestões de correção."

#### ✅ **10. Ajuda e Documentação**
> "Cards 'Como funciona?' nos formulários, README completo, placeholders descritivos."

**Reforçar:**
> "Tudo está documentado no arquivo `HEURISTICAS.md` com exemplos de código e localizações exatas."

---

## 🎬 PARTE 4: Conclusão (1 min) - ARTHUR

### O que falar:

> "Para finalizar, quero destacar o diferencial técnico do projeto:"

**Apontar aspectos técnicos:**
- ✅ "**9 páginas HTML** totalmente funcionais"
- ✅ "**6 arquivos CSS modularizados** - reset, variáveis, componentes, páginas, responsividade"
- ✅ "**5 módulos JavaScript ES6+** - utils, validação, UI, formulários"
- ✅ "**100% responsivo** - mobile first com 5 breakpoints"
- ✅ "**Acessibilidade WCAG AA** - ARIA labels, navegação por teclado, contraste adequado"

**Demonstração final (OPCIONAL - se tiver tempo):**
> "E é totalmente **responsivo**:"

**[Abrir DevTools → Toggle device toolbar → Testar iPhone, iPad, Desktop]**
- "Menu se adapta automaticamente"
- "Grid de Pix muda de 2 para 4 colunas"
- "Touch targets mínimos de 44x44px"

**Encerramento:**
> "Todo o código está no GitHub: **douglas150206/projeto_flavia_web_2**. Agradecemos a atenção e estamos abertos a perguntas!"

---

## 📱 DICAS DE APRESENTAÇÃO

### ⚡ Para Arthur (Demonstração):
1. **Tenha o site aberto ANTES** da apresentação
2. **Zoom de 125% no navegador** para plateia enxergar
3. **Movimentos suaves** no mouse - não seja rápido demais
4. **Narre o que está fazendo** enquanto clica
5. **Se der erro, não se desespere** - mostre a recuperação de erro (é uma heurística!)

### 🎯 Para Douglas (Conceitual):
1. **Seja objetivo** - 10 heurísticas em 2 minutos = 12 segundos cada
2. **Use exemplos do que Arthur mostrou** - "Lembram do loading? É a heurística #1"
3. **Gesticulue** - conte nos dedos as heurísticas
4. **Energia na voz** - não seja monótono

### 🚨 Plano B - Se algo der errado:
- **Navegador travou?** → Abra em outra aba (já deixe abas extras)
- **JavaScript não carrega?** → Mostre o código no VSCode
- **Tempo acabando?** → Pule o extrato/perfil, vá direto para heurísticas

---

## 🎥 CHECKLIST PRÉ-APRESENTAÇÃO

### 30 minutos antes:
- [ ] Testar internet
- [ ] Fechar abas desnecessárias
- [ ] Abrir `html/index.html` no navegador
- [ ] Zoom de 125-150% no navegador
- [ ] Abrir `HEURISTICAS.md` em aba separada
- [ ] Testar audio/vídeo se for online
- [ ] Beber água

### 5 minutos antes:
- [ ] Respirar fundo
- [ ] Revisar tempo de cada parte
- [ ] Combinar com Arthur quem vai responder perguntas
- [ ] Silenciar notificações do computador

---

## ❓ POSSÍVEIS PERGUNTAS E RESPOSTAS

### Q: "Por que não usaram um framework como React?"
**R:** "Decidimos usar JavaScript puro para demonstrar domínio dos fundamentos e manter o foco em IHC, não em tecnologia. Mas aplicamos conceitos modernos como ES6 modules e componentização."

### Q: "O site funciona em produção?"
**R:** "É um protótipo funcional acadêmico. Os dados são mockados, mas todas as interações, validações e feedbacks visuais funcionam de verdade."

### Q: "Testaram com usuários reais?"
**R:** "Fizemos testes com colegas aplicando as heurísticas. Identificamos e corrigimos problemas como menus duplicados, dados inconsistentes e falta de feedback visual."

### Q: "Quanto tempo levou o desenvolvimento?"
**R:** "Aproximadamente [X horas] ao longo de [Y semanas], com foco iterativo: primeiro estrutura, depois funcionalidade, e por fim refinamento de UX."

### Q: "Qual foi o maior desafio?"
**R:** "Balancear estética com usabilidade. Queríamos um design moderno, mas sem sacrificar acessibilidade e clareza."

---

## 🎯 OBJETIVOS DA APRESENTAÇÃO

Ao final, a plateia deve entender:

✅ **O que é o IFPay** - Banco digital focado em IHC  
✅ **Como funciona** - Demonstração prática das features  
✅ **Por que é bom** - Aplicação rigorosa das 10 Heurísticas de Nielsen  
✅ **Qualidade técnica** - Código modular, acessível e responsivo  

---

## 🏆 MENSAGEM FINAL

> "O IFPay demonstra que é possível criar interfaces **bonitas, funcionais E usáveis** ao mesmo tempo. Não é apenas código - é **design thinking aplicado**."

---

**Boa apresentação, Arthur e Douglas! 🚀💙**

*Lembrem-se: confiança vem da preparação. Vocês conhecem o projeto melhor que ninguém!*
