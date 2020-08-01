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
        this.check();
        this.playerA = !this.playerA;
        return;
      }
    }

  }

  check() {

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

    return;
  }

  

}
