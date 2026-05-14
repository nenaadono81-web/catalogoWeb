import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCatalogo } from './desc-catalogo';

describe('DescCatalogo', () => {
  let component: DescCatalogo;
  let fixture: ComponentFixture<DescCatalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescCatalogo],
    }).compileComponents();

    fixture = TestBed.createComponent(DescCatalogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
