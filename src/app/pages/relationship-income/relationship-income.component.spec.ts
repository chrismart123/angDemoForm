import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipIncomeComponent } from './relationship-income.component';

describe('RelationshipIncomeComponent', () => {
  let component: RelationshipIncomeComponent;
  let fixture: ComponentFixture<RelationshipIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
