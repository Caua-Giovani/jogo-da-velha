# 🎮 Jogo da Velha (Tic-Tac-Toe) - React & Vite

## 📖 Visão Geral
Esta aplicação consiste em um jogo da velha interativo desenvolvido em React, no qual dois jogadores alternam turnos ("X" e "O") em um tabuleiro 3x3 com o objetivo de alinhar três símbolos iguais na horizontal, vertical ou diagonal. O sistema inicia com o tabuleiro vazio, aceita apenas jogadas em posições desocupadas, bloqueia novos cliques e anuncia o resultado em caso de vitória ou empate, além de registrar o histórico de jogadas para permitir a navegação por rodadas anteriores ("viagem no tempo") — tudo isso refinando o tutorial oficial do React através da modularização em componentes em pastas próprias, uso de CSS Modules com metodologia BEM, Design System por variáveis CSS, HTML semântico, acessibilidade e princípios de Clean Code.

## 🎯 Objetivo
Refatorar o projeto **Jogo da Velha** desenvolvido no tutorial oficial do React, aplicando os conceitos estudados em aula para criar uma versão personalizada da aplicação. O objetivo é aprimorar a estrutura, a organização e a qualidade do código, preservando e evoluindo as funcionalidades existentes e implementando melhorias na interface e na experiência do usuário.

**Durante o desenvolvimento, são aplicados os seguintes conceitos:**
- Componentização e reutilização de componentes, promovendo a separação de responsabilidades;
- Composição de componentes e organização da hierarquia da aplicação;
- Utilização de props e gerenciamento de estado com `useState`;
- Manipulação do estado de forma imutável;
- Organização da estrutura de pastas e arquivos do projeto;
- Construção de um Design System utilizando CSS Modules e variáveis CSS;
- Padronização da nomenclatura das classes CSS utilizando a metodologia BEM (Block, Element, Modifier);
- Aplicação dos princípios de Clean Code, priorizando legibilidade, organização, reutilização e facilidade de manutenção;
- Utilização de HTML semântico e boas práticas de acessibilidade.

## 📋 Regras de Negócio
- **Início:** O jogo inicia com um tabuleiro 3x3 vazio.
- **Interação:** Dois jogadores se alternam entre as marcações "X" e "O".
- **Jogadas:** Apenas permitidas em posições vazias (cliques em células preenchidas são ignorados).
- **Vitória:** Ocorre quando um jogador alinha 3 marcações iguais (horizontal, vertical ou diagonal).
- **Empate:** Ocorre quando todas as 9 células estão preenchidas e não há vencedor.
- **Fim de jogo:** Após vitória ou empate, o tabuleiro é bloqueado para novas jogadas.
- **Histórico:** Cada jogada é registrada, permitindo retornar a qualquer momento da partida.

## ✅ Requisitos Funcionais
- O sistema deve permitir iniciar uma nova partida.
- O sistema deve alternar automaticamente a vez entre os jogadores.
- O sistema deve identificar vitória e empate.
- O sistema deve impedir jogadas em posições já ocupadas.
- O sistema deve exibir o vencedor ao término da partida.
- O sistema deve permitir reiniciar o jogo.
- O sistema deve manter o histórico de jogadas.

## ⚙️ Tecnologias Utilizadas
- **React** (Biblioteca principal)
- **Vite** (Build tool)
- **CSS Modules + BEM** (Estilização)
- **Bootstrap** (UI Assistivo)
- **JavaScript (ES6+) / HTML5 / CSS3**

## 🚀 Como Baixar e Executar Localmente

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Caua-Giovani/jogo-da-velha.git
   ```
2. **Acessar a pasta do projeto:**
   ```bash
   cd jogo-da-velha
   ```
3. **Instalar as dependências:**
   ```bash
   npm install
   ```
4. **Executar o servidor local:**
   ```bash
   npm run dev
   ```
5. **Acessar no navegador:** Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).