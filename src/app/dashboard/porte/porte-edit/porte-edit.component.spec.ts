import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteEditComponent } from './porte-edit.component';

describe('PorteEditComponent', () => {
  let component: PorteEditComponent;
  let fixture: ComponentFixture<PorteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
