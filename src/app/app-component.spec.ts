import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { By} from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
  it('should create the app-component', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`Should have as title 'coffee-random-api-project-justin-hughes'`, waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('coffee-random-api-project-justin-hughes');
  }));

  it(`Should show at top of class in div tag 'List of Coffees'`, waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.debugElement.query(By.css(".title")).nativeElement;
    expect(compiled.textContent).toContain('List of Coffees:');
  }));

  it('Make sure coffee-table-component is showing up', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('coffee-table-component')).toBeTruthy();
  }));

  it('Make sure footer is showing up', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css(".footer")).nativeElement;
    expect(compiled.textContent).toContain('Justin Hughes, 2021');
  }));

  it('Make sure resizable-text is showing up', waitForAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-resize-component')).toBeTruthy();
  }));
});