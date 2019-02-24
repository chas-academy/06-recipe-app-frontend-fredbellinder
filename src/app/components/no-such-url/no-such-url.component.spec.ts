import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSuchUrlComponent } from './no-such-url.component';

describe('NoSuchUrlComponent', () => {
  let component: NoSuchUrlComponent;
  let fixture: ComponentFixture<NoSuchUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSuchUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSuchUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
