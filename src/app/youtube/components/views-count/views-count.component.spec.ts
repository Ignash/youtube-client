import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsCountComponent } from './views-count.component';

describe('ViewsCountComponent', () => {
  let component: ViewsCountComponent;
  let fixture: ComponentFixture<ViewsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
