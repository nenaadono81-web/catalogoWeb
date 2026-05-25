import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMovie } from './eliminar-movie';

describe('EliminarMovie', () => {
  let component: EliminarMovie;
  let fixture: ComponentFixture<EliminarMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarMovie],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarMovie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
