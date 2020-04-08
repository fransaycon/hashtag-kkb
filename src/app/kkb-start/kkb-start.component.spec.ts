import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkbStartComponent } from './kkb-start.component';

describe('KkbStartComponent', () => {
  let component: KkbStartComponent;
  let fixture: ComponentFixture<KkbStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkbStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkbStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
