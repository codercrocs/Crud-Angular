import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDisplComponent } from './table-displ.component';

describe('TableDisplComponent', () => {
  let component: TableDisplComponent;
  let fixture: ComponentFixture<TableDisplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDisplComponent]
    });
    fixture = TestBed.createComponent(TableDisplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
