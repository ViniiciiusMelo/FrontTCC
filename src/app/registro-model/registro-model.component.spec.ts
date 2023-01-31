import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroModelComponent } from './registro-model.component';

describe('RegistroModelComponent', () => {
  let component: RegistroModelComponent;
  let fixture: ComponentFixture<RegistroModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
