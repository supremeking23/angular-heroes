import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private HeroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5)); //return two,three,four and five
  }
}
