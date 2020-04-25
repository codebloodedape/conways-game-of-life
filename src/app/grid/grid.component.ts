import { Component, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements AfterContentChecked, AfterViewChecked {

  constructor(public dataService: DataService) { }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }

  get colors() { return Colors; }
}

export enum Colors {
  ALIVE = '#000',
  DEAD = '#e2cb00'
}

export class GridData {

  row: number;
  column: number;
  data: boolean[][];

}
