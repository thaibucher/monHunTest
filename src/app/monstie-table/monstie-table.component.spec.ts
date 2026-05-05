import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstieTableComponent } from './monstie-table.component';

describe('MonstieTableComponent', () => {
  let component: MonstieTableComponent;
  let fixture: ComponentFixture<MonstieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonstieTableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
