import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  @Input() monEtude: any;
  competences =['HTML','CSS', 'PHP','JS', 'ANGULAR'];

  constructor() { }

  ngOnInit(): void {
  }

}
