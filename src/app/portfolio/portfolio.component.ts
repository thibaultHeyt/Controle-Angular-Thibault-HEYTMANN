import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { PrenomService } from '../prenom.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  etude = 'DAWIN'
  note = 0;
  dateDuJour = new Date();
  dateNaissance = new Date();
  constructor(public prenomService : PrenomService) { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'asyncObservablePipe',
  template: "<div class = 'dateModif'>Dernière modification : {{ time | async }}</div>"
})
export class AsyncObservablePipeComponent {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}