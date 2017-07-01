System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            //here the service is an example of an external source
            //that might be a locally stored data file, from dbms etc.
            //we define the data in the service. In this case the courses names
            //and this service is called from the component to display the courses. 
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ["Mathematics", "Physics", "Chemistry"];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map