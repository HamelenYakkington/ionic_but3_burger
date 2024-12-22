import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBurgerPage } from './list-burger.page';

describe('ListBurgerPage', () => {
  let component: ListBurgerPage;
  let fixture: ComponentFixture<ListBurgerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBurgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
