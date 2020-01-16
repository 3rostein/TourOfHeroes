import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"]
})
export class HeroSearchComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes: Hero[];

  searchHeroes(name: string): void {
    this.heroService
      .searchHeroes(name)
      .subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit() {}
}
