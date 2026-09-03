# Jogo da Velha

# Visão geral
Esta aplicação consiste em um jogo da velha interativo desenvolvido em React, no qual dois jogadores alternam turnos ("X" e "O") em um tabuleiro 3x3 com o objetivo de alinhar três símbolos iguais na horizontal, vertical ou diagonal; o sistema inicia com o tabuleiro vazio, aceita apenas jogadas em posições desocupadas, bloqueia novos cliques e anuncia o resultado em caso de vitória ou empate, além de registrar o histórico de jogadas para permitir a navegação por rodadas anteriores ("viagem no tempo") — tudo isso refinando o tutorial oficial do React através da modularização em componentes em pastas próprias (.jsx e .module.css), uso de CSS Modules com metodologia BEM, Design System por variáveis CSS, HTML semântico, acessibilidade e princípios de Clean Code.

---

# Regras de negócio
1. **Início do Jogo:**
   - O jogo é iniciado automaticamente com o tabuleiro contendo 9 posições vazias (matriz 3x3).
   - O jogador **"X"** é definido por padrão para realizar a primeira jogada.

2. **Interação entre Jogadores:**
   - O jogo ocorre em turnos alternados entre **"X"** e **"O"**.
   - A cada jogada válida, o sistema passa a vez para o outro jogador.

3. **Realização e Validação de Jogadas:**
   - As jogadas são realizadas ao clicar/selecionar uma célula do tabuleiro.
   - **Jogada Inválida:** Ocorre em duas situações:
     1. Quando o jogador clica em uma posição que **já está ocupada** por "X" ou "O".
     2. Quando o jogo **já foi encerrado** (já existe um vencedor ou ocorreu empate).
   - Nessas situações, o evento de clique é ignorado pelo sistema.

4. **Determinação do Vencedor:**
   - O vencedor é determinado quando um jogador consegue alinhar **3 símbolos iguais** na horizontal, vertical ou diagonal.
   - A checagem é realizada a cada jogada com base nas 8 combinações de vitória possíveis.

5. **Situação de Empate ("Velha"):**
   - Ocorre quando **todas as 9 posições** do tabuleiro estiverem preenchidas e **nenhum jogador** tiver alcançado a condição de vitória.

6. **Encerramento do Jogo:**
   - O jogo é encerrado imediatamente após a identificação do vencedor ou da declaração de empate.
   - Novas jogadas no tabuleiro são bloqueadas.

7. **Histórico e Navegação ("Viagem no Tempo"):**
   - Cada jogada realizada armazena o estado do tabuleiro em uma lista de histórico.
   - O jogador pode clicar nos botões do histórico para retornar a qualquer estado/rodada anterior da partida.
   - Se o jogador voltar a uma rodada anterior e fizer uma nova jogada, o histórico futuro é sobrescrito a partir desse novo ponto.

8. **Funcionalidades Adicionais:**
   - **Placar Geral:** Contabiliza o número de vitórias do Jogador X, Jogador O e Empates ao longo de várias partidas.
   - **Reinício Rápido:** Botão dedicado para limpar o tabuleiro e começar uma nova partida sem perder o placar acumulado.

---

# Requisitos Funcionais
- **RF01 - Inicialização do Jogo:** O jogo deve ser iniciado sempre com um tabuleiro de 3x3 contendo 9 células vazias. Por padrão, o jogador **"X"** realiza a primeira jogada da partida.
- **RF02 - Alternância de Turnos:** A partida ocorre de forma estritamente alternada. A cada jogada válida efetuada pelo jogador do turno atual, o controle é passado automaticamente para o próximo jogador ("X" passa para "O" e vice-versa).
- **RF03 - Validação de Jogadas Inválidas:** Uma jogada é considerada **inválida** e o clique deve ser ignorado quando a célula selecionada já estiver ocupada por "X" ou "O" ou o jogo já estiver encerrado.
- **RF04 - Determinação de Vitória:** A condição de vitória é atingida no exato momento em que um jogador consegue alinhar 3 símbolos idênticos na horizontal, vertical ou diagonal.
- **RF05 - Determinação de Empate ("Velha"):** O empate é declarado quando todas as 9 posições do tabuleiro forem preenchidas e nenhuma das combinações de vitória for alcançada.
- **RF06 - Encerramento do Jogo:** Ao atingir a condição de vitória ou empate, o sistema deve congelar o tabuleiro, impedindo novas interações nas células e exibindo o resultado final na interface.
- **RF07 - Histórico e Viagem no Tempo:** Cada jogada válida gera um registro imutável do estado do tabuleiro. O jogador pode navegar pelos botões do histórico para visualizar estados passados.

---

# Objetivo
Refatorar e evoluir a aplicação **Jogo da Velha (Tic-Tac-Toe)** desenvolvida no tutorial oficial do React, aplicando na prática os conceitos avançados estudados em aula para criar uma versão personalizada, moderna e modularizada. O propósito principal é transformar o exemplo monolítico inicial da documentação em uma solução robusta de nível profissional, garantindo legibilidade, manutenção, separação de responsabilidades e excelente experiência de usuário.

