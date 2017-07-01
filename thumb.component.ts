import {Component, Output, Input} from 'angular2/core';

@Component({
    selector:'thumb',
    template: `
     <i class="glyphicon glyphicon-thumbs-up"
     [class.highlighted] = "iThumb"
     (click) = "onClick()">
     </i>
     <span> {{likeValue}} </span>
    `,
    styles: [`
    .glyphicon-thumbs-up{
       color: #CCC,
       cursor: pointer;
    }
    .highlighted{
        color: #3F99EF;
        opacity:0.7;
    }
    `]

})
export class ThumbComponent{
    @Input() iThumb =false;
    @Input() likeValue =0;

    onClick(){
        this.iThumb =!this.iThumb;
        this.likeValue += this.iThumb ? 1: -1;
    }
}