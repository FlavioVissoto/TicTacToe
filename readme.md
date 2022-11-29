# Tic Tac Toe - Jogo da Velha

<div align="center">
    <img src="https://github.com/FlavioVissoto/TicTacToe/blob/master/src/assets/img/screenshot_01.png" alt="Tela Jogo da Velha" width="49.5%" />
    <img src="https://github.com/FlavioVissoto/TicTacToe/blob/master/src/assets/img/screenshot_02.png" alt="Tela Jogo da Velha" width="49.5%" />
</div>
</br>

O jogo da velha (português brasileiro) ou jogo do galo (português europeu) ou três em linha é um jogo e/ou passatempo popular. É um jogo de regras extremamente simples, que não traz grandes dificuldades para seus jogadores e é facilmente aprendido. A origem é desconhecida, com indicações de que pode ter começado no antigo Egito, onde foram encontrados tabuleiros esculpidos na rocha, que teriam mais de 3.500 anos.

### Estratégias

A lógica do jogo é muito simples, de modo que não é difícil deduzir ou decorar todas as possibilidades para efetuar a melhor jogada - apesar de o número total de possibilidades ser muito grande, a maioria delas é simétrica, além de que as regras são simples. Por esse motivo, é muito comum que o jogo empate (ou "dê velha").

Um jogador pode facilmente jogar um jogo perfeito seguindo as seguintes regras, por ordem de prioridade:

1. Ganhar: Se você tem duas peças numa linha, ponha a terceira.
2. Bloquear: Se o oponente tiver duas peças em linha, ponha a terceira para bloqueá-lo.
3. Triângulo: Crie uma oportunidade em que você poderá ganhar de duas maneiras.
4. Bloquear o Triângulo do oponente:
   Opção 1: Crie 2 peças em linha para forçar o oponente a se defender, contanto que não resulte nele criando um triângulo ou vencendo. Por exemplo, se 'X' tem dois cantos opostos do tabuleiro e 'O' tem o centro, 'O' não pode jogar num canto (Jogar no canto nesse cenário criaria um triângulo em que 'X' vence).
   Opção 2: Se existe uma configuração em que o oponente pode formar um triângulo, bloqueiem-no.
5. Centro: Jogue no centro.
6. Canto vazio: jogue num canto vazio.

## Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

### Licença

[MIT](https://choosealicense.com/licenses/mit/)
