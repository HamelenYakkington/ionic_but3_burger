import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifBurgerPage } from './modif-burger.page';

describe('ModifBurgerPage', () => {
  let component: ModifBurgerPage;
  let fixture: ComponentFixture<ModifBurgerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifBurgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
