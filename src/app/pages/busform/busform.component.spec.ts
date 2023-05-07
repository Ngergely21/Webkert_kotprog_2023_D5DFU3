import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusformComponent } from './busform.component';

describe('BusformComponent', () => {
  let component: BusformComponent;
  let fixture: ComponentFixture<BusformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
