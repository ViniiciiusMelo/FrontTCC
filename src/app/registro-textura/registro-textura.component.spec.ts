import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTexturaComponent } from './registro-textura.component';

describe('RegistroTexturaComponent', () => {
  let component: RegistroTexturaComponent;
  let fixture: ComponentFixture<RegistroTexturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTexturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTexturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
