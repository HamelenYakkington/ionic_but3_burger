import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifBurgerPage } from './modif-burger.page';

const routes: Routes = [
  {
    path: '',
    component: ModifBurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifBurgerPageRoutingModule {}
