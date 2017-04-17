import { Component, Input } from '@angular/core';
import { Hero} from '../interfaces/heromodel';

@Component ({
selector : 'hero-detail',
templateUrl : '/app.herodetails.component.html'
})

export class AppHeroDetailsComponent{
@Input() hero: Hero;
}