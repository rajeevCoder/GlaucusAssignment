import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientSystemComponent } from './table-client-system.component';

describe('TableClientSystemComponent', () => {
  let component: TableClientSystemComponent;
  let fixture: ComponentFixture<TableClientSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableClientSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
