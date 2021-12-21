import { TestBed, waitForAsync } from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { ResizeComponentComponent } from 'src/app/resize-component/resize-component.component';

describe('ResizeComponentComponent', () => {
  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [
        ResizeComponentComponent
      ],
    }).compileComponents();
  }));

  it('Should create the component', waitForAsync (() => {
    const fixture = TestBed.createComponent(ResizeComponentComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  //By using .toHaveBeenCalled, we are indicating that our CSS file for the resize component
  //is being called on - in other words, that it is being styled properly.
  it(`Should be linked with CSS file`, waitForAsync (() => {
    const fixture = TestBed.createComponent(ResizeComponentComponent);
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.query(By.css(".footer_platform"));
    expect(compiled.nativeElement.enabled).toHaveBeenCalled;
  }));

  it(`Should show 'Breakpoint Text'`, waitForAsync (() => {
    const fixture = TestBed.createComponent(ResizeComponentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css(".footer_platform")).nativeElement;
    expect(compiled.textContent).toContain('Breakpoint text');
  }));
});