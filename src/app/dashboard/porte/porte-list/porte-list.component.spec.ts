import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteListComponent } from './porte-list.component';

describe('PorteListComponent', () => {
  let component: PorteListComponent;
  let fixture: ComponentFixture<PorteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
