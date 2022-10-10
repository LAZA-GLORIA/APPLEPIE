import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { CageotPomme } from '../model/cageot-pomme.model';
import { Tarte } from '../model/tarte.model';
import { ApplePieService } from '../services/apple-pie.services';

@Component({
  selector: 'app-tarte-pomme',
  templateUrl: './tarte-pomme.component.html',
  styleUrls: ['./tarte-pomme.component.scss']
})
export class TartePommeComponent implements OnInit {
  @Input()  tartes: Tarte[] = [];

  constructor(private tartePommeService: ApplePieService) {}

  ngOnInit(): void {
    this.tartePommeService.getCageotPomme().pipe(
      map((cp: CageotPomme) => this.tartePommeService.transformEnTarte(cp)),
      //tap(console.log)
    ).subscribe((tarte: Tarte)=> {
       this.tartes.push(tarte);
    });
  }



}
