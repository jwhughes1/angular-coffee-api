import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { By} from '@angular/platform-browser';

//Preparing the component for testing.
describe('AppComponent', () => {
  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
  //Testing to create the component
  it('Should create the app-component', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  //Making sure we have the right title for our project
  it(`Should have as title 'coffee-random-api-project-justin-hughes'`, waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('coffee-random-api-project-justin-hughes');
  }));

  //Make sure the coffee-table-component (which holds our data and the visualisations) is visible.
  it('Make sure coffee-table-component is showing up', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('coffee-table-component')).toBeTruthy();
  }));

  //Make sure we can see the footer (showing my name and that I read the instructions haha).
  it('Make sure footer is showing up', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css(".footer")).nativeElement;
    expect(compiled.textContent).toContain('Justin Hughes, 2021');
  }));

  it('Make sure component for resizing title is showing up', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-resize-component')).toBeTruthy();
  }));

});