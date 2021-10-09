import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteHistoryComponent } from './porte-history.component';

describe('PorteHistoryComponent', () => {
  let component: PorteHistoryComponent;
  let fixture: ComponentFixture<PorteHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
