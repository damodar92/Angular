import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'star',
    template: `
    <i 
        class="glyphicon" 
        [class.glyphicon-star-empty]= "!isClicked"
        [class.glyphicon-star]= "isClicked"
        (click)="onClick()">
    </i>
    `
})
export class StarComponent{
    @Input() isClicked = false;
    @Output() change = new EventEmitter();
    onClick(){
    this.isClicked = !this.isClicked;
    this.change.emit({newValue: this.isClicked})
    }
}