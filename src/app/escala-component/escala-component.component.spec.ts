import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaComponentComponent } from './escala-component.component';

describe('EscalaComponentComponent', () => {
  let component: EscalaComponentComponent;
  let fixture: ComponentFixture<EscalaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
