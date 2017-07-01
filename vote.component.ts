import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    template:`
    <div class= "votes"> 
    <i class="glyphicon glyphicon-menu-up"
     [class.highlightedUp] = "menuUp"
     (click) = "onClickUp()">
     </i>
     <span> {{voted}} </span>
     <i class="glyphicon glyphicon-menu-down"
     [class.highlightedDown] = "menuDown"
     (click) = "onClickDown()">
     </i>
    </div> `,
    styles: [`
    .votes{
        width: 20px;
        cursor: pointer;
    }
    .highlightedUp{
        color: yellow;
        
    }
    .highlightedDown{
        color: yellow;
    }
    `]

})
export class VoteComponent{
    @Input() menuUp =false;
    @Input() menuDown =false;
    @Input() voted =0;

    onClickUp(){
        if(!this.menuUp){
            if(this.menuDown){
                this.menuDown=false;
                this.voted = this.voted +1; 
                
            }
        
            else if(!this.menuDown){
                this.menuUp =true;
                this.voted = this.voted +1;
            }
        }
    }
    onClickDown(){
        if(!this.menuDown){
            if(this.menuUp){
                this.voted = this.voted -1; 
                this.menuUp =false;
            }
        
            else if(!this.menuUp){
                this.menuDown =true;
                this.voted = this.voted -1;
            }

        }
    }
}