import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navpar } from './navpar';

describe('Navpar', () => {
  let component: Navpar;
  let fixture: ComponentFixture<Navpar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navpar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navpar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
