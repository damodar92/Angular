import {Component} from 'angular2/core'

@Component({
    selector: 'umbrella',
    template: `
    <i class="glyphicon glyphicon-headphones" (click)="onclick()"></i>
    `
})
export class UmbrellaComponent{
  onclick(){
      alert("Opened gift");
  }  
}