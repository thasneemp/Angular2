import { Component } from '@angular/core';
import { Hero } from './interfaces/heromodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
title = this.heroes[0].name;
selectedHero: Hero;
onSelect(hero : Hero) :void{
  this.selectedHero = hero;
  this.title = this.selectedHero.name;
}
}
