import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman","Ironman","Hulk","She Hulk","Thor"]
  public lastHeroeRemoved?: string= "";
  removeLastHero(): void {
   this.lastHeroeRemoved =  this.heroNames.pop();
  }

  reset(): void {
    this.heroNames = ["Spiderman","Ironman","Hulk","She Hulk","Thor"];
  }


}
