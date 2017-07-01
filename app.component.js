System.register(['angular2/core', './courses.component', './authors.component', './star.component', './like.component', './vote.component', './umbrella.component', './thumb.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, star_component_1, like_component_1, vote_component_1, umbrella_component_1, thumb_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (umbrella_component_1_1) {
                umbrella_component_1 = umbrella_component_1_1;
            },
            function (thumb_component_1_1) {
                thumb_component_1 = thumb_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.part = {
                        title: "Title",
                        isClicked: true
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                    this.thumb = {
                        likeValue: 100,
                        iThumb: false
                    };
                    this.vote = {
                        up: false,
                        down: false,
                        votes: 10
                    };
                }
                AppComponent.prototype.DisplayChange = function ($event) {
                    alert("Star status changed");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>My Angular 2 App</h1>\n    <courses></courses>\n    <authors></authors>\n    <star [isClicked]=\"part.isClicked\" (change)=\"DisplayChange($event)\"></star>\n    <like [totalLikes]=\"tweet.totalLikes\" \n    [iLike]=\"tweet.iLike\"></like>\n    <thumb [likeValue]= \"thumb.likeValue\" [iThumb]=\"thumb.iThumb\"></thumb>\n    <vote [menuUp]=\"vote.up\" [menuDown]=\"vote.down\" [voted]=\"vote.votes\" ></vote>\n    ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, star_component_1.StarComponent, umbrella_component_1.UmbrellaComponent, like_component_1.LikeComponent, thumb_component_1.ThumbComponent, vote_component_1.VoteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map