System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.menuUp = false;
                    this.menuDown = false;
                    this.voted = 0;
                }
                VoteComponent.prototype.onClickUp = function () {
                    if (!this.menuUp) {
                        if (this.menuDown) {
                            this.menuDown = false;
                            this.voted = this.voted + 1;
                        }
                        else if (!this.menuDown) {
                            this.menuUp = true;
                            this.voted = this.voted + 1;
                        }
                    }
                };
                VoteComponent.prototype.onClickDown = function () {
                    if (!this.menuDown) {
                        if (this.menuUp) {
                            this.voted = this.voted - 1;
                            this.menuUp = false;
                        }
                        else if (!this.menuUp) {
                            this.menuDown = true;
                            this.voted = this.voted - 1;
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "menuUp", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "menuDown", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voted", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    <div class= \"votes\"> \n    <i class=\"glyphicon glyphicon-menu-up\"\n     [class.highlightedUp] = \"menuUp\"\n     (click) = \"onClickUp()\">\n     </i>\n     <span> {{voted}} </span>\n     <i class=\"glyphicon glyphicon-menu-down\"\n     [class.highlightedDown] = \"menuDown\"\n     (click) = \"onClickDown()\">\n     </i>\n    </div> ",
                        styles: ["\n    .votes{\n        width: 20px;\n        cursor: pointer;\n    }\n    .highlightedUp{\n        color: yellow;\n        \n    }\n    .highlightedDown{\n        color: yellow;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map