import { Component, Input, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';
import { CageotPomme } from '../model/cageot-pomme.model';
import { ApplePieService } from '../services/apple-pie.services';

@Component({
  selector: 'app-cageot-pomme',
  templateUrl: './cageot-pomme.component.html',
  styleUrls: ['./cageot-pomme.component.scss']
})
export class CageotPommeComponent implements OnInit {
  @Input() cageotPomme!: CageotPomme;
   //fluxCageot$!: Observable<CageotPomme[]>;

  constructor(private cageotPommeService: ApplePieService) {}

  ngOnInit(): void {
  }


}
