import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupscriptionFormComponent } from './supscription-form.component';

describe('SupscriptionFormComponent', () => {
  let component: SupscriptionFormComponent;
  let fixture: ComponentFixture<SupscriptionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupscriptionFormComponent]
    });
    fixture = TestBed.createComponent(SupscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
