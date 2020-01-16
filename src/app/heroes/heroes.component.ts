import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes: Hero[];

  selectedHero: Hero;

  addHero(name: string): void {
    this.heroService.addHero(name);
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }

  deleteHero(id: string): void {
    this.heroService.deleteHero(id);
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