### Conceitos Chave Aplicados no Desenvolvimento:
- **Componentização e Reutilização:** Divisão da interface em componentes independentes, reusáveis e focados em responsabilidades únicas.
- **Composição e Hierarquia:** Construção de uma estrutura clara de componentes, gerenciando o fluxo unidirecional de dados por meio de props.
- **Gerenciamento de Estado e Imutabilidade:** Controle de estado via hook useState, aplicando rigorosamente a imutabilidade ao manipular os dados do jogo e histórico.
- **Arquitetura de Pastas Modular:** Organização isolada por componente, na qual cada pasta engloba seu arquivo de lógica (.jsx) e seu arquivo de estilo escopado (.module.css).
- **Design System e Estilização BEM:** Criação de um Design System fundamentado em Variáveis CSS e aplicação da metodologia BEM (Block, Element, Modifier) via CSS Modules.
- **Clean Code e Padronização:** Aplicação de boas práticas de escrita de código, garantindo clareza na nomenclatura de componentes, funções, variáveis e arquivos.
- **HTML Semântico e Acessibilidade (a11y):** Emprego correto das tags HTML5 e inclusão de atributos acessíveis.
- **Responsividade e Consistência Visual:** Layout adaptável para múltiplos tamanhos de tela e dispositivos.

---

# Desenvolvimento

### Estratégia de Componentização e Divisão de Responsabilidades
A refatoração do projeto baseou-se na divisão modular da interface em quatro componentes principais com responsabilidades bem isoladas:
- **Square:** Atua estritamente como um componente de apresentação (UI pura). Sua única função é renderizar um botão individual do tabuleiro e reagir ao evento de clique via props, sem gerenciar estado interno.
- **Board:** Responsável por estruturar a grade 3x3 do tabuleiro, renderizar o conjunto de nove botões Square e exibir a indicação de status da partida (turno, vitória ou empate).
- **Placar:** Componente especialista que recebe as pontuações acumuladas via props e exibe a quantidade atualizada de vitórias do Jogador X, do Jogador O e a contagem de empates ("velha").
- **Game:** Opera como o componente contêiner de nível superior. É nele que reside a centralização dos estados globais (histórico de jogadas, movimento atual e placar acumulado).

### Critérios Adotados para Separação de Responsabilidades
- **Isolamento de Componentes de Apresentação (Presentational Components):** Square e Placar foram concebidos com foco exclusivo em renderização visual sem gerenciar estado próprio.
- **Isolamento de Componentes de Estrutura:** Board coordena a grade 3x3 delegando a validação das jogadas e novos estados ao componente pai.
- **Centralização do Estado Global (Container Component):** Game centraliza os estados mutáveis do sistema garantindo uma única fonte de verdade.
- **Desacoplamento de Regras Puras de Negócio:** As funções matemáticas e algorítmicas de verificação de vencedor e empate foram movidas para o módulo `src/utils/logicaJogo.js`.

### Estruturação do Design System e Organização dos Estilos
- **CSS Modules:** Garantia do isolamento total de estilos por componente, eliminando conflitos globais.
- **Metodologia BEM:** Convenção de classes baseada em Bloco, Elemento e Modificador para manter a legibilidade e padronização.
- **Interface Responsiva:** Utilização de CSS Grid, Flexbox e unidades relativas para total adaptação visual em múltiplos dispositivos.

### Dificuldades Encontradas e Soluções Adotadas
1. **Loop Infinito de Renderização:**
   - *Problema:* Invocação direta da função de atualizar placar no corpo do componente.
   - *Solução:* Reestruturação para atualizar o placar reativamente dentro do manipulador de eventos `handlePlay`.
2. **Incompatibilidade de Tipo na Manipulação do Placar:**
   - *Problema:* Tentativa de usar operador spread sobre objetos como se fossem arrays.
   - *Solução:* Uso correto da sintaxe de espalhamento para cópias imutáveis de objetos (`{ ...placar }`).
3. **Tentativa de Renderização de Objeto no JSX:**
   - *Problema:* Passagem do objeto de estado diretamente dentro do JSX.
   - *Solução:* Desestruturação explícita de props e exibição individual de cada propriedade primitiva.

---

# Componentes

### 1. Componente Square
- **Função do Componente:** Renderizar individualmente cada célula (botão) do tabuleiro de jogo de forma acessível e interativa, respondendo às interações de clique do usuário e aplicando variações visuais de acordo com o símbolo inserido ("X" ou "O").

### 2. Componente Board
- **Função do Componente:** Organizar visualmente a grade tridimensional (3x3) do jogo da velha, mapear a lista de posições e renderizar os 9 componentes Square, além de exibir a mensagem informativa sobre o status do turno atual ou o encerramento do jogo.

### 3. Componente Placar
- **Função do Componente:** Apresentar de forma clara e legível as estatísticas contínuas de pontuação da sessão, exibindo separadamente a contagem acumulada de vitórias do Jogador X, vitórias do Jogador O e total de empates ("velha").

### 4. Componente Game
- **Função do Componente:** Atuar como o contêiner raiz de orquestração do jogo, mantendo o estado global do histórico de jogadas, o turno atual e o placar acumulado, permitindo a navegação no histórico ("viagem no tempo") e renderizando todos os subcomponentes organizados.

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