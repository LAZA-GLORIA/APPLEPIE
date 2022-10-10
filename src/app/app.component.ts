import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Tarte } from './model/tarte.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 //tartes$: Observable<Tarte[]>;

  constructor() {}
  
  ngOnInit(): void {
  //  this.tartes$ = interval(1000);
    }


}
