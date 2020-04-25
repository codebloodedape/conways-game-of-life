import { Injectable } from '@angular/core';
import * as gospelJson from '../../maps/gospel.json';
import * as lineJson from '../../maps/10bit-line.json';
import * as exploderJson from '../../maps/exploder.json';
import * as gliderJson from '../../maps/glider.json';
import * as smallExploderJson from '../../maps/small-exploder.json';
import * as spaceshipJson from '../../maps/spaceship.json';
import * as tumblerJson from '../../maps/tumbler.json';
import { Observable, observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public gridData: boolean[][] = [];

  liveCells: number[][] = [];
  deadCells: number[][] = [];

  constructor() {
    this.gridData = lineJson.data;
  }

  updatedGridData() {
    for (let i = 1; i < this.gridData.length - 1; i++) {
      for (let j = 1; j < this.gridData[i].length - 1; j++) {
        let liveNeighbours = 0;

        if (this.gridData[i - 1][j - 1]) {
          liveNeighbours++;
        }
        if (this.gridData[i - 1][j]) {
          liveNeighbours++;
        }
        if (this.gridData[i - 1][j + 1]) {
          liveNeighbours++;
        }
        if (this.gridData[i][j + 1]) {
          liveNeighbours++;
        }
        if (this.gridData[i + 1][j + 1]) {
          liveNeighbours++;
        }
        if (this.gridData[i + 1][j]) {
          liveNeighbours++;
        }
        if (this.gridData[i + 1][j - 1]) {
          liveNeighbours++;
        }
        if (this.gridData[i][j - 1]) {
          liveNeighbours++;
        }

        if (this.gridData[i][j]) {
          if (liveNeighbours < 2 || liveNeighbours > 3) {
            this.deadCells.push([i, j]);
          }
        }
        else {
          if (liveNeighbours === 3) {
            this.liveCells.push([i, j]);
          }
        }
      }
    }

    for (let i = 0; i < this.liveCells.length; i++) {
      this.gridData[this.liveCells[i][0]][this.liveCells[i][1]] = true;

    }
    this.liveCells = [];
    for (let i = 0; i < this.deadCells.length; i++) {
      this.gridData[this.deadCells[i][0]][this.deadCells[i][1]] = false;

    }
    this.deadCells = [];
  }

  selectPattern(pattern: Pattern) {
    switch (pattern) {
      case Pattern.LINE:
        this.gridData = lineJson.data;
        break;
      case Pattern.EXPLODER:
        this.gridData = exploderJson.data;
        break;
      case Pattern.SMALLEXPLODER:
        this.gridData = smallExploderJson.data;
        break;
      case Pattern.SPACESHIP:
        this.gridData = spaceshipJson.data;
        break;
      case Pattern.TUMBLER:
        this.gridData = tumblerJson.data;
        break;
      case Pattern.GLIDER:
        this.gridData = gliderJson.data;
        break;
      case Pattern.GOSPEL:
        this.gridData = gospelJson.data;
        break;
    }
  }
}

export enum Pattern {
  GOSPEL,
  LINE,
  EXPLODER,
  SMALLEXPLODER,
  SPACESHIP,
  TUMBLER,
  GLIDER
}
