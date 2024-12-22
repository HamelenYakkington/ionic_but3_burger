import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBurgerPage } from './add-burger.page';

describe('AddBurgerPage', () => {
  let component: AddBurgerPage;
  let fixture: ComponentFixture<AddBurgerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBurgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
