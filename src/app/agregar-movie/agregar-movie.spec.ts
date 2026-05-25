import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMovie } from './agregar-movie';

describe('AgregarMovie', () => {
  let component: AgregarMovie;
  let fixture: ComponentFixture<AgregarMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarMovie],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarMovie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
