import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMovie } from './editar-movie';

describe('EditarMovie', () => {
  let component: EditarMovie;
  let fixture: ComponentFixture<EditarMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMovie],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMovie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
