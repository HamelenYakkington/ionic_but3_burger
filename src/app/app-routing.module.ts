import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./a-propos/a-propos.module').then( m => m.AProposPageModule)
  },
  {
    path: 'list-burger',
    loadChildren: () => import('./list-burger/list-burger.module').then( m => m.ListBurgerPageModule)
  },
  {
    path: 'modif-burger/:id',
    loadChildren: () => import('./modif-burger/modif-burger.module').then(m => m.ModifBurgerPageModule)
  },
  {
    path: 'add-burger',
    loadChildren: () => import('./add-burger/add-burger.module').then( m => m.AddBurgerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
