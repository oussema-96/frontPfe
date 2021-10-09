import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneAddComponent } from './personne-add.component';

describe('PersonneAddComponent', () => {
  let component: PersonneAddComponent;
  let fixture: ComponentFixture<PersonneAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
