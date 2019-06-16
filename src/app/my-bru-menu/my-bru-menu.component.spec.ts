import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBruMenuComponent } from './my-bru-menu.component';

describe('MyBruMenuComponent', () => {
  let component: MyBruMenuComponent;
  let fixture: ComponentFixture<MyBruMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBruMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBruMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
