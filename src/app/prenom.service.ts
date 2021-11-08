import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrenomService {

  nom ='';
  prenom ='';
  genre = false;
  constructor(private http: HttpClient) { }

  getNomPrenom(){
    return this.http.get<any>('https://randomuser.me/api').subscribe(data => {
      if(data.results[0].gender == 'male'){
        this.prenom = data.results[0].name.first;
        this.nom = data.results[0].name.last;
        this.genre = true;  
      }
    });
  }
}
