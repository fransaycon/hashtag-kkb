import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KkbUsersComponent } from './kkb-users.component';

describe('KkbUsersComponent', () => {
  let component: KkbUsersComponent;
  let fixture: ComponentFixture<KkbUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkbUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkbUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
