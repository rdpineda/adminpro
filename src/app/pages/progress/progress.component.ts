import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  public progreso1: number = 20;
  public progreso2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  actualizar(event: number){

  }

}
