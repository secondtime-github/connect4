import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.reform();
  }

  board: string[][];

  playerA: boolean = true;

  winner: string = null;
  
  add(n: number) {

    for(var i=5; i>=0; i--) {
      if(this.board[i][n] == null) {
        this.board[i][n] = this.playerA ? '⭕️' : '❌';
        this.check(i, n);
        this.playerA = !this.playerA;
        return;
      }
    }

  }

  check(x: number, y: number) {
    let player: string = this.playerA ? '⭕️' : '❌';

    let dx = [1, 1, 1, 0, -1, -1, -1, 0];
    let dy = [1, 0, -1, -1, -1, 0, 1, 1];
    var cnt = [0, 0, 0, 0, 0, 0, 0, 0];

    for(var i=0; i<8; i++) {
        cnt[i] = count(dx[i], dy[i], this.board);
    }

    if(cnt[0]+cnt[4]>2 || cnt[1]+cnt[5]>2 || cnt[2]+cnt[6]>2 || cnt[3]+cnt[7]>2) {
      this.winner = player;
    }

    function count(dx: number, dy: number, b: string[][]) {
      var currX = x;
      var currY = y;

      for(var i=0; i<3; i++) {
        currX += dx;
        currY += dy;

        if(currX<0 || currY<0 || currX>=6 || currY>=7 || b[currX][currY] !== player) {
          return i;
        }
      }

      return 3;
    }
  }


  reform() {
    this.board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    this.winner = null;

    return;
  }
  
}
