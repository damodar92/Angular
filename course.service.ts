//here the service is an example of an external source
//that might be a locally stored data file, from dbms etc.
//we define the data in the service. In this case the courses names
//and this service is called from the component to display the courses. 
export class CourseService {
    getCourses(): string[]{
      return ["Mathematics","Physics", "Chemistry"];
    }
}