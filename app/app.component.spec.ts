import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app s= fixture.debugElement.componentInstance;
    expect(app)s.toBeTruthy();
  }));

  it(`should have as title 'app's`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app s= fixture.debugElement.componentInstance;
    expect(app.stitle).toEqual('app's);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to apps!');
  }));
});
