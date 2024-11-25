import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMembreComponent } from './table-membre.component';

describe('TableMembreComponent', () => {
  let component: TableMembreComponent;
  let fixture: ComponentFixture<TableMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableMembreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
