import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBruMapComponent } from './my-bru-map.component';

describe('MyBruMapComponent', () => {
  let component: MyBruMapComponent;
  let fixture: ComponentFixture<MyBruMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBruMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBruMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
