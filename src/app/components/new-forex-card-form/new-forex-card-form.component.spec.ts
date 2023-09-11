import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForexCardFormComponent } from './new-forex-card-form.component';

describe('NewForexCardFormComponent', () => {
  let component: NewForexCardFormComponent;
  let fixture: ComponentFixture<NewForexCardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewForexCardFormComponent]
    });
    fixture = TestBed.createComponent(NewForexCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
