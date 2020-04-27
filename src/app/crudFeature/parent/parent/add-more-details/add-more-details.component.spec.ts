import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreDetailsComponent } from './add-more-details.component';

describe('AddMoreDetailsComponent', () => {
  let component: AddMoreDetailsComponent;
  let fixture: ComponentFixture<AddMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
