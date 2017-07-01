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
    var ThumbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ThumbComponent = (function () {
                function ThumbComponent() {
                    this.iThumb = false;
                    this.likeValue = 0;
                }
                ThumbComponent.prototype.onClick = function () {
                    this.iThumb = !this.iThumb;
                    this.likeValue += this.iThumb ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ThumbComponent.prototype, "iThumb", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ThumbComponent.prototype, "likeValue", void 0);
                ThumbComponent = __decorate([
                    core_1.Component({
                        selector: 'thumb',
                        template: "\n     <i class=\"glyphicon glyphicon-thumbs-up\"\n     [class.highlighted] = \"iThumb\"\n     (click) = \"onClick()\">\n     </i>\n     <span> {{likeValue}} </span>\n    ",
                        styles: ["\n    .glyphicon-thumbs-up{\n       color: #CCC,\n       cursor: pointer;\n    }\n    .highlighted{\n        color: #3F99EF;\n        opacity:0.7;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ThumbComponent);
                return ThumbComponent;
            }());
            exports_1("ThumbComponent", ThumbComponent);
        }
    }
});
//# sourceMappingURL=thumb.component.js.map