import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  db = firebase.firestore();
  heroes: Hero[] = [];
  constructor(private messageService: MessageService) { }




  getHero(id: number): void {
    // this.messageService.add(`HeroService: fetched hero id=${id}`);

    this.db.collection('heroes').where('id', '==', id).get().then((hero) => {
      console.log(hero.data());
    });

  }




}
