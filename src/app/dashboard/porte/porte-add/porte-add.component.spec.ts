import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteAddComponent } from './porte-add.component';

describe('PorteAddComponent', () => {
  let component: PorteAddComponent;
  let fixture: ComponentFixture<PorteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
