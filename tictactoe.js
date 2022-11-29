export class TicTacToe {
    buttons = document.querySelectorAll('.btn_option');
    board = ['', '', '', '', '', '', '', '', ''];
    listMessage = [];
    currentPlayer = 'X';
    init() {
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
    clickField(btn) {
        if (!btn.classList.contains('selected')) {
            btn.innerHTML = this.currentPlayer;
            this.board[btn.getAttribute('data-id-btn')] = this.currentPlayer;
            this.addListMessage(this.currentPlayer + ' na posição ' + (parseInt(btn.id.substring(4), 10) + 1));
            btn.classList.add('selected');
            this.check();
            this.changePlayer();
        }
    }
    addListMessage(message) {
        this.listMessage.push(message);
        let domList = document.querySelectorAll('.last_moves')[0];
        domList.innerHTML = '';
        for (let i = this.listMessage.length; i > 0; i--) {
            domList.innerHTML += '<p>' + this.listMessage[i - 1] + '</p>';
        }
    }
    changePlayer() {
        if (this.currentPlayer == 'X') {
            this.currentPlayer = 'O';
        }
        else {
            this.currentPlayer = 'X';
        }
        this.setPlayerAlert();
    }
    setPlayerAlert() {
        let dom = document.querySelectorAll('.current_player')[0];
        dom.innerHTML = this.currentPlayer;
    }
    check() {
        if (this.checkDiagonal() || this.checkHorizontal() || this.checkVertical()) {
            this.addListMessage('jogador ' + this.currentPlayer + ' ganhou!');
            this.gameOver();
        }
        else if (this.checkDraw()) {
            this.addListMessage('Empatou!');
            this.gameOver();
        }
    }
    checkVertical() {
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
    checkHorizontal() {
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
    checkDiagonal() {
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
    checkDraw() {
        return this.board.indexOf('') == -1 && !this.allEqual(this.board, 'X') && !this.allEqual(this.board, 'O');
    }
    allEqual(arry, player) {
        const result = arry.every((el) => {
            if (el === player) {
                return true;
            }
        });
        return result;
    }
    gameOver() {
        for (let i = 0; i < this.board.length; i++) {
            let btn = this.buttons[i];
            btn.classList.add('selected');
        }
        document.querySelectorAll('.container .popup').forEach((x) => {
            x.classList.remove('hidden');
        });
    }
    restart() {
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
        document.querySelectorAll('.container .popup').forEach((x) => {
            x.classList.add('hidden');
        });
    }
}
new TicTacToe().init();
