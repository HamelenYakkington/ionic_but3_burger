import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBurgerPage } from './add-burger.page';

const routes: Routes = [
  {
    path: '',
    component: AddBurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBurgerPageRoutingModule {}
