import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent
  ],
  providers: [],
  bootstrap: [CounterComponent]
})

export class CounterModule{

}
