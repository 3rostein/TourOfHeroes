import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
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

  constructor(private messageService: MessageService) { }




  getHero(id: any): void {
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    this.db.collection('heroes').doc(id).onSnapshot(heroes => {
      console.log(heroes);
    });
  }

  getHeroes(): Observable<Hero[]> {
    let heroArr: Hero[] = [];
    this.db.collection('heroes').onSnapshot((heroes) => {
      heroes.docs.forEach(element => {
        let heroId: string = element.id;
        let heroName: string = element.get('name');
        let hero: Hero = { id: heroId, name: heroName };

        heroArr.push(hero);
      });
    });

    return of(heroArr);
  }


}
