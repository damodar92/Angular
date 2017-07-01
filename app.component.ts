import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {UmbrellaComponent} from './umbrella.component';
import {ThumbComponent} from './thumb.component';
@Component({
    selector: 'my-app',
    template: `
    <h1>My Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <star [isClicked]="part.isClicked" (change)="DisplayChange($event)"></star>
    <like [totalLikes]="tweet.totalLikes" 
    [iLike]="tweet.iLike"></like>
    <thumb [likeValue]= "thumb.likeValue" [iThumb]="thumb.iThumb"></thumb>
    <vote [menuUp]="vote.up" [menuDown]="vote.down" [voted]="vote.votes" ></vote>
    `,
    directives: [CoursesComponent, AuthorsComponent, StarComponent, UmbrellaComponent, LikeComponent, ThumbComponent, VoteComponent]   
})
export class AppComponent {
  part ={
      title: "Title",
      isClicked: true
  }  
  DisplayChange($event){
      alert("Star status changed");
  }
  tweet ={
      totalLikes: 10,
      iLike : false
  }
  thumb = {
      likeValue: 100,
      iThumb: false

  }
  vote ={
      up: false,
      down: false,
      votes: 10
      
  }
}