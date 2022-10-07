import { Component, Input, OnInit } from '@angular/core';
import { Pomme } from '../model/pomme.model';
import { ApplePieService } from '../services/apple-pie.services';

@Component({
  selector: 'app-pomme',
  templateUrl: './pomme.component.html',
  styleUrls: ['./pomme.component.scss']
})
export class PommeComponent implements OnInit {
  @Input()

  pomme!: Pomme;

  constructor(private pommeService: ApplePieService ) { }

  ngOnInit(): void {
  }

}
