import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {



  public name:string =  "ironman"
  public age:number = 45


  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  get heroDescription():string {

    return `This hero name is ${this.name} and his age is ${this.age}`;
  }

  changeHero(): void {
    this.name="Spiderman"

  }

  changeAge(): void {
    this.age =25
  }

   resetForm(): void {

    this.age = 45

    document.querySelectorAll('h1').forEach( element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }
}
