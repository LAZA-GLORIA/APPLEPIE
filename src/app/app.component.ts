import { Component, OnInit } from '@angular/core';
import { Tarte } from './model/tarte.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tartes: Tarte[] = [];

  constructor() {}
  
  ngOnInit(): void {
    }


}
