import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneHistoryComponent } from './personne-history.component';

describe('PersonneHistoryComponent', () => {
  let component: PersonneHistoryComponent;
  let fixture: ComponentFixture<PersonneHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
