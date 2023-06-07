//import { ComponentFixture, TestBed } from '@angular/core/testing';

//import { CoursesPageComponent } from './courses-page.component';

//describe('CoursesPageComponent', () => {
//  let component: CoursesPageComponent;
//  let fixture: ComponentFixture<CoursesPageComponent>;

//  beforeEach(() => {
//    TestBed.configureTestingModule({
//      declarations: [CoursesPageComponent]
//    });
//    fixture = TestBed.createComponent(CoursesPageComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });
//});

//import { courses } from '@shared/mock/courses';
//import { CoursesPageComponent } from './courses-page.component';

//describe('CoursesPageComponent', () => {
//  let component: CoursesPageComponent;

//  beforeEach(() => {
//    component = new CoursesPageComponent();
//  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });

//  it('should log the deleted course id on onDeleteCourseItem', () => {
//    //jest.spyOn(console, 'log');
//    const courseId = 2;
//    component.onDeleteCourseItem(courseId);
//    expect(console.log).toHaveBeenCalledWith(courseId);
//  });

//  it('should have a coursesArray property with a default value of an empty array', () => {
//    expect(component.courses).toEqual([]);
//  });

//  it('should initialize coursesArray on ngOnInit', () => {
//    component.ngOnInit();
//    expect(component.courses).toEqual(courses);
//  });
//});
