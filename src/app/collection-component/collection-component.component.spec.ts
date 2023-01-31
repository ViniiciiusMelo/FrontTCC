import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionComponentComponent } from './collection-component.component';

describe('CollectionComponentComponent', () => {
  let component: CollectionComponentComponent;
  let fixture: ComponentFixture<CollectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
