export class TicTacToe {
  private buttons: NodeListOf<Element> = document.querySelectorAll('.btn_option');
  private board: string[] = ['', '', '', '', '', '', '', '', ''];
  private listMessage: string[] = [];
  private currentPlayer: string = 'X';

  init(): void {
    this.setPlayerAlert();
    for (let i = 0; i < this.board.length; i++) {
      let btn = this.buttons[i];
      btn.addEventListener('click', () => {
        this.clickField(btn);
      });
    }

    document.getElementById('btn_restart').addEventListener('click', () => {
      this.restart();
    });
  }

  private clickField(btn: Element): void {
    if (!btn.classList.contains('selected')) {
      btn.innerHTML = this.currentPlayer;
      this.board[btn.getAttribute('data-id-btn')] = this.currentPlayer;
      this.addListMessage(this.currentPlayer + ' na posição ' + (parseInt(btn.id.substring(4), 10) + 1));
      btn.classList.add('selected');
      this.check();
      this.changePlayer();
    }
  }

  private addListMessage(message: string): void {
    this.listMessage.push(message);
    let domList = document.querySelectorAll('.last_moves')[0];
    domList.innerHTML = '';
    for (let i = this.listMessage.length; i > 0; i--) {
      domList.innerHTML += '<p>' + this.listMessage[i - 1] + '</p>';
    }
  }

  private changePlayer(): void {
    if (this.currentPlayer == 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X';
    }
    this.setPlayerAlert();
  }

  private setPlayerAlert(): void {
    let dom = document.querySelectorAll('.current_player')[0];
    dom.innerHTML = this.currentPlayer;
  }

  private check(): void {
    if (this.checkDiagonal() || this.checkHorizontal() || this.checkVertical()) {
      this.addListMessage('jogador ' + this.currentPlayer + ' ganhou!');
      this.gameOver();
    } else if (this.checkDraw()) {
      this.addListMessage('Empatou!');
      this.gameOver();
    }
  }

  private checkVertical(): boolean {
    const line1 = this.allEqual([this.board[0], this.board[3], this.board[6]], this.currentPlayer);
    const line2 = this.allEqual([this.board[1], this.board[4], this.board[7]], this.currentPlayer);
    const line3 = this.allEqual([this.board[2], this.board[5], this.board[8]], this.currentPlayer);

    if (line1) {
      this.buttons[0].classList.add('win');
      this.buttons[3].classList.add('win');
      this.buttons[6].classList.add('win');
    }

    if (line2) {
      this.buttons[1].classList.add('win');
      this.buttons[4].classList.add('win');
      this.buttons[7].classList.add('win');
    }

    if (line3) {
      this.buttons[2].classList.add('win');
      this.buttons[5].classList.add('win');
      this.buttons[8].classList.add('win');
    }

    return line1 || line2 || line3;
  }

  private checkHorizontal(): boolean {
    const line1 = this.allEqual([this.board[0], this.board[1], this.board[2]], this.currentPlayer);
    const line2 = this.allEqual([this.board[3], this.board[4], this.board[5]], this.currentPlayer);
    const line3 = this.allEqual([this.board[6], this.board[7], this.board[8]], this.currentPlayer);

    if (line1) {
      this.buttons[0].classList.add('win');
      this.buttons[1].classList.add('win');
      this.buttons[2].classList.add('win');
    }

    if (line2) {
      this.buttons[3].classList.add('win');
      this.buttons[4].classList.add('win');
      this.buttons[5].classList.add('win');
    }

    if (line3) {
      this.buttons[6].classList.add('win');
      this.buttons[7].classList.add('win');
      this.buttons[8].classList.add('win');
    }

    return line1 || line2 || line3;
  }

  private checkDiagonal(): boolean {
    const line1 = this.allEqual([this.board[0], this.board[4], this.board[8]], this.currentPlayer);
    const line2 = this.allEqual([this.board[2], this.board[4], this.board[6]], this.currentPlayer);

    if (line1) {
      this.buttons[0].classList.add('win');
      this.buttons[4].classList.add('win');
      this.buttons[8].classList.add('win');
    }

    if (line2) {
      this.buttons[2].classList.add('win');
      this.buttons[4].classList.add('win');
      this.buttons[6].classList.add('win');
    }

    return line1 || line2;
  }

  private checkDraw(): boolean {
    return this.board.indexOf('') == -1 && !this.allEqual(this.board, 'X') && !this.allEqual(this.board, 'O');
  }

  private allEqual(arry: string[], player: string): boolean {
    const result = arry.every((el: string) => {
      if (el === player) {
        return true;
      }
    });
    return result;
  }

  private gameOver(): void {
    for (let i = 0; i < this.board.length; i++) {
      let btn = this.buttons[i];
      btn.classList.add('selected');
    }
    document.querySelectorAll('.container .popup').forEach((x: Element) => {
      x.classList.remove('hidden');
    });
  }

  private restart(): void {
    this.currentPlayer = 'X';
    this.setPlayerAlert();
    this.board = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < this.board.length; i++) {
      this.buttons[i].innerHTML = '';
      this.buttons[i].classList.remove('selected');
      this.buttons[i].classList.remove('win');
    }
    this.listMessage = [];
    this.addListMessage('Jogo Reiniciado');
    document.querySelectorAll('.container .popup').forEach((x: Element) => {
      x.classList.add('hidden');
    });
  }
}

new TicTacToe().init();
